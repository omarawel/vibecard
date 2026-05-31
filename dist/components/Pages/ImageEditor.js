"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const LargeEditor_1 = __importDefault(require("../Editor/LargeEditor"));
const SmallEditor_1 = __importDefault(require("../Editor/SmallEditor"));
const Loading_1 = __importDefault(require("../Loading/Loading"));
const useDocumentTitle_1 = __importDefault(require("@/hooks/useDocumentTitle"));
const react_i18next_1 = require("react-i18next");
const ImageEditor = () => {
    const [title] = (0, react_1.useState)("Design your Card");
    (0, useDocumentTitle_1.default)(title);
    const { t } = (0, react_i18next_1.useTranslation)();
    const [alert, setAlert] = (0, react_1.useState)(true);
    const [isMobile, setIsMobile] = (0, react_1.useState)(null);
    // Scroll to top
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    // Reload
    (0, react_1.useEffect)(() => {
        let isReloading = false;
        const handleBeforeUnload = (event) => {
            if (isReloading) {
                const message = "Are you sure you want to leave? Your changes might not be saved.";
                event.returnValue = message; // Standard for most browsers
                return message; // For some older browsers
            }
        };
        const handlePopState = () => {
            isReloading = false; // Reset the flag if back navigation happens
        };
        const handleUnload = () => {
            isReloading = true; // Set flag to true only when a reload is detected
        };
        // Add event listeners
        window.addEventListener("beforeunload", handleBeforeUnload);
        window.addEventListener("unload", handleUnload);
        window.addEventListener("popstate", handlePopState);
        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
            window.removeEventListener("unload", handleUnload);
            window.removeEventListener("popstate", handlePopState);
        };
    }, [history]);
    // Screen Detector
    (0, react_1.useEffect)(() => {
        function detectMobile() {
            const userAgent = navigator.userAgent || navigator.vendor;
            // Check for Android devices
            if (/android/i.test(userAgent)) {
                return true;
            }
            // Check for iOS devices
            if (/iPad|iPhone|iPod/.test(userAgent)) {
                return true;
            }
            // Check for other mobile user agents
            if (/Mobile|webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
                return true;
            }
            return false;
        }
        // Set the mobile state based on detection
        setIsMobile(detectMobile());
    }, []);
    if (isMobile === null) {
        return (0, jsx_runtime_1.jsx)(Loading_1.default, {});
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [alert && ((0, jsx_runtime_1.jsxs)("div", { className: "lg:hidden block", children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay top-0 z-[55]" }), (0, jsx_runtime_1.jsx)("div", { className: "fixed top-0 left-0 flex z-[60] justify-center items-center h-[100dvh] w-full lg:px-0 px-3", children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:w-[35%] w-full hero-bg rounded px-5 py-6 secondary-bg shadow shadow-zinc-900 text-white", children: [(0, jsx_runtime_1.jsxs)("p", { className: "text-xl font-bold text-gray-400", children: [" ", (0, jsx_runtime_1.jsx)("span", { className: "bi-info-circle me-2" }), " ", t("notice")] }), (0, jsx_runtime_1.jsx)("p", { className: "mt-3 text-sm", children: t("alert") }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setAlert(!alert), className: "btn-bg w-full mt-3 shadow p-3 rounded", children: "Got it" })] }) })] })), !isMobile && ((0, jsx_runtime_1.jsx)("div", { className: "lg:block hidden mt-28 relative z-50", children: (0, jsx_runtime_1.jsx)(LargeEditor_1.default, {}) })), isMobile && ((0, jsx_runtime_1.jsx)("div", { className: "lg:hidden block", children: (0, jsx_runtime_1.jsx)(SmallEditor_1.default, {}) }))] }));
};
exports.default = ImageEditor;
