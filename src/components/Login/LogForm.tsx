import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Button from "../Button/Button";
import axios from "axios";
import { baseUrl } from "../../services/request";
import { useTranslation } from "react-i18next";

interface Props {
  buttonClicked: (value: boolean) => void;
  username?: (username: string) => void;
}

const schema = z.object({
  password: z.string().min(4, {
    message: "Password required.",
  }),
  email: z.string().email({ message: "Email is required." }),
});

type FormData = z.infer<typeof schema>;

const Form = ({ buttonClicked }: Props) => {
  const { t } = useTranslation();

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
    buttonClicked(true);
    setLoader(true);
    axios
      .post(`${baseUrl}/api/v1/auth/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
        setLoginError("Invalid Email and Password");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Login error */}
      {loginError !== "" && (
        <div className="relative">
          <p className=" -top-10 text-red-600 text-sm">
            <span className="bi-exclamation-triangle-fill me-4"></span>
            {loginError}
          </p>
        </div>
      )}
      {/* Email */}
      <div className="mb-5">
        <label className="text-sm text-gray-500 block" htmlFor="email">
          {t("email")}
        </label>
        <input
          {...register("email")}
          type="email"
          name="email"
          className="text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded-lg focus:outline-none px-5 shadow shadow-gray-300"
        />
        {errors.email && (
          <p className="text-red-600 text-xs pt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="mb-5 relative">
        <label className="text-sm text-gray-500 block" htmlFor="password">
          {t("password")}
        </label>

        <input
          {...register("password")}
          type={passwordType ? "password" : "text"}
          name="password"
          className="text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded-lg focus:outline-none px-5 shadow shadow-gray-300"
        />
        <span
          onClick={() => {
            setShowPassword(!showPassword);
            setPasswordType(!passwordType);
          }}
          className={`absolute ${
            showPassword ? "bi-eye" : "bi-eye-slash"
          } right-2 top-9 cursor-pointer text-black px-2 text-lg border-l border-gray-500`}
        ></span>
        {errors.password && (
          <p className="text-red-600 text-xs pt-1">{errors.password.message}</p>
        )}
        <div className="mt-2 text-end">
          <Link to="/request" className="text-xs text-blue-600">
            {t("forgot")}
          </Link>
        </div>
      </div>

      {/* Button */}
      <Button loader={loader} label="Login" />
    </form>
  );
};

export default Form;
