type State = {
    layout: string;
    watermark: boolean;
};
type Action = {
    updateLayout: (layout: string) => void;
    updateWatermark: (watermark: boolean) => void;
};
export declare const useLayoutStore: import("zustand").UseBoundStore<import("zustand").StoreApi<State & Action>>;
export {};
