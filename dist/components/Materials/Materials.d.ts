export interface Plan {
    metal: {
        price: number;
        material: string;
    };
    bamboo: {
        price: number;
        material: string;
    };
    recycled_paper: {
        price: number;
        material: string;
    };
    wallet: {
        price: number;
        material: string;
    };
}
declare const Materials: () => import("react/jsx-runtime").JSX.Element;
export default Materials;
