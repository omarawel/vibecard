interface Props {
    id: string;
    quantity: string | number;
    img: string;
    hideModal: () => void;
    reviewCardLink?: string;
}
declare const WalletOrder: ({ id, quantity, img, hideModal, reviewCardLink, }: Props) => import("react/jsx-runtime").JSX.Element;
export default WalletOrder;
