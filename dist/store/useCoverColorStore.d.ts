type State = {
    coverColorBg: string;
};
type Action = {
    updateCoverColor: (coverColorBg: string) => void;
};
export declare const useCoverColorStore: import("zustand").UseBoundStore<import("zustand").StoreApi<State & Action>>;
export {};
