import { Link } from "react-router-dom";
import Available from "./Available";

interface Props {
  img: string;
}

const SocialMediaProduct = ({ img }: Props) => {
  return (
    <div className="lg:mb-0 mb-10">
      <Link to="/products/card-social-media">
        <img src={img} alt="" className="rounded-lg h-72 w-full object-cover" />
      </Link>
      {/* Available in */}
      <Available name="socialMedia" />
    </div>
  );
};

export default SocialMediaProduct;
