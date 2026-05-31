"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const assets_1 = require("@/assets");
const Footer_1 = __importDefault(require("../Footer/Footer"));
const Navbar_1 = __importDefault(require("../Navbar/Navbar"));
const react_phone_input_2_1 = __importDefault(require("react-phone-input-2"));
require("react-phone-input-2/lib/style.css");
const zod_1 = require("zod");
const react_hook_form_1 = require("react-hook-form");
const zod_2 = require("@hookform/resolvers/zod");
const react_i18next_1 = require("react-i18next");
const react_1 = require("react");
const Button_1 = __importDefault(require("../Button/Button"));
const useDocumentTitle_1 = __importDefault(require("@/hooks/useDocumentTitle"));
const company_1 = __importDefault(require("@/services/company"));
const axios_1 = __importDefault(require("axios"));
const request_1 = require("@/services/request");
const schema = zod_1.z.object({
    fName: zod_1.z
        .string()
        .min(3, { message: "First name must be greater than 3 characters." }),
    lName: zod_1.z
        .string()
        .min(3, { message: "Last name must be greater than 3 characters." }),
    job: zod_1.z
        .string()
        .min(3, { message: "JobTitle must be greater than 2 characters." }),
    company: zod_1.z.string().min(3, { message: "Company name required." }),
    people: zod_1.z
        .number({
        invalid_type_error: "Number of employees must be 2 and greater than 2",
    })
        .min(2),
    how_many: zod_1.z
        .number({
        invalid_type_error: "Number of digital cards must be 2 and greater than 2",
    })
        .min(2),
    learn: zod_1.z.string().optional(),
    email: zod_1.z.string().email({ message: "Email is required." }),
});
const Company = () => {
    const [title] = (0, react_1.useState)("Vibecard Companies and Teams");
    (0, useDocumentTitle_1.default)(title);
    const { t } = (0, react_i18next_1.useTranslation)();
    const [loader, setLoader] = (0, react_1.useState)(false);
    const [phone, setPhone] = (0, react_1.useState)("");
    const [phoneError, setPhoneError] = (0, react_1.useState)(false);
    const [countryName, setCountryName] = (0, react_1.useState)("");
    const [success, setSuccess] = (0, react_1.useState)("");
    const [submitError, setSubmitError] = (0, react_1.useState)(false);
    // Scroll to top
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    const { register, handleSubmit, formState: { errors }, } = (0, react_hook_form_1.useForm)({ resolver: (0, zod_2.zodResolver)(schema) });
    const handleOnChange = (value, data) => {
        setPhone(value);
        setCountryName(data.name); // Store the country name in the state
    };
    // On Form Submit
    const onSubmit = (data) => {
        if (!phone) {
            setPhoneError(true);
            return;
        }
        setPhoneError(false);
        setLoader(true);
        const companyData = {
            work_email: data.email,
            first_name: data.fName,
            last_name: data.lName,
            company_name: data.company,
            job_title: data.job,
            phone_number: phone,
            country: countryName,
            how_heard_about_us: data.learn,
            number_of_employees: data.people,
            number_of_employees_needs_vibecard: data.how_many,
        };
        axios_1.default
            .post(`${request_1.baseUrl}/api/v1/auth/for-companies`, companyData, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then((response) => {
            setLoader(false);
            setSuccess(response.data.message);
        })
            .catch((error) => {
            setSubmitError(true);
            setLoader(false);
            console.log(error);
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto lg:px-9 px-3 lg:mt-32 mt-24", children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid lg:grid-cols-2 lg:gap-x-4 mt-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:mt-40 mt-5 overflow-hidden", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white font-poppins lg:text-5xl font-bold text-3xl mb-5", children: t("company-title") }), (0, jsx_runtime_1.jsx)("p", { className: "text-white font-poppins text-lg lg:px-0", children: t("company-desc") })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center lg:mt-0 mt-8", children: (0, jsx_runtime_1.jsx)("img", { src: assets_1.company, alt: "Company", className: "rounded lg:w-full w-96" }) })] }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white text-center mt-16 font-poppins lg:text-3xl text-xl", children: t("ready-to-get-started") }), (0, jsx_runtime_1.jsx)("p", { className: "text-center mt-2 font-poppins text-gray-300 lg:text-lg", children: t("submit-the-form") }), submitError && ((0, jsx_runtime_1.jsx)("div", { className: "fixed text-center top-24 right-0 lg:w-[30%] w-[98%]", children: (0, jsx_runtime_1.jsxs)("p", { className: "z-50 bg-red-600 text-lg rounded py-4 text-white", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-exclamation-triangle-fill me-3" }), "Something went wrong."] }) })), success !== "" && ((0, jsx_runtime_1.jsx)("div", { className: "fixed text-center top-24 right-0 lg:w-[30%] w-[98%]", children: (0, jsx_runtime_1.jsxs)("p", { className: "ms-2 z-40 bg-green-500 text-white text-lg rounded text-center py-4", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-check-circle-fill me-4" }), success] }) })), (0, jsx_runtime_1.jsxs)("div", { className: "grid lg:grid-cols-2 gap-x-5 lg:px-20 px-2 mt-10", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-400 block font-poppins", htmlFor: "email", children: t("email") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("email"), { type: "email", name: "email", className: "text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300" })), errors.email && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.email.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-400 block font-poppins", htmlFor: "fName", children: t("fName") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("fName"), { type: "text", name: "fName", className: "text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300" })), errors.fName && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.fName.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-400 block font-poppins", htmlFor: "lName", children: t("lName") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("lName"), { type: "text", name: "lName", className: "text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300" })), errors.lName && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.lName.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-400 block font-poppins", htmlFor: "job", children: t("job") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("job"), { type: "text", name: "job", className: "text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300" })), errors.job && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.job.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-400 block font-poppins", htmlFor: "company", children: t("company") + " Name" }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("company"), { type: "text", name: "company", className: "text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300" })), errors.company && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.company.message }))] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-400 block font-poppins mb-2", htmlFor: "phone", children: t("phone") }), (0, jsx_runtime_1.jsx)(react_phone_input_2_1.default, { country: "de", value: phone, onChange: handleOnChange, inputStyle: {
                                                    width: "100%",
                                                    fontSize: "16px",
                                                    height: "45px",
                                                } }), phoneError && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: "Valid Phone number required." }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-400 block font-poppins", htmlFor: "people", children: t("how-many") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("people", { valueAsNumber: true }), { type: "number", name: "people", className: "text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300", min: 2 })), errors.people && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.people.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-400 block font-poppins", htmlFor: "how_many", children: t("how-many-card") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("how_many", { valueAsNumber: true }), { type: "number", name: "how_many", className: "text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300", min: 2 })), errors.how_many && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.how_many.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-400 block font-poppins", htmlFor: "how_many", children: t("how-learn") }), (0, jsx_runtime_1.jsxs)("select", Object.assign({}, register("learn"), { name: "learn", className: "text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300", children: [(0, jsx_runtime_1.jsx)("option", { defaultValue: "", hidden: true }), company_1.default.map((c) => ((0, jsx_runtime_1.jsx)("option", { value: c.value, children: c.value }, c.id)))] }))] }), (0, jsx_runtime_1.jsx)("div", { className: "mt-1", children: (0, jsx_runtime_1.jsx)(Button_1.default, { loader: loader, label: "Submit" }) })] })] })] }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = Company;
