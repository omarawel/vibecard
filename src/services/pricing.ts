interface PricingFeatures {
  id: number;
  feature: string;
}

interface Value {
  id: number;
  value: string | number;
  icon: string;
}

interface PricingDetail {
  id: number;
  title: string;
  value1: Value;
  value2: Value;
  value3: Value;
}

export const free: PricingFeatures[] = [
  {
    id: 1,
    feature: "free1",
  },
  {
    id: 2,
    feature: "free2",
  },
  {
    id: 3,
    feature: "free3",
  },
  {
    id: 4,
    feature: "free4",
  },
];

export const pro: PricingFeatures[] = [
  {
    id: 1,
    feature: "pro1",
  },
  {
    id: 2,
    feature: "pro2",
  },
  {
    id: 3,
    feature: "pro3",
  },
  {
    id: 4,
    feature: "pro4",
  },
  // { id: 5, feature: "Integration with Google and Apple Wallet" },
  { id: 6, feature: "pro5" },
  { id: 7, feature: "pro6" },
];

export const proPlus: PricingFeatures[] = [
  {
    id: 1,
    feature: "proPlus1",
  },
  {
    id: 2,
    feature: "proPlus2",
  },
  {
    id: 3,
    feature: "proPlus3",
  },
  {
    id: 4,
    feature: "proPlus4",
  },
  { id: 5, feature: "proPlus5" },
  { id: 6, feature: "proPlus6" },
];

export const pricingInfo: PricingDetail[] = [
  {
    id: 1,
    title: "pricing1",
    value1: { id: 1, icon: "bi-check-circle-fill", value: 1 },
    value2: { id: 1, icon: "bi-check-circle-fill", value: 1 },
    value3: { id: 1, icon: "bi-check-circle-fill", value: 1 },
  },

  {
    id: 2,
    title: "pricing2",
    value1: { id: 1, icon: "bi-check-circle-fill", value: 1 },
    value2: { id: 1, icon: "bi-check-circle-fill", value: 3 },
    value3: { id: 1, icon: "bi-check-circle-fill", value: 10 },
  },

  {
    id: 3,
    title: "pricing3",
    value1: { id: 1, icon: "bi-check-circle-fill", value: 0 },
    value2: { id: 1, icon: "bi-check-circle-fill", value: 0 },
    value3: { id: 1, icon: "bi-check-circle-fill", value: 0 },
  },

  {
    id: 4,
    title: "pricing4",
    value1: { id: 1, icon: "bi-check-circle-fill", value: 0 },
    value2: { id: 1, icon: "bi-check-circle-fill", value: 0 },
    value3: { id: 1, icon: "bi-check-circle-fill", value: 0 },
  },

  {
    id: 5,
    title: "pricing5",
    value1: { id: 1, icon: "bi-check-circle-fill", value: 0 },
    value2: { id: 1, icon: "bi-check-circle-fill", value: 0 },
    value3: { id: 1, icon: "bi-check-circle-fill", value: 0 },
  },

  {
    id: 6,
    title: "pricing6",
    value1: { id: 1, icon: "bi-dash", value: 0 },
    value2: { id: 1, icon: "bi-check-circle-fill", value: 0 },
    value3: { id: 1, icon: "bi-check-circle-fill", value: 0 },
  },

  // {
  //   id: 7,
  //   title: "Integration with Google & Apple",
  //   value1: { id: 1, icon: "bi-dash", value: 0 },
  //   value2: { id: 1, icon: "bi-check-circle-fill", value: 0 },
  //   value3: { id: 1, icon: "bi-check-circle-fill", value: 0 },
  // },

  {
    id: 8,
    title: "pricing7",
    value1: { id: 1, icon: "bi-dash", value: 0 },
    value2: { id: 1, icon: "bi-check-circle-fill", value: 0 },
    value3: { id: 1, icon: "bi-check-circle-fill", value: 0 },
  },

  {
    id: 9,
    title: "pricing8",
    value1: { id: 1, icon: "bi-dash", value: 0 },
    value2: { id: 1, icon: "bi-dash", value: 0 },
    value3: { id: 1, icon: "bi-check-circle-fill", value: 0 },
  },

  {
    id: 10,
    title: "pricing9",
    value1: { id: 1, icon: "bi-dash", value: 0 },
    value2: { id: 1, icon: "bi-dash", value: 0 },
    value3: { id: 1, icon: "bi-check-circle-fill", value: 0 },
  },
  {
    id: 11,
    title: "pricing10",
    value1: { id: 1, icon: "bi-dash", value: 0 },
    value2: { id: 1, icon: "bi-dash", value: 0 },
    value3: { id: 1, icon: "bi-check-circle-fill", value: 0 },
  },
];
