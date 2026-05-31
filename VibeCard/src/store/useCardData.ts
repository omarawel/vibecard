import { create } from "zustand";

export interface PreviewProps {
  profile: string | null;
  cover: string | null;
  logo: string | null;
}

interface State {
  pronounVal: string | null;
  nameVal: string | null;
  emailVal: string | null;
  phoneVal: string | null;
  tagLineVal: string | null;
  jobTitleVal: string | null;
  locationVal: string | null;
  companyVal: string | null;
  preview: PreviewProps;
}

interface Actions {
  setCardName: (name: string | null) => void;
  setCardPhone: (phone: string | null) => void;
  setCardEmail: (email: string | null) => void;
  setCardPronoun: (pronoun: string | null) => void;
  setCardJob: (jobTitle: string | null) => void;
  setCardTagLine: (tagLine: string | null) => void;
  setCardCompany: (company: string | null) => void;
  setCardLocation: (location: string | null) => void;
  setPreview: (type: keyof PreviewProps, value: string | null) => void;
}

export const useCardData = create<State & Actions>((set) => ({
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

  setPreview: (type, value) =>
    set((state) => ({
      preview: {
        ...state.preview,
        [type]: value,
      },
    })),
}));
