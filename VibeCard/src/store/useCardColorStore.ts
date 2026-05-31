import { create } from "zustand";

type State = {
  cardColorBg: string;
};

type Action = {
  updateCardColor: (cardColorBg: string) => void;
};

export const useCardColorStore = create<State & Action>((set) => ({
  cardColorBg: "#222222",
  updateCardColor: (cardColorBg) => set(() => ({ cardColorBg })),
}));
