import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  type: string;
  label: string;
  password?: boolean;
  forgotPassword?: boolean;
}

const input = ({ type, label, password, forgotPassword }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`mb-5 ${password && "relative"} `}>
      <label className="text-sm text-gray-500 block" htmlFor={label}>
        {label}
      </label>
      <input
        type={password ? (!showPassword ? "password" : "text") : type}
        name={label}
        className="bg-gray-100 py-2 rounded-lg w-full focus:outline-none px-5 mt-1 block"
      />
      {password && (
        <span
          onClick={() => setShowPassword(!showPassword)}
          className={`absolute ${
            showPassword ? "bi-eye" : "bi-eye-slash"
          } right-2 top-8 cursor-pointer`}
        ></span>
      )}
      {forgotPassword && (
        <div className="mt-2 text-end">
          <Link to="/" className="text-xs text-blue-600">
            Forgot Password?
          </Link>
        </div>
      )}
    </div>
  );
};

export default input;
