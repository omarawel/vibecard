interface Fonts {
  style: string;
  name: string;
}

interface Size {
  size: string;
  name: string;
}

// Font Styles
export const fonts: Fonts[] = [
  {
    style: "font-poppins",
    name: "Poppins",
  },
  {
    style: "pompiere",
    name: "Pompiere",
  },
  {
    style: "font-monospace",
    name: "Monospace",
  },
  {
    style: "syne",
    name: "Syne",
  },
  {
    style: "caveat",
    name: "Caveat",
  },
  {
    style: "metamorphous",
    name: "Metamorphous",
  },
  {
    style: "chakra",
    name: "Chakra",
  },
  {
    style: "playwrite",
    name: "Playwrite",
  },
  {
    style: "ubuntu",
    name: "Ubuntu",
  },
  {
    style: "roboto",
    name: "Roboto",
  },
];

// Font Size
export const fontSize: Size[] = [
  { size: "text-xl", name: "text-xl" },
  { size: "text-lg", name: "text-lg" },
  { size: "text-md", name: "text-md" },
  { size: "text-sm", name: "text-sm" },
  { size: "text-xs", name: "text-xs" },
];
