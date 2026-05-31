import { Link } from "react-router-dom";
import Available from "./Available";

interface Props {
  img: string;
}

const BusinessCard = ({ img }: Props) => {
  return (
    <div className="lg:mb-0 mb-10">
      <Link to={"/products/business-card"}>
        <img
          src={img}
          alt=""
          className="rounded-lg lg:h-72 w-full object-cover"
        />
      </Link>
      {/* Available in*/}
      <Available name="businessCard" />
    </div>
  );
};

export default BusinessCard;
