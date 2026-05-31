import { Link } from "react-router-dom";
import { useContentStore } from "../../store/useContentStore";
import { deezer, trustpilot, calendly } from "@/assets";

const SocialMedia = () => {
  const { socialMedia } = useContentStore();

  return (
    <div
      className={`lg:mb-0 mb-5 ${
        socialMedia.length > 0
          ? `grid ${
              socialMedia.length <= 3 ? "grid-cols-3" : "grid-cols-4"
            }  gap-3`
          : "invisible"
      }`}
    >
      {socialMedia.map((media) => (
        <>
          {media.icon === "trustpilot" ? (
            <div
              className={`flex rounded-md py-2 justify-center shadow-inner`}
              style={{
                backgroundColor: media.color,
              }}
            >
              <img
                src={trustpilot}
                alt="Trust pilot Logo"
                className="w-8 h-8 me-0 pe-0"
              />
            </div>
          ) : media.icon === "deezer" ? (
            <div
              className={`flex rounded-md py-2 justify-center shadow-inner`}
              style={{
                backgroundColor: media.color,
              }}
            >
              <img
                src={deezer}
                alt="Deezer Logo"
                className="w-8 h-8 me-0 pe-0"
              />
            </div>
          ) : media.icon === "calendly" ? (
            <div
              className={`flex rounded-md py-2 justify-center shadow-inner`}
              style={{
                backgroundColor: media.color,
              }}
            >
              <img
                src={calendly}
                alt="calendly Logo"
                className="w-8 h-8 me-0 pe-0"
              />
            </div>
          ) : (
            <Link
              key={media.icon}
              to={`${media.link}`}
              className={`${media.icon} text-white text-3xl text-center rounded-md py-2 shadow-inner`}
              style={{ backgroundColor: media.color }}
            ></Link>
          )}
        </>
      ))}
    </div>
  );
};

export default SocialMedia;
