import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Button from "../Button/Button";
import axios from "axios";
import { baseUrl } from "../../services/request";
import { useTranslation } from "react-i18next";

const schema = z.object({
  password: z.string().min(4, {
    message: "Password required.",
  }),
  email: z.string().email({ message: "Email is required." }),
});

type FormData = z.infer<typeof schema>;

const AmbassadorLogin = () => {
  const { t } = useTranslation();

  // Zustand
  // RRD
  const navigate = useNavigate();
  // States
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false);
  const [passwordType, setPasswordType] = useState(true);
  // Form Data and Validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // On Form Submit
  const onSubmit = (data: FieldValues) => {
    setLoader(true);

    const logData = {
      email: data.email,
      password: data.password,
    };

    axios
      .post(`${baseUrl}/api/v1/ambassador/login`, logData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then(() => {
        navigate("/affiliate");
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);
        if (error.response.status === 401) {
          setLoginError("Invalid Email and Password");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Login error */}
      {loginError !== "" && (
        <div className="relative">
          <p className="absolute -top-16 text-white text-sm bg-red-500 w-full rounded p-2">
            <span className="bi-exclamation-triangle-fill me-4"></span>
            {loginError}
          </p>
        </div>
      )}
      <p className="col-span-2 text-white text-xl lg:mt-0 mt-10">
        {t("trackAmbassador")}
      </p>
      <div className="bg-white rounded lg:p-8 p-4 mt-5">
        {/* Email */}
        <div className="mb-5">
          <label className="text-sm text-gray-700 block" htmlFor="email">
            {t("email")}
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            className="text-white font-poppins text-sm w-full py-3 mt-2 secondary-bg rounded focus:outline-none px-5 shadow shadow-gray-300 h-12"
          />
          {errors.email && (
            <p className="text-red-600 text-xs pt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-5 relative">
          <label className="text-sm text-gray-700 block" htmlFor="password">
            {t("password")}
          </label>

          <input
            {...register("password")}
            type={passwordType ? "password" : "text"}
            name="password"
            className="text-white font-poppins text-sm w-full py-3 mt-2 secondary-bg rounded focus:outline-none px-5 shadow shadow-gray-300 h-12"
          />
          <span
            onClick={() => {
              setShowPassword(!showPassword);
              setPasswordType(!passwordType);
            }}
            className={`absolute ${
              showPassword ? "bi-eye" : "bi-eye-slash"
            } right-2 top-9 cursor-pointer text-white px-2 text-lg border-l border-gray-500`}
          ></span>
          {errors.password && (
            <p className="text-red-600 text-xs pt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <Button loader={loader} label="Login" />
      </div>
    </form>
  );
};

export default AmbassadorLogin;
