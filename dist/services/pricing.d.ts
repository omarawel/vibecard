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
export declare const free: PricingFeatures[];
export declare const pro: PricingFeatures[];
export declare const proPlus: PricingFeatures[];
export declare const pricingInfo: PricingDetail[];
export {};
