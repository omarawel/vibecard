import { adapt, arrow, design, impression, secure, share } from "../assets";

interface HomeCard {
  image: string;
  id: number;
  title: string;
  note: string;
}

const homeCard: HomeCard[] = [
  {
    image: design,
    id: 1,
    title: "feature1",
    note: "feature1Desc",
  },
  {
    image: share,
    id: 2,
    title: "feature2",
    note: "feature2Desc",
  },
  {
    image: arrow,
    id: 3,
    title: "feature3",
    note: "feature3Desc",
  },
  {
    image: impression,
    id: 4,
    title: "feature4",
    note: "feature4Desc",
  },
  {
    image: secure,
    id: 5,
    title: "feature5",
    note: "feature5Desc",
  },
  {
    image: adapt,
    id: 6,
    title: "feature6",
    note: "feature6Desc",
  },
];

export default homeCard;
