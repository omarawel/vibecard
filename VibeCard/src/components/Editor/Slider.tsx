import React from "react";
import "./slider.css";

interface CustomSliderProps {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  value,
  min,
  max,
  step,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="relative mt-10">
      {/* <label htmlFor="zoom" className="text-white text-sm">
        Zoom in / out
      </label> */}
      <input
        type="range"
        className="custom-slider myt-10 mb-5 w-full bg-sky-900"
        value={value}
        min={min}
        max={max}
        step={step}
        name="zoom"
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomSlider;
