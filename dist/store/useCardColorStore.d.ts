type State = {
    cardColorBg: string;
};
type Action = {
    updateCardColor: (cardColorBg: string) => void;
};
export declare const useCardColorStore: import("zustand").UseBoundStore<import("zustand").StoreApi<State & Action>>;
export {};
