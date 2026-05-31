"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCardData = void 0;
const zustand_1 = require("zustand");
exports.useCardData = (0, zustand_1.create)((set) => ({
    nameVal: "",
    phoneVal: null,
    emailVal: null,
    tagLineVal: null,
    jobTitleVal: null,
    companyVal: null,
    locationVal: null,
    pronounVal: null,
    preview: {
        cover: null,
        logo: null,
        profile: null,
    },
    setCardName: (nameVal) => set({ nameVal }),
    setCardPhone: (phoneVal) => set({ phoneVal }),
    setCardEmail: (emailVal) => set({ emailVal }),
    setCardPronoun: (pronounVal) => set({ pronounVal }),
    setCardJob: (jobTitleVal) => set({ jobTitleVal }),
    setCardTagLine: (tagLineVal) => set({ tagLineVal }),
    setCardCompany: (companyVal) => set({ companyVal }),
    setCardLocation: (locationVal) => set({ locationVal }),
    setPreview: (type, value) => set((state) => ({
        preview: Object.assign(Object.assign({}, state.preview), { [type]: value }),
    })),
}));
