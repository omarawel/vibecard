"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useContentStore = void 0;
const zustand_1 = require("zustand");
// Create the Zustand store
exports.useContentStore = (0, zustand_1.create)((set) => ({
    companyLogo: false,
    socialMedia: [],
    contact: [
        {
            link: "",
            icon: "bi-envelope-fill",
            color: "#ffffff",
        },
        {
            link: "",
            icon: "bi-telephone-fill",
            color: "#22c55e",
        },
    ],
    updateCoverLogo: (companyLogo) => set(() => ({ companyLogo })),
    updateSocialMedia: (socialMedia) => set(() => ({ socialMedia })),
    updateContacts: (contact) => set(() => ({ contact })),
}));
