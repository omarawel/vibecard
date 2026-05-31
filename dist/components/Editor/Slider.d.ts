import React from "react";
import "./slider.css";
interface CustomSliderProps {
    value: number;
    min: number;
    max: number;
    step: number;
    onChange: (value: number) => void;
}
declare const CustomSlider: React.FC<CustomSliderProps>;
export default CustomSlider;
