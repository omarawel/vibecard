import { create } from "zustand";

type State = {
  coverColorBg: string;
};

type Action = {
  updateCoverColor: (coverColorBg: string) => void;
};

export const useCoverColorStore = create<State & Action>((set) => ({
  coverColorBg: "gradient-cover",
  updateCoverColor: (coverColorBg) => set(() => ({ coverColorBg })),
}));
