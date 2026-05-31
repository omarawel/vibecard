"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_share_1 = require("react-share");
const ShareComponent = ({ url, title, description }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_share_1.FacebookShareButton, { url: url, title: title, className: "flex", style: { width: "50px", margin: 0 }, children: (0, jsx_runtime_1.jsx)(react_share_1.FacebookIcon, { size: 32, round: true }) }), (0, jsx_runtime_1.jsx)(react_share_1.TwitterShareButton, { url: url, title: title, className: "flex", style: { width: "50px" }, children: (0, jsx_runtime_1.jsx)(react_share_1.TwitterIcon, { size: 32, round: true }) }), (0, jsx_runtime_1.jsx)(react_share_1.LinkedinShareButton, { url: url, title: title, summary: description, className: "flex", style: { width: "50px" }, children: (0, jsx_runtime_1.jsx)(react_share_1.LinkedinIcon, { size: 32, round: true }) }), (0, jsx_runtime_1.jsx)(react_share_1.WhatsappShareButton, { url: url, title: title, className: "flex", style: { width: "50px" }, children: (0, jsx_runtime_1.jsx)(react_share_1.WhatsappIcon, { size: 32, round: true }) })] }));
};
exports.default = ShareComponent;
