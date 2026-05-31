interface Props {
    review_card?: boolean;
}
export interface Wallets {
    color: string;
    description: string;
    image: string;
    price: number;
    size: string;
    wallet_id: string;
    name: string;
    status: string;
    is_review_card: boolean;
}
export interface All {
    wallets: Wallets[];
}
declare const Wallets: ({ review_card }: Props) => import("react/jsx-runtime").JSX.Element;
export default Wallets;
