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
export declare const useCardData: import("zustand").UseBoundStore<import("zustand").StoreApi<State & Actions>>;
export {};
