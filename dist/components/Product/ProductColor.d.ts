export declare const bgColors: {
    style: string;
    textColor: string;
}[];
interface Props {
    setBg: (style: string, color: string) => void;
    defaultBg: string;
    title?: string;
    price?: string;
}
declare const ProductColor: ({ defaultBg, setBg, title }: Props) => import("react/jsx-runtime").JSX.Element;
export default ProductColor;
