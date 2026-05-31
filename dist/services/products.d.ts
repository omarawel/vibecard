interface Colors {
    id: number;
    color: string;
}
export interface Products {
    id: number;
    price: string;
    name: string;
    type: string;
    color: Colors[];
    description: string;
}
export declare const product: Products[];
export declare const fetchProducts: (id: number) => Products[];
export {};
