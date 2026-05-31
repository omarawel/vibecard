"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const assets_1 = require("@/assets");
require("./slider.css");
const companies = [
    { id: 1, img: assets_1.company1 },
    { id: 2, img: assets_1.company2 },
    { id: 3, img: assets_1.company3 },
    { id: 4, img: assets_1.company4 },
    { id: 5, img: assets_1.company5 },
    { id: 6, img: assets_1.company6 },
];
const Companies = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "sliders", style: {
            "--width": "110px",
            "--height": "110px",
            "--quantity": companies.length,
        }, children: (0, jsx_runtime_1.jsx)("div", { className: "lists", children: companies.map((c) => ((0, jsx_runtime_1.jsx)("div", { className: "items", style: {
                    "--position": c.id,
                }, children: (0, jsx_runtime_1.jsx)("img", { src: c.img, alt: "Companies", className: "lg:h-full lg:w-full object-cover rounded-full" }) }, c.id))) }) }));
};
exports.default = Companies;
