import { Link } from "react-router-dom";

const AffiliateFooter = () => {
  return (
    <footer className="secondary-bg mt-5 py-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-3">
          <div className="">
            <p className="text-sm text-gray-400">Customer Support</p>
            <Link className="text-white text-xs" to={"/contact-us"}>
              Contact
            </Link>
          </div>
          <div className="">
            <p className="text-sm text-gray-400">Legal</p>
            <Link className="text-white text-xs" to={"/privacy-policy"}>
              Privacy Policy
            </Link>
          </div>
          <div className="">
            <p className="text-sm text-gray-400 text-end">
              @2024 <span className="logo-font">vibecard</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AffiliateFooter;
