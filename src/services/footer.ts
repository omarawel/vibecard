interface Footer {
  id: number;
  name: string;
  path: string;
}

export const explore: Footer[] = [
  { id: 1, name: "explore1", path: "/" },
  { id: 2, name: "explore2", path: "/about-us" },
  { id: 6, name: "explore3", path: "/contact-us" },
  { id: 3, name: "nav5", path: "/create" },
  {
    id: 5,
    name: "company-team",
    path: "/teams",
  },
];

export const shop: Footer[] = [
  { id: 7, name: "shop1", path: "/all-products" },
  { id: 71, name: "shop2", path: "/all-products" },
  { id: 8, name: "shop3", path: "/all-products" },
  { id: 9, name: "shop4", path: "/all-products" },
  { id: 102, name: "shop5", path: "/all-products" },
  // { id: 103, name: "Basic Stands", path: "/" },
  // { id: 104, name: "Advanced Stands", path: "/" },
];

export const legal: Footer[] = [
  { id: 7, name: "imprint", path: "/imprint" },
  { id: 71, name: "explore4", path: "/privacy-policy" },
  { id: 8, name: "terms", path: "/terms-use" },
  { id: 9, name: "cancellation", path: "/cancellation" },
  { id: 10, name: "chatbot-legal", path: "/chatbot-privacy-policy" },
];
