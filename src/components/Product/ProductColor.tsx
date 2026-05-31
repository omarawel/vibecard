export const bgColors = [
  { style: "bg-black", textColor: "text-white" },
  { style: "bg-white", textColor: "text-black" },
  { style: "bg-amber-500", textColor: "text-white" },
  { style: "bg-cyan-600", textColor: "text-black" },
  { style: "bg-gray-600", textColor: "text-white" },
  { style: "bg-fuchsia-900", textColor: "text-white" },
  { style: "bg-indigo-700", textColor: "text-white" },
  { style: "bg-red-700", textColor: "text-white" },
  { style: "bg-yellow-400", textColor: "text-white" },
  { style: "bg-green-600", textColor: "text-white" },
  // { style: "bg-teal-900", textColor: "text-white" },
  // { style: "bg-lime-500", textColor: "text-white" },
  // { style: "bg-orange-500", textColor: "text-white" },
  // { style: "bg-purple-700", textColor: "text-white" },
  // { style: "bg-pink-500", textColor: "text-white" },
];

interface Props {
  setBg: (style: string, color: string) => void;
  defaultBg: string;
  title?: string;
  price?: string;
}

const ProductColor = ({ defaultBg, setBg, title }: Props) => {
  return (
    <div className="mt-2 bg-gray-800 rounded px-3 py-5 shadow shadow-zinc-950 mb-8">
      <div className="flex justify-between">
        <p className="text-lg text-white">{title}</p>
        <div className="flex justify-center">
          {/* <p className="lg:text-sm mx-2 text-xs pt-1 text-white">Color</p> */}
          {bgColors.map((bg) => (
            <div
              key={bg.style}
              className={`border ${
                bg.style === defaultBg ? "border-black" : ""
              } rounded-full w-7 h-7 text-center`}
            >
              <button
                onClick={() => setBg(bg.style, bg.textColor)}
                className={`${bg.style} rounded-full w-5 h-5 mt-[3px]`}
              ></button>
            </div>
          ))}
        </div>
        {/* <p className="font-poppins text-white">{price}</p> */}
      </div>
    </div>
  );
};

export default ProductColor;
