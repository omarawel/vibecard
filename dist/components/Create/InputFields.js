"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const InputFields = ({ label, type, inputName, required, value, name, location, website, emailAddress, tag, jobTitle, phone, company, }) => {
    const handleChange = (event) => {
        const value = event.currentTarget.value;
        switch (inputName) {
            case "Name":
                name && name(value);
                break;
            case "Email":
                emailAddress && emailAddress(value);
                break;
            case "Website":
                website && website(value);
                break;
            case "Tag Line":
                tag && tag(value);
                break;
            case "Company":
                company && company(value);
                break;
            case "Phone":
                phone && phone(value);
                break;
            case "Job Title":
                jobTitle && jobTitle(value);
                break;
            case "Location":
                location && location(value);
                break;
            default:
                break;
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-xs lg:text-gray-600 block", htmlFor: label, children: [inputName, required ? ((0, jsx_runtime_1.jsx)("span", { className: "text-red-700 text-2xl", children: "*" })) : ((0, jsx_runtime_1.jsx)("span", { className: "text-transparent text-2xl", children: "*" }))] }), (0, jsx_runtime_1.jsx)("input", { type: type, name: label, className: `lg:bg-gray-200 py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3 text-black`, onChange: handleChange, value: value })] }));
};
exports.default = InputFields;
