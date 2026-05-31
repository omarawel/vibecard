import { sidebarIcons } from "../../services/sidebarIcons";

interface Props {
  active: string;
  handleClick: (value: string) => void;
}

const SmallDeviceSidebar = ({ active, handleClick }: Props) => {
  return (
    <div className="grid grid-cols-4 secondary-bg w-full">
      {/* Icon */}
      {sidebarIcons.map((icons) => (
        <div
          key={icons.id}
          onClick={() => handleClick(icons.title)}
          className={`text-center cursor-pointer ${
            active === icons.title
              ? "hover:bg-sky-950 text-gray-400"
              : "secondary-bg text-white"
          } p-2`}
        >
          <p className={`${icons.icon} text-xl`}></p>
          <p className="text-[10px] font-poppins text-gray-400 first-letter:uppercase">
            {icons.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SmallDeviceSidebar;
