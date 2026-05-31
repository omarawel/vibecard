"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const request_1 = require("@/services/request");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Available = ({ name }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [materials, setMaterials] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/products/available-materials`, {
            headers: {
                "Content-Type": "application",
            },
        })
            .then((response) => {
            setMaterials(response.data.materials);
        })
            .catch((error) => {
            console.log(error);
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mt-2 bg-gray-800 rounded px-3 py-5 shadow shadow-zinc-950 mb-8", children: [(0, jsx_runtime_1.jsxs)("p", { className: "text-lg text-white font-poppins", children: ["Vibecard ", t(name)] }), materials.length > 0 && ((0, jsx_runtime_1.jsxs)("div", { className: "flex text-white font-poppins gap-x-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "font-poppins text-sm", children: t("availableIn") }), " ", materials.map((m) => ((0, jsx_runtime_1.jsxs)("p", { className: "text-teal-500 font-poppins text-sm font-bold first-letter:uppercase", children: [m === "recycled_paper" ? "PVC" : m, ",", " "] }, m)))] }))] }));
};
exports.default = Available;
