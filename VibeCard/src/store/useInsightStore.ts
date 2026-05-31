import { create } from "zustand";

type State = {
  activeCard: string | null;
};

type Action = {
  updateActiveCard: (activeCard: string) => void;
};

export const useInsightStore = create<State & Action>((set) => ({
  activeCard: null,
  updateActiveCard: (activeCard) => set(() => ({ activeCard })),
}));
