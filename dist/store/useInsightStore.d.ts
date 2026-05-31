type State = {
    activeCard: string | null;
};
type Action = {
    updateActiveCard: (activeCard: string) => void;
};
export declare const useInsightStore: import("zustand").UseBoundStore<import("zustand").StoreApi<State & Action>>;
export {};
