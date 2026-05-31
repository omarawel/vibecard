import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import RegForm from "../Register/RegForm";
import SignUpOption from "../SignUpOption/SignUpOption";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { useTranslation } from "react-i18next";

const Register = () => {
  const [title] = useState("Register");
  useDocumentTitle(title);

  const { t } = useTranslation();

  const [username, setUsername] = useState("");
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

  return (
    <div className="lg:px-40 md:px-36 px-2 pb-10">
      <div className="lg:mb-5 lg:pt-10 md:mb-10 md:pt-10 py-5 lg:ps-24">
        <Link to={"/"} className="text-2xl text-white logo-font">
          vibecard
        </Link>
      </div>
      <div className="flex justify-center w-full">
        <div className="lg:w-5/6 md:w-5/6 w-full">
          <div className="lg:grid grid-cols-2 gap-5">
            <div className="lg:p-10 md:p-9 p-8 shadow-lg secondary-bg rounded-lg text-white border border-violet-800">
              <h1 className="text-2xl">{t("join")} vibecard</h1>
              <p className="text-sm mb-10 mt-2">{t("sign")}</p>

              {/* Form */}
              <RegForm
                username={(username: string) => setUsername(username)}
                buttonClicked={(value: boolean) =>
                  setSubmitButtonClicked(value)
                }
              />

              <div className="relative lg:block hidden lg:-top-72 left-[30em]">
                <div className="absolute lg:right-[15em] w-full right-36 top-40 bulb"></div>
              </div>

              {/* Sign up option */}
              <SignUpOption />

              {/* Footer */}
              <p className="text-sm mt-5 text-end text-gray-500">
                {t("already")}
                <Link to="/login" className="text-sm text-blue-600 ms-1">
                  Login
                </Link>
              </p>
            </div>
            {/* Card */}
            <Card submitted={submitButtonClicked} username={username} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
