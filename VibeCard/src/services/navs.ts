export interface Nav {
  id: number;
  title: string;
  path: string;
  icon?: string;
}

export const nav: Nav[] = [
  // {
  //   id: 2,
  //   title: "Resources",
  //   path: "/",
  // },
  { id: 3, title: "nav1", path: "/all-products" },
  {
    id: 4,
    title: "nav2",
    path: "/pricing",
  },
  {
    id: 5,
    title: "company-team",
    path: "/teams",
  },
  {
    id: 6,
    title: "nav3",
    path: "/ambassador",
  },
];
