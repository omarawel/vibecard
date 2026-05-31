import { Link } from "react-router-dom";
import { useContentStore } from "../../store/useContentStore";

const Contacts = () => {
  const { contact } = useContentStore();

  return (
    <div
      className={`lg:my-2 my-5 ${
        contact.length > 0
          ? `grid ${
              contact.length + 2 <= 3 ? "grid-cols-3" : "grid-cols-5"
            }  gap-5 my-5`
          : "invisible"
      }`}
    >
      {contact.map((c) => (
        <Link
          key={c.icon}
          to={`${c.link}`}
          className={`${c.icon} text-3xl text-center rounded-lg py-2 shadow-inner`}
          style={{ color: c.color.replace("bg", "text") }}
        ></Link>
      ))}
    </div>
  );
};

export default Contacts;
