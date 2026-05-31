import { Link } from "react-router-dom";
import Available from "./Available";

interface Props {
  img: string;
}

const GoogleReview = ({ img }: Props) => {
  return (
    <div className="lg:mb-0 mb-10">
      <Link to={`/products/card-google-review`}>
        <img src={img} alt="" className="rounded-lg h-72 w-full object-cover" />
      </Link>
      {/* Color */}
      <Available name="googleReview" />
    </div>
  );
};

export default GoogleReview;
