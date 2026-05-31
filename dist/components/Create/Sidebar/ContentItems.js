"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const assets_1 = require("@/assets");
const useContentStore_1 = require("../../../store/useContentStore");
const react_1 = require("react");
const ContentItems = ({ id, error, contents, selectedContents, deleteItem, update, setId, onError, onLink, item, }) => {
    const { socialMedia, contact } = (0, useContentStore_1.useContentStore)();
    const [value, setValue] = (0, react_1.useState)([]);
    const handleChange = (value, id) => {
        setValue((prevValue) => {
            const existingIndex = prevValue.findIndex((v) => v.id === id);
            if (existingIndex >= 0) {
                // If the id already exists, update the corresponding value
                const updatedValue = [...prevValue];
                updatedValue[existingIndex].value = value;
                return updatedValue;
            }
            else {
                // If the id does not exist, add a new entry
                return [...prevValue, { id: id, value: value }];
            }
        });
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "pb-5", children: contents.map((content) => {
            var _a, _b, _c;
            return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: `relative flex justify-between p-2 rounded-lg mt-3 shadow-md shadow-zinc-800`, style: { backgroundColor: content.color.replace("text", "bg") }, children: [content.icon === "deezer" ? ((0, jsx_runtime_1.jsxs)("div", { className: "flex ms-2", children: [(0, jsx_runtime_1.jsx)("img", { src: assets_1.deezer, alt: "Deezer Logo", className: "w-7 h-7 me-0 pe-0" }), (0, jsx_runtime_1.jsx)("span", { className: "text-xs ms-4 pt-2 text-gray-200 chakra", children: content.label })] })) : content.icon === "trustpilot" ? ((0, jsx_runtime_1.jsxs)("div", { className: "flex ms-2", children: [(0, jsx_runtime_1.jsx)("img", { src: assets_1.trustpilot, alt: "Deezer Logo", className: "w-7 h-7 me-0 pe-0" }), (0, jsx_runtime_1.jsx)("span", { className: "text-xs ms-4 pt-2 text-gray-200 chakra", children: content.label })] })) : content.icon === "calendly" ? ((0, jsx_runtime_1.jsxs)("div", { className: "flex ms-2", children: [(0, jsx_runtime_1.jsx)("img", { src: assets_1.calendly, alt: "calendly Logo", className: "w-7 h-7 me-0 pe-0" }), (0, jsx_runtime_1.jsx)("span", { className: "text-xs ms-4 pt-2 text-black chakra", children: content.label })] })) : ((0, jsx_runtime_1.jsx)("p", { className: `${content.icon} lg:text-xl text-3xl text-white ms-3`, children: (0, jsx_runtime_1.jsx)("span", { className: "text-xs ms-5 text-gray-200 chakra", children: content.label }) })), id === content.id ? ((0, jsx_runtime_1.jsx)("p", { onClick: () => {
                                    setId(0);
                                    onError(false);
                                }, className: "bi-x-lg bg-red-800 text-white rounded px-2 cursor-pointer shadow-red-600 shadow active:shadow-none pt-1" })) : selectedContents.includes(content.icon) ? ((0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-2", children: [(0, jsx_runtime_1.jsx)("p", { onClick: () => deleteItem(content.icon), className: "bi-trash bg-red-800 text-white rounded px-2 cursor-pointer shadow-red-600 shadow active:shadow-none pt-1" }), (0, jsx_runtime_1.jsx)("p", { onClick: () => setId(content.id), className: "bi-pen-fill bg-green-800 text-white rounded px-2 cursor-pointer shadow-red-600 shadow active:shadow-none pt-1" })] })) : ((0, jsx_runtime_1.jsx)("p", { onClick: () => setId(content.id), className: "bi-plus-lg bg-white rounded-full w-8 h-8 px-2 cursor-pointer shadow-zinc-900 shadow-lg active:shadow-none pt-1 text-black" }))] }), content.id === id && ((0, jsx_runtime_1.jsxs)("div", { className: "relative bg-white animate__animated animate__fadeInDown mt-1", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", className: `bg-white w-full py-2 px-3 rounded shadow-md border border-black shadow-zinc-950 placeholder:text-sky-900 text-sm focus:outline-none text-black lg:h-auto h-12 ${error && "border border-red-500 font-poppins font-semibold"} pe-[54px]`, placeholder: item === "media"
                                    ? ((_a = socialMedia.find((s) => s.icon === content.icon)) === null || _a === void 0 ? void 0 : _a.link) ||
                                        content.placeholder
                                    : ((_b = contact.find((c) => c.icon === content.icon)) === null || _b === void 0 ? void 0 : _b.link) ||
                                        content.placeholder, onChange: (e) => {
                                    onLink(content.path + e.currentTarget.value);
                                    handleChange(e.currentTarget.value, content.id);
                                }, autoFocus: true, value: ((_c = value.find((v) => v.id === content.id)) === null || _c === void 0 ? void 0 : _c.value) || "" }), (0, jsx_runtime_1.jsx)("p", { onClick: () => {
                                    update(content);
                                }, className: "absolute bi-check top-0 right-0 text-xl px-3 me-1 mt-1 text-center bg-sky-800 text-white rounded cursor-pointer shadow-md shadow-zinc-900 hover:bg-sky-900" })] }))] }, content.id));
        }) }));
};
exports.default = ContentItems;
