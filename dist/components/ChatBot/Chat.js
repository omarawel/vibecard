"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Chat = () => {
    // const [chatBox, setChaBox] = useState(false);
    const { i18n } = (0, react_i18next_1.useTranslation)();
    (0, react_1.useEffect)(() => {
        const script = document.createElement("script");
        script.src =
            "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { className: "relative", children: (0, jsx_runtime_1.jsx)("div", { className: "rounded lg:h-[88%] h-[88.5%] lg:w-96 w-[100%]", children: (0, jsx_runtime_1.jsx)("df-messenger", { intent: "WELCOME", "chat-title": "Vibebot_de", "agent-id": "52d05800-ee8a-482c-9383-571b10579904", "language-code": `${i18n.language}` }) }) }));
};
exports.default = Chat;
