"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_easy_crop_1 = __importDefault(require("react-easy-crop"));
const cropImage_1 = require("../../services/cropImage");
const ImageCropper = ({ imageSrc, onCropComplete, aspect }) => {
    const [crop, setCrop] = (0, react_1.useState)({ x: 0, y: 0 });
    const [zoom, setZoom] = (0, react_1.useState)(1);
    const [croppedArea, setCroppedArea] = (0, react_1.useState)(null);
    const onCropChange = (crop) => {
        setCrop(crop);
    };
    const onCropCompleteInternal = (0, react_1.useCallback)((_, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
    }, []);
    const onCrop = () => __awaiter(void 0, void 0, void 0, function* () {
        if (croppedArea && imageSrc) {
            const croppedImage = yield (0, cropImage_1.getCroppedImg)(imageSrc, croppedArea);
            onCropComplete(croppedImage);
        }
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay z-50" }), (0, jsx_runtime_1.jsxs)("div", { className: "absolute lg:top-20 lg:w-[90%] top-0 w-full lg:h-[80%] h-[100%] left-0 z-50", children: [(0, jsx_runtime_1.jsx)(react_easy_crop_1.default, { image: imageSrc, crop: crop, zoom: zoom, aspect: aspect, onCropChange: onCropChange, onCropComplete: onCropCompleteInternal, onZoomChange: setZoom }), (0, jsx_runtime_1.jsx)("p", { className: "absolute right-5 top-5 z-50 bg-green-400 bi-check text- text-xl cursor-pointer rounded px-5", onClick: onCrop })] })] }));
};
exports.default = ImageCropper;
