import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import useAuthStore from "@/store/useUserData";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { baseUrl } from "@/services/request";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be greater than 3 characters." }),
  password: z.string().min(8, {
    message: "Password must be greater than 8 characters.",
  }),
});

type FormData = z.infer<typeof schema>;

const Setting = () => {
  const [title] = useState("Setting");
  useDocumentTitle(title);

  const { t } = useTranslation();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/auth/check-username/${username}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then(() => {
        setUsernameError(false);
      })
      .catch((error) => {
        if (error.response.status === 409) {
          setUsernameError(true);
        }
      });
  }, [username]);

  const { user, email, logout } = useAuthStore();

  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState(false);

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
    console.log(data);

    if (data.password !== confirmPassword) {
      return setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
      setLoader(true);

      axios
        .post(`${baseUrl}/api/v1/auth/update`, data, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          // Logout
          axios
            .post(
              `${baseUrl}/api/v1/auth/logout`,
              {},
              {
                headers: {
                  "Content-Type": "application/json",
                },
                withCredentials: true,
              }
            )
            .then(() => {
              logout();
              navigate("/login");
            })
            .catch((err) => {
              console.error("Logout failed: ", err);
            });

          // navigate(`/login}`);
        })
        .catch((error) => {
          console.log(error);
          setErrorMsg(true);
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className="">
        <div className="lg:container mx-auto lg:p-10 px-3 lg:mt-16 mt-28">
          <div className="flex justify-center">
            <div className="py-10 lg:px-10 px-5 rounded secondary-bg shadow">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="mb-5 text-2xl text-white">
                  {t("accountSetting")}
                </h1>
                <p className="text-gray-400 mb-5">
                  {t("hello")} <span className="text-teal-500">{user} </span>
                  {t("settingDesc")}
                </p>

                {/* Error message */}
                {errorMsg && (
                  <p className="text-red-600 my-5 text-lg">
                    {t("settingError")}
                  </p>
                )}

                {/* Username */}
                <div className="mb-5">
                  <label
                    className="text-sm text-gray-500 block"
                    htmlFor="username"
                  >
                    {t("username")}
                  </label>
                  <input
                    {...register("username")}
                    type="text"
                    name="username"
                    className={`bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                      errors.username && "border-red-400 border-1 border"
                    }`}
                    onChange={(e) => setUsername(e.currentTarget.value)}
                  />
                  {errors.username && (
                    <p className="text-red-400 text-xs pt-1">
                      {errors.username.message}
                    </p>
                  )}
                  {usernameError && (
                    <p className="text-red-400 text-sm pt-2">
                      Username already exist!
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label
                    className="text-sm text-gray-500 block"
                    htmlFor="email"
                  >
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`bg-gray-400 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm`}
                    value={email ? email : ""}
                    readOnly
                    disabled
                  />
                </div>

                {/* Password */}
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
                    className={`bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                      errors.password && "border-red-400 border-1 border"
                    }`}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute ${
                      showPassword ? "bi-eye" : "bi-eye-slash"
                    } right-2 top-8 cursor-pointer`}
                  ></span>
                  {errors.password && (
                    <p className="text-red-400 text-xs pt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="mb-5">
                  <label
                    className="text-sm text-gray-500 block"
                    htmlFor="password"
                  >
                    {t("conPass")}
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    className={`bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                      confirmPasswordError && "border-red-400 border-1 border"
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
                </div>
                <div className="mt-10">
                  {/* Button */}
                  <Button loader={loader} label={t("update")} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Setting;
