interface Props {
    link: string;
    icon: string;
    color: string;
    label?: string;
}
type State = {
    companyLogo: boolean;
    socialMedia: Props[];
    contact: Props[];
};
type Actions = {
    updateCoverLogo: (companyLogo: boolean) => void;
    updateSocialMedia: (socialMedia: Props[]) => void;
    updateContacts: (contact: Props[]) => void;
};
export declare const useContentStore: import("zustand").UseBoundStore<import("zustand").StoreApi<State & Actions>>;
export {};
