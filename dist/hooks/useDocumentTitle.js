"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useDocumentTitle(title) {
    (0, react_1.useLayoutEffect)(() => {
        document.title = title;
    }, [title]);
}
exports.default = useDocumentTitle;
