import { create } from "zustand";

type State = {
  layout: string;
  watermark: boolean;
};

type Action = {
  updateLayout: (layout: string) => void;
  updateWatermark: (watermark: boolean) => void;
};

export const useLayoutStore = create<State & Action>((set) => ({
  layout: "default",
  watermark: false,
  updateLayout: (layout) => set(() => ({ layout })),
  updateWatermark: (watermark) => set(() => ({ watermark })),
}));
