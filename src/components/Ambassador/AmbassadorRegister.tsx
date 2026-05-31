import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Button from "../Button/Button";
import axios from "axios";
import { baseUrl } from "../../services/request";
import { useTranslation } from "react-i18next";

interface Social {
  name: string;
  value: string;
  icon: string;
  color: string;
}

export const socialMedias: Social[] = [
  { name: "Tik Tok", value: "tiktok", icon: "bi-tiktok", color: "text-white" },
  {
    name: "Instagram",
    value: "instagram",
    icon: "bi-instagram",
    color: "text-pink-500",
  },
  {
    name: "YouTube",
    value: "youtube",
    icon: "bi-youtube",
    color: "text-red-500",
  },
  {
    name: "Facebook",
    value: "facebook",
    icon: "bi-facebook",
    color: "text-blue-500",
  },
  {
    name: "Twitch",
    value: "twitch",
    icon: "bi-twitch",
    color: "text-purple-600",
  },
  {
    name: "Twitter",
    value: "twitter",
    icon: "bi-twitter",
    color: "text-cyan-600",
  },
  {
    name: "Linkedin",
    value: "linkedin",
    icon: "bi-linkedin",
    color: "text-blue-600",
  },
  {
    name: "Website",
    value: "website",
    icon: "bi-globe",
    color: "text-blue-600",
  },
] as const;

const schema = z.object({
  twitter: z.string().optional(),
  twitch: z.string().optional(),
  youtube: z.string().optional(),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  tiktok: z.string().optional(),
  website: z.string().optional(),
  linkedin: z.string().optional(),
  first_name: z
    .string()
    .min(3, { message: "First Name must be greater than 3 characters." }),
  last_name: z
    .string()
    .min(3, { message: "Last Name must be greater than 3 characters." }),
  email: z.string().email({ message: "Email address required." }),
  password: z.string().min(8, {
    message: "Password must be greater than 8 characters.",
  }),
});

type FormData = z.infer<typeof schema>;

const AmbassadorRegister = () => {
  const { t } = useTranslation();
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    setLoader(true);

    const registerAmbassador = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      tiktoc_link: `https://tiktok.com/${data.tiktok}`,
      twich_link: `https://twitch.com/${data.twitch}`,
      twitter_link: `https://twitter.com/${data.twitter}`,
      instagram_link: `https://tiktok.com/${data.instagram}`,
      facebook_link: `https://fb.com/${data.facebook}`,
      youtube_link: `https://youtube.com/${data.youtube}`,
      linkedin_link: `https://linkedin.com/${data.linkedin}`,
      website_link: `https://${data.website}`,
    };

    axios
      .post(`${baseUrl}/api/v1/ambassador/register`, registerAmbassador, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setLoader(false);
        setSuccessMsg(true);
        setTimeout(() => {
          setSuccessMsg(false);
        }, 3000);
      })
      .catch((error) => {
        setLoader(false);
        setRegisterError("Something went wrong");
        console.log(error);
      });
  };

  return (
    <>
      {successMsg && (
        <div className="fixed z-50 lg:right-20 right-1 lg:top-5 top-2 bg-green-500 lg:w-96 rounded px-4 py-2 lg:mx-0 mx-2">
          <p>{t("ambassadorSuccess")}</p>
          <p className="mt-2">{t("stayTuned")}</p>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {/* Email exist error */}
        {registerError !== "" && (
          <div className="relative">
            <p className="absolute -top-9 text-white text-sm bg-red-500 w-full rounded p-2">
              <span className="bi-exclamation-triangle-fill me-4"></span>
              {registerError}
            </p>
          </div>
        )}

        {/* Register */}
        <p className="col-span-2 text-white text-xl lg:mt-0 mt-10">
          {t("beAmbassador")}
        </p>
        <div className="lg:grid grid-cols-2 gap-x-10 bg-white rounded lg:p-8 p-4 mt-5">
          {/* First Name */}
          <div className="lg:mb-4 mb-3">
            <label className="text-sm text-gray-700 block" htmlFor="username">
              {t("fName")} <span className="bi-asterisk text-[5px]"></span>
            </label>
            <input
              {...register("first_name")}
              type="text"
              name="first_name"
              className={`text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ${
                errors.email && "border-red-600 border-1 border"
              }`}
            />
            {errors.first_name && (
              <p className="text-red-600 text-xs pt-1">
                {errors.first_name.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="lg:mb-4 mb-3">
            <label className="text-sm text-gray-700 block" htmlFor="username">
              {t("lName")} <span className="bi-asterisk text-[5px]"></span>
            </label>
            <input
              {...register("last_name")}
              type="text"
              name="last_name"
              className={`text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ${
                errors.email && "border-red-600 border-1 border"
              }`}
            />
            {errors.last_name && (
              <p className="text-red-600 text-xs pt-1">
                {errors.last_name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="lg:mb-4 mb-3">
            <label className="text-sm text-gray-700 block" htmlFor="email">
              {t("email")} <span className="bi-asterisk text-[5px]"></span>
            </label>
            <input
              {...register("email")}
              type="email"
              name="email"
              className={`text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ${
                errors.email && "border-red-600 border-1 border"
              }`}
            />
            {errors.email && (
              <p className="text-red-600 text-xs pt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="lg:mb-4 mb-3 relative">
            <label className="text-sm text-gray-700 block" htmlFor="password">
              {t("password")} <span className="bi-asterisk text-[5px]"></span>
            </label>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              name="password"
              className={`text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ${
                errors.password && "border-red-600 border-1 border"
              }`}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute ${
                showPassword ? "bi-eye" : "bi-eye-slash"
              } right-2 top-8 cursor-pointer text-white px-2 text-lg border-l border-gray-500`}
            ></span>
            {errors.password && (
              <p className="text-red-600 text-xs pt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Social medias */}
          {socialMedias.map((social) => (
            <div key={social.value} className="lg:mb-4 mb-3 relative">
              <label className="text-xs text-gray-900 block" htmlFor="username">
                {social.name}
              </label>
              <span
                className={`absolute left-1 top-8 cursor-pointer px-2 text-lg border-r border-gray-500 bi-at text-white`}
              ></span>
              {/* Tik tok */}
              {social.value === "tiktok" && (
                <input
                  {...register("tiktok")}
                  type="text"
                  className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-12"
                />
              )}
              {/* instagram */}
              {social.value === "instagram" && (
                <input
                  {...register("instagram")}
                  type="text"
                  className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-12"
                />
              )}
              {/* youtube */}
              {social.value === "youtube" && (
                <input
                  {...register("youtube")}
                  type="text"
                  className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-12"
                />
              )}
              {/* facebook */}
              {social.value === "facebook" && (
                <input
                  {...register("facebook")}
                  type="text"
                  className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-12"
                />
              )}
              {/* twitch */}
              {social.value === "twitch" && (
                <input
                  {...register("twitch")}
                  type="text"
                  className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-12"
                />
              )}
              {/* twitter */}
              {social.value === "twitter" && (
                <input
                  {...register("twitter")}
                  type="text"
                  className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-12"
                />
              )}
              {/* linkedin */}
              {social.value === "linkedin" && (
                <input
                  {...register("linkedin")}
                  type="text"
                  className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-12"
                />
              )}
              {/* website */}
              {social.value === "website" && (
                <input
                  {...register("website")}
                  type="text"
                  className="text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-12"
                />
              )}
              <span
                className={`absolute right-2 top-8 cursor-pointer px-2 text-lg border-l border-gray-500 ${social.icon} ${social.color}`}
              ></span>
            </div>
          ))}
          {/* Button */}
          <div className="col-span-2">
            <Button loader={loader} label="Submit" />
          </div>
        </div>
      </form>
    </>
  );
};

export default AmbassadorRegister;
