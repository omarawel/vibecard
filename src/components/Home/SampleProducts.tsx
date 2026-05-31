import { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

export const bgColors = [
  { style: "bg-teal-600", textColor: "text-black" },
  { style: "bg-red-600", textColor: "text-white" },
  { style: "bg-gray-500", textColor: "text-black" },
  { style: "bg-lime-500", textColor: "text-black" },
  { style: "bg-yellow-300", textColor: "text-black" },
  { style: "bg-cyan-600", textColor: "text-black" },
  { style: "bg-amber-500", textColor: "text-white" },
  { style: "bg-fuchsia-700", textColor: "text-black" },
  { style: "bg-black", textColor: "text-white" },
];

const SampleProducts = () => {
  const [metalBg, setMetalBg] = useState({
    bg: "bg-amber-500",
    color: "text-white",
  });

  const [plasticBg, setPlasticBg] = useState({
    bg: "bg-gray-500",
    color: "text-black",
  });

  const [bambooBg, setBambooBg] = useState({
    bg: "bg-black",
    color: "text-white",
  });

  return (
    <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-x-5 px-2">
      {/* Metal */}
      <div className="lg:mb-0 mb-10">
        <Link to={"/product/29"}>
          <Card textColor={metalBg.color} bg={metalBg.bg} />
        </Link>
        <div className="mt-4 secondary-bg rounded-xl px-3 py-5 shadow shadow-zinc-950">
          <div className="flex justify-between">
            <p className="text-lg text-white">
              Vibecard{" "}
              <span className="text-teal-400 font-extrabold">Metal</span> Cards
            </p>
            <p className="text-white font-poppins">€35</p>
          </div>
          <div className="flex justify-center gap-x-2 mt-4">
            {bgColors.map((bg) => (
              <div
                key={bg.style}
                className={`border ${
                  bg.style === metalBg.bg && "border-black"
                } rounded-full w-7 h-7 text-center`}
              >
                <button
                  onClick={() =>
                    setMetalBg({ bg: bg.style, color: bg.textColor })
                  }
                  className={`${bg.style} rounded-full w-5 h-5 mt-[3px]`}
                ></button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Plastic */}
      <div className="lg:mb-0 mb-10">
        <Link to={"/product/29"}>
          <Card textColor={plasticBg.color} bg={plasticBg.bg} />
        </Link>
        <div className="mt-4 secondary-bg rounded-xl px-3 py-5 shadow shadow-zinc-950">
          <div className="flex justify-between">
            <p className="text-white">
              Vibecard{" "}
              <span className="text-teal-400 font-extrabold">
                Recycled Papers
              </span>{" "}
              Cards
            </p>
            <p className="text-white font-poppins">€10</p>
          </div>
          <div className="flex justify-center gap-x-2 mt-4">
            {bgColors.map((bg) => (
              <div
                key={bg.style}
                className={`border ${
                  bg.style === plasticBg.bg && "border-black"
                } rounded-full w-7 h-7 text-center`}
              >
                <button
                  onClick={() =>
                    setPlasticBg({ bg: bg.style, color: bg.textColor })
                  }
                  className={`${bg.style} rounded-full w-5 h-5 mt-[3px]`}
                ></button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bamboo */}
      <div className="lg:mb-0 mb-10">
        <Link to={"/product/29"}>
          <Card textColor={bambooBg.color} bg={bambooBg.bg} />
        </Link>

        <div className="mt-4 secondary-bg rounded-xl px-3 py-5 shadow shadow-zinc-950">
          <div className="flex justify-between">
            <p className="text-white">
              Vibecard{" "}
              <span className="text-teal-400 font-extrabold">Bamboo </span>
              Cards
            </p>
            <p className="text-white font-poppins">€25</p>
          </div>
          <div className="flex justify-center gap-x-2 mt-4">
            {bgColors.map((bg) => (
              <div
                key={bg.style}
                className={`border ${
                  bg.style === bambooBg.bg && "border-black"
                } rounded-full w-7 h-7 text-center`}
              >
                <button
                  onClick={() =>
                    setBambooBg({ bg: bg.style, color: bg.textColor })
                  }
                  className={`${bg.style} rounded-full w-5 h-5 mt-[3px]`}
                ></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleProducts;
