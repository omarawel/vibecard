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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCroppedImg = void 0;
const getCroppedImg = (imageSrc_1, pixelCrop_1, ...args_1) => __awaiter(void 0, [imageSrc_1, pixelCrop_1, ...args_1], void 0, function* (imageSrc, pixelCrop, rotation = 0) {
    const image = yield createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        throw new Error("Could not get canvas context");
    }
    const radians = (rotation * Math.PI) / 180;
    // Calculate bounding box size for the rotated image
    const rotatedWidth = Math.abs(Math.cos(radians) * image.width) +
        Math.abs(Math.sin(radians) * image.height);
    const rotatedHeight = Math.abs(Math.sin(radians) * image.width) +
        Math.abs(Math.cos(radians) * image.height);
    // Create a canvas to draw the rotated image
    canvas.width = rotatedWidth;
    canvas.height = rotatedHeight;
    // Rotate the image around its center
    ctx.translate(rotatedWidth / 2, rotatedHeight / 2);
    ctx.rotate(radians);
    ctx.translate(-image.width / 2, -image.height / 2);
    ctx.drawImage(image, 0, 0);
    // Extract the cropped image
    const croppedCanvas = document.createElement("canvas");
    const croppedCtx = croppedCanvas.getContext("2d");
    if (!croppedCtx) {
        throw new Error("Could not get cropped canvas context");
    }
    croppedCanvas.width = pixelCrop.width;
    croppedCanvas.height = pixelCrop.height;
    // Draw the cropped image
    croppedCtx.drawImage(canvas, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height);
    // Return the cropped image as a blob URL
    return new Promise((resolve, reject) => {
        croppedCanvas.toBlob((file) => {
            if (file) {
                resolve(URL.createObjectURL(file));
            }
            else {
                reject(new Error("Canvas is empty"));
            }
        }, "image/jpeg");
    });
});
exports.getCroppedImg = getCroppedImg;
const createImage = (url) => new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); // Avoid CORS issues
    image.src = url;
});
