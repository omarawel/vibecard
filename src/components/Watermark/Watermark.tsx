import { watermark } from "@/assets";

const Watermark = () => {
  return (
    <>
      <div className="absolute top-1 px-1 right-2 z-40 watermark-effect">
        <img src={watermark} alt="vibecard" className="watermark p-1" />
      </div>
      <div className="absolute top-0 z-50  h-6 w-full"></div>
    </>
  );
};

export default Watermark;
