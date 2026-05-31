import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Button from "../Button/Button";
import axios from "axios";
import { baseUrl } from "../../services/request";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
  buttonClicked: (value: boolean) => void;
  username: (username: string) => void;
}

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be greater than 3 characters." }),
  email: z.string().email({ message: "Email address required." }),
  password: z.string().min(8, {
    message: "Password must be greater than 8 characters.",
  }),
});

type FormData = z.infer<typeof schema>;

const Form = ({ buttonClicked, username }: Props) => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const [registerError, setRegisterError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FieldValues) => {
    if (data.password !== confirmPassword) {
      return setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
      buttonClicked(true);
      setLoader(true);
      axios
        .get(`${baseUrl}/api/v1/auth/check-email/${data.email}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          axios
            .post(`${baseUrl}/api/v1/auth/register`, data, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then(() => {
              navigate(`/verify?email=${data.email}`);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch(() => {
          setLoader(false);
          setRegisterError("Email already exist.");
        });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Email exist error */}
      {registerError !== "" && (
        <div className="relative">
          <p className="absolute -top-7 text-red-600 text-sm">
            <span className="bi-exclamation-triangle-fill me-4"></span>
            {registerError}
          </p>
        </div>
      )}
      {/* Username */}
      <div className="mb-5">
        <label className="text-sm text-gray-500 block" htmlFor="username">
          {t("username")}
        </label>
        <input
          {...register("username")}
          type="text"
          name="username"
          className={`text-black bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
            errors.email && "border-red-600 border-1 border"
          }`}
          onChange={(e) => username(e.currentTarget.value)}
        />
        {errors.username && (
          <p className="text-red-600 text-xs pt-1">{errors.username.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-5">
        <label className="text-sm text-gray-500 block" htmlFor="email">
          {t("email")}
        </label>
        <input
          {...register("email")}
          type="email"
          name="email"
          className={`text-black bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
            errors.email && "border-red-600 border-1 border"
          }`}
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
          type={showPassword ? "text" : "password"}
          name="password"
          className={`text-black bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
            errors.password && "border-red-600 border-1 border"
          }`}
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className={`absolute ${
            showPassword ? "bi-eye" : "bi-eye-slash"
          } right-2 top-8 cursor-pointer text-black px-2 text-lg border-l border-gray-500`}
        ></span>
        {errors.password && (
          <p className="text-red-600 text-xs pt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="mb-5">
        <label className="text-sm text-gray-500 block" htmlFor="password">
          {t("conPass")}
        </label>
        <input
          type="password"
          name="confirm-password"
          className={`text-black bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
            confirmPasswordError && "border-red-600 border-1 border"
          }`}
          onChange={(event) => setConfirmPassword(event.currentTarget.value)}
        />

        {confirmPasswordError && (
          <p className="text-red-600 text-xs pt-1">Password does not match!</p>
        )}
      </div>

      {/* Button */}
      <Button loader={loader} label="Register" />
    </form>
  );
};

export default Form;
