"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const useContentStore_1 = require("../../store/useContentStore");
const assets_1 = require("@/assets");
const SocialMedia = () => {
    const { socialMedia } = (0, useContentStore_1.useContentStore)();
    return ((0, jsx_runtime_1.jsx)("div", { className: `lg:mb-0 mb-5 ${socialMedia.length > 0
            ? `grid ${socialMedia.length <= 3 ? "grid-cols-3" : "grid-cols-4"}  gap-3`
            : "invisible"}`, children: socialMedia.map((media) => ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: media.icon === "trustpilot" ? ((0, jsx_runtime_1.jsx)("div", { className: `flex rounded-md py-2 justify-center shadow-inner`, style: {
                    backgroundColor: media.color,
                }, children: (0, jsx_runtime_1.jsx)("img", { src: assets_1.trustpilot, alt: "Trust pilot Logo", className: "w-8 h-8 me-0 pe-0" }) })) : media.icon === "deezer" ? ((0, jsx_runtime_1.jsx)("div", { className: `flex rounded-md py-2 justify-center shadow-inner`, style: {
                    backgroundColor: media.color,
                }, children: (0, jsx_runtime_1.jsx)("img", { src: assets_1.deezer, alt: "Deezer Logo", className: "w-8 h-8 me-0 pe-0" }) })) : media.icon === "calendly" ? ((0, jsx_runtime_1.jsx)("div", { className: `flex rounded-md py-2 justify-center shadow-inner`, style: {
                    backgroundColor: media.color,
                }, children: (0, jsx_runtime_1.jsx)("img", { src: assets_1.calendly, alt: "calendly Logo", className: "w-8 h-8 me-0 pe-0" }) })) : ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `${media.link}`, className: `${media.icon} text-white text-3xl text-center rounded-md py-2 shadow-inner`, style: { backgroundColor: media.color } }, media.icon)) }))) }));
};
exports.default = SocialMedia;
