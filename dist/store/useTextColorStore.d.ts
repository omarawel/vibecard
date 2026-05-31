interface Props {
    font: string;
    color: string;
    size: string;
}
export type State = {
    pronoun: Props;
    name: Props;
    tagLine: Props;
    jobTitle: Props;
    company: Props;
    location: Props;
    button: Props;
};
type Action = {
    updateFont: (key: keyof State, font: string) => void;
    updateColor: (key: keyof State, color: string) => void;
    updateSize: (key: keyof State, size: string) => void;
};
export declare const useTextColorStore: import("zustand").UseBoundStore<import("zustand").StoreApi<State & Action>>;
export {};
