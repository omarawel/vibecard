import { create } from "zustand";

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
  // productId: number | string;
  orientation: string;
};

type Actions = {
  updateFront: (card: Partial<Card>) => void;
  updateBack: (card: Partial<Card>) => void;
  // setProductId: (id: number | string) => void;
  setCardOrientation: (orientation: string) => void;
};

// Create the Zustand store
const useProduct = create<State & Actions>((set) => ({
  front: {
    text: "",
    textSize: "text-4xl",
    image: null,
    bgColor: "",
    fontStyle: "syne",
    imageSize: "40",
    pickedBg: "#ffffff",
    color: "#000000",
    extraTextPosition: { x: "", y: "" },
    imagePosition: { x: "", y: "" },
    textPosition: { x: "", y: "" },
    extraText: "",
    extraTextColor: "",
    extraTextFontSize: "",
    extraTextFontStyle: "",
    rotation: 0,
  },
  back: {
    text: "",
    textSize: "text-4xl",
    image: null,
    bgColor: "",
    fontStyle: "syne",
    imageSize: "40",
    pickedBg: "#ffffff",
    extraTextPosition: { x: "", y: "" },
    imagePosition: { x: "", y: "" },
    textPosition: { x: "", y: "" },
    color: "#000000",
    extraText: "",
    extraTextColor: "",
    extraTextFontSize: "",
    extraTextFontStyle: "",
    rotation: 0,
  },
  // productId: 0,
  orientation: "",

  updateFront: (card) =>
    set((state) => ({
      front: { ...state.front, ...card },
    })),

  updateBack: (card) =>
    set((state) => ({
      back: { ...state.back, ...card },
    })),

  // setProductId: (id) => set({ productId: id }),
  setCardOrientation: (orientation) => set({ orientation: orientation }),
  // setOrientation : (orientation) => set({orientation: orientation}))
}));

export default useProduct;
