import axios from "axios";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/request";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Button/Button";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { useTranslation } from "react-i18next";

const schema = z.object({
  password: z.string().min(8, {
    message: "Password must be greater than 8 characters.",
  }),
});

type FormData = z.infer<typeof schema>;

const CheckEmail = () => {
  const [title] = useState("Verify you Email");
  useDocumentTitle(title);

  const { t } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const searchParams = new URLSearchParams(location.search);
  const emailAddress = searchParams.get("email");
  const token = searchParams.get("token");

  // New Password
  const onSubmit = (data: FieldValues) => {
    if (data.password !== confirmPassword) {
      return setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);

      const reset = {
        token: token,
        new_password: data.password,
      };

      console.log(reset);

      axios
        .put(`${baseUrl}/api/v1/auth/reset`, reset, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="h-[100vh] bg">
      <div className="lg:px-40 md:px-36 px-2">
        <div className="lg:pt-10 md:pt-10 py-5 lg:ps-24">
          <Link to={"/"} className="text-2xl text-white logo-font">
            vibecard
          </Link>
        </div>
      </div>

      <div className="flex justify-center lg:px-40 md:px-36 px-2 lg:mt-28 md:mt-28">
        <div className="content-center lg:w-3/6 md:w-5/6 w-full h-96">
          <div className="lg:p-10 md:p-9 p-8 shadow-lg secondary-bg rounded-lg">
            {emailAddress && (
              <>
                <h1 className="text-4xl">{t("resetTitle")}</h1>
                <p className="text-gray-400 text-sm mt-6">
                  {t("resetTitle2")}{" "}
                  <span className="text-blue-600">{emailAddress}</span>{" "}
                  {t("resetTitle3")}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  {t("resetTitle4")}
                  link{" "}
                  <Link to="/request" className="text-xl text-blue-600">
                    {t("here")}
                  </Link>
                  .
                </p>
              </>
            )}
            {token && (
              <>
                <h1 className="text-2xl text-white">{t("enterPassword")}</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="my-8 px-5">
                  <div className="mb-5 relative">
                    <label
                      className="text-sm text-gray-500 block"
                      htmlFor="password"
                    >
                      {t("password")}
                    </label>
                    <input
                      {...register("password")}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className={`bg-gray-100 py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                        errors.password && "border-red-600 border-1 border"
                      }`}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className={`absolute ${
                        showPassword ? "bi-eye" : "bi-eye-slash"
                      } right-2 top-8 cursor-pointer`}
                    ></span>
                    {errors.password && (
                      <p className="text-red-600 text-xs pt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  {/* Confirm password */}
                  <label
                    className="text-sm text-gray-500 block mt-5"
                    htmlFor="password"
                  >
                    {t("conPass")}
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    className={`bg-gray-100 py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                      confirmPasswordError && "border-red-600 border-1 border"
                    }`}
                    onChange={(event) =>
                      setConfirmPassword(event.currentTarget.value)
                    }
                  />

                  {confirmPasswordError && (
                    <p className="text-red-600 text-xs pt-1">
                      Password does not match!
                    </p>
                  )}
                  {/* Button */}
                  <Button label={t("resetPass")} />
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
