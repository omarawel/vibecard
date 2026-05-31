import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import LogForm from "../Login/LogForm";
import SignUpOption from "../SignUpOption/SignUpOption";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();

  const [title] = useState("Login");
  useDocumentTitle(title);

  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

  return (
    <div className="lg:px-40 md:px-36 px-2 h-[100vh]">
      <div className="lg:mb-10 lg:pt-10 md:mb-10 md:pt-10 py-5 lg:ps-24">
        <Link to={"/"} className="text-2xl text-white logo-font">
          vibecard
        </Link>
      </div>
      <div className="flex justify-center w-full">
        <div className="lg:w-5/6 md:w-5/6 w-full">
          <div className="lg:grid grid-cols-2">
            <div className="lg:p-10 md:p-9 p-8 shadow-lg secondary-bg rounded-lg text-white border border-violet-800 mb-3">
              <h1 className="text-2xl">{t("welcome")}</h1>
              <p className="text-sm mb-14 mt-2">{t("login-note")}</p>

              {/* Form */}
              <LogForm
                buttonClicked={(value: boolean) =>
                  setSubmitButtonClicked(value)
                }
              />

              <div className="relative lg:block hidden lg:-top-64 left-[30em] -top-40">
                <div className="absolute lg:right-[15em] w-full right-36 top-40 bulb"></div>
              </div>

              {/* Sign up option */}
              <SignUpOption />

              {/* Footer */}
              <p className="text-sm mt-5 text-end text-gray-500">
                {t("account")}
                <Link to="/register" className="text-sm text-blue-600 ms-1">
                  {t("create")}
                </Link>
              </p>
            </div>

            {/* Card */}
            <Card submitted={submitButtonClicked} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
