interface Position {
    x: string | number;
    y: string | number;
}
interface Card {
    text: string;
    bgColor: string;
    image: File | null;
    textSize: string;
    fontStyle: string;
    imageSize: string;
    imagePosition: Position;
    textPosition: Position;
    extraTextPosition: Position;
    pickedBg: string;
    color: string;
    extraText: string;
    extraTextColor: string;
    extraTextFontSize: string;
    extraTextFontStyle: string;
    rotation?: number;
}
type State = {
    front: Card;
    back: Card;
    orientation: string;
};
type Actions = {
    updateFront: (card: Partial<Card>) => void;
    updateBack: (card: Partial<Card>) => void;
    setCardOrientation: (orientation: string) => void;
};
declare const useProduct: import("zustand").UseBoundStore<import("zustand").StoreApi<State & Actions>>;
export default useProduct;
