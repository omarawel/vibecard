interface Colors {
  id: number;
  color: string;
}

export interface Products {
  id: number;
  price: string;
  name: string;
  type: string;
  // image: string;
  color: Colors[];
  description: string;
}

export const product: Products[] = [
  {
    id: 312,
    name: "Vibecard",
    type: "Recycled Paper",
    price: "€10",
    // image: card1,
    color: [
      { id: 1, color: "#000000" },
      { id: 2, color: "#ffffff" },
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatem ullam, doloremque magni facilis officia tenetur, deserunt natus voluptate, saepe hic tempore dolore aspernatur corrupti velit neque soluta quia distinctio.",
  },
  {
    id: 324,
    name: "Vibecard",
    type: "Bamboo Card",
    price: "€25",
    // image: card2,
    color: [
      { id: 1, color: "#000000" },
      { id: 2, color: "#ffffff" },
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatem ullam, doloremque magni facilis officia tenetur, deserunt natus voluptate, saepe hic tempore dolore aspernatur corrupti velit neque soluta quia distinctio.",
  },
  {
    id: 123,
    name: "Vibecard",
    type: "Metal Card",
    price: "€35",
    // image: card1,
    color: [
      { id: 1, color: "#000000" },
      { id: 2, color: "#ffffff" },
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatem ullam, doloremque magni facilis officia tenetur, deserunt natus voluptate, saepe hic tempore dolore aspernatur corrupti velit neque soluta quia distinctio.",
  },
  {
    id: 435,
    name: "Vibecard",
    type: "Recycled Papers Card",
    price: "€10",
    // image: card2,
    color: [
      { id: 1, color: "#000000" },
      { id: 2, color: "#ffffff" },
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatem ullam, doloremque magni facilis officia tenetur, deserunt natus voluptate, saepe hic tempore dolore aspernatur corrupti velit neque soluta quia distinctio.",
  },
  {
    id: 132,
    name: "Vibecard",
    type: "Bamboo Card",
    price: "€25",
    // image: card1,
    color: [
      { id: 1, color: "#000000" },
      { id: 2, color: "#ffffff" },
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatem ullam, doloremque magni facilis officia tenetur, deserunt natus voluptate, saepe hic tempore dolore aspernatur corrupti velit neque soluta quia distinctio.",
  },
  {
    id: 789,
    name: "Vibecard",
    type: "Metal Card",
    price: "€35",
    // image: card2,
    color: [
      { id: 1, color: "#000000" },
      { id: 2, color: "#ffffff" },
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatem ullam, doloremque magni facilis officia tenetur, deserunt natus voluptate, saepe hic tempore dolore aspernatur corrupti velit neque soluta quia distinctio.",
  },
];

export const fetchProducts = (id: number) => {
  return product.filter((pro) => pro.id === id);
};
