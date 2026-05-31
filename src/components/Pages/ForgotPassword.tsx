import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { baseUrl } from "../../services/request";
import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { useTranslation } from "react-i18next";

const schema = z.object({
  email: z.string().email({ message: "Email address required." }),
});

type FormData = z.infer<typeof schema>;

const ForgotPassword = () => {
  const [title] = useState("Forgot Password?");
  useDocumentTitle(title);
  const { t } = useTranslation();

  const [forgotPasswordError, setForgotPasswordError] = useState("");
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    setLoader(true);
    axios
      .put(
        `${baseUrl}/api/v1/auth/password-reset-request?email=${data.email}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        navigate(`/check-email?email=${data.email}`);
      })
      .catch(() => {
        setLoader(false);
        setForgotPasswordError("Email address not found");
      });
  };

  return (
    <div className="h-[100vh]">
      <div className="lg:px-40 md:px-36 px-2">
        <div className="lg:pt-10 md:pt-10 py-5 lg:ps-24">
          <Link to={"/"} className="text-2xl text-white logo-font">
            vibecard
          </Link>
        </div>
      </div>

      <div className="flex justify-center lg:px-40 md:px-36 px-2 lg:mt-28 md:mt-24 mt-20">
        <div className="content-center lg:w-3/6 md:w-5/6 w-full h-96">
          <div className="lg:p-10 md:p-9 p-8 shadow-lg secondary-bg rounded-lg text-white border border-violet-800">
            <h1 className="text-2xl">{t("resetPass")}</h1>
            <p className="text-gray-400 text-sm mt-6">
              {t("forgotPasswordNote1")}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              {t("forgotPasswordNote2")}
            </p>
            {forgotPasswordError !== "" && (
              <p className="text-red-600 text-sm mt-5">
                <span className="bi-exclamation-triangle-fill me-4"></span>
                {forgotPasswordError}
              </p>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="my-5">
              <label className="text-sm text-gray-500 block" htmlFor="email">
                {t("email")}
              </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                className={`bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                  errors.email && "border-red-600 border-1 border"
                }`}
              />
              {errors.email && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.email.message}
                </p>
              )}
              {/* Button */}
              <Button loader={loader} label={t("resetPass")} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
