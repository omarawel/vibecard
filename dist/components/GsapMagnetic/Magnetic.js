"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const gsap_1 = __importDefault(require("gsap"));
const Magnetic = ({ children }) => {
    const magnetic = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const element = magnetic.current;
        if (!element)
            return;
        const mouseMove = (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = element.getBoundingClientRect();
            const scale = 0.1; // Adjust the effect scale here
            const x = (clientX - (left + width / 2)) * scale;
            const y = (clientY - (top + height / 2)) * scale;
            gsap_1.default.to(element, { x, y, duration: 1, ease: "elastic.out(1, 0.3)" });
            // Apply the same effect to all child text elements
            const textElements = element.querySelectorAll("p, span, h1, h2, h3, h4, h5, h6");
            textElements.forEach((textElement) => {
                gsap_1.default.to(textElement, {
                    x,
                    y,
                    duration: 1,
                    ease: "elastic.out(1, 0.3)",
                });
            });
        };
        const mouseLeave = () => {
            gsap_1.default.to(element, {
                x: 0,
                y: 0,
                duration: 1,
                ease: "elastic.out(1, 0.3)",
            });
            // Reset the position of all child text elements
            const textElements = element.querySelectorAll("p, span, h1, h2, h3, h4, h5, h6, img");
            textElements.forEach((textElement) => {
                gsap_1.default.to(textElement, {
                    x: 0,
                    y: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.3)",
                });
            });
        };
        element.addEventListener("mousemove", mouseMove);
        element.addEventListener("mouseleave", mouseLeave);
        return () => {
            element.removeEventListener("mousemove", mouseMove);
            element.removeEventListener("mouseleave", mouseLeave);
        };
    }, []);
    return react_1.default.cloneElement(children, { ref: magnetic });
};
exports.default = Magnetic;
