export const imageSize = [
  "5",
  "8",
  "10",
  "14",
  "16",
  "20",
  "24",
  "28",
  "32",
  "36",
  "40",
  "44",
  "52",
  "60",
  "64",
  "72",
  "80",
  "full",
];

export const fontSize = [
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
  "8xl",
];

export const textAlignment = [
  { name: "Default", style: "relative text-center" },
  {
    name: "Top Left",
    style: "absolute top-2 left-2",
  },
  {
    name: "Top Right",
    style: "absolute top-2 right-2",
  },
  {
    name: "Bottom Left",
    style: "absolute bottom-2 left-2",
  },
  {
    name: "Bottom Right",
    style: "absolute bottom-2 right-2",
  },
];

interface Fonts {
  style: string;
  name: string;
}

// Font Styles
export const fonts: Fonts[] = [
  { style: "logo-font", name: "Vibecard" },
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
