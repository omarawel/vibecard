"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const assets_1 = require("@/assets");
const carousel_1 = require("@/components/ui/carousel");
const react_i18next_1 = require("react-i18next");
const testimony = [
    {
        id: 1,
        company: "Dallol ",
        job: "Company",
        name: "Dallol",
        img: assets_1.dallol,
        note: "testimonials2",
    },
    {
        id: 2,
        company: "Social Media",
        job: "Lifestyle Blogger",
        name: "Sitra",
        img: assets_1.sitra,
        note: "testimonials1",
    },
    {
        id: 3,
        company: "Social Media",
        job: "Social Media Influencer",
        name: "Hayu",
        img: assets_1.hayu,
        note: "testimonials3",
    },
    {
        id: 4,
        company: "Social Media",
        job: "Freelancer",
        name: "Sumeya",
        img: assets_1.sumeya,
        note: "testimonials4",
    },
];
const Testimonials = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(carousel_1.Carousel, { children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselContent, { className: "lg:w-[50%] gap-x-2 ms-1", children: testimony.map((testimony) => ((0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "lg:basis-1/1 secondary-bg rounded-lg", children: (0, jsx_runtime_1.jsxs)("div", { className: "relative lg:px-10 pb-10 pt-5", children: [(0, jsx_runtime_1.jsx)("img", { src: testimony.img, alt: "Photo", className: "w-24 h-24 object-cover rounded-full" }), (0, jsx_runtime_1.jsx)("p", { className: "absolute bi-quote right-0 top-0 text-gray-700 text-9xl " }), (0, jsx_runtime_1.jsx)("p", { className: "ms-3 mt-5 text-xl font-bold font-poppins text-white", children: testimony.name }), (0, jsx_runtime_1.jsx)("p", { className: "ms-3 my-2 text-white", children: testimony.job }), (0, jsx_runtime_1.jsx)("p", { className: "ms-3 text-sm text-gray-200", children: t(testimony.note) })] }) }, testimony.id))) }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:hidden", children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselPrevious, { className: "absolute -left-2" }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselNext, { className: "absolute -right-2" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:block md:hidden hidden", children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselPrevious, {}), (0, jsx_runtime_1.jsx)(carousel_1.CarouselNext, {})] })] }) }));
};
exports.default = Testimonials;
