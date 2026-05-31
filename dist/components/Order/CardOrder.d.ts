interface Props {
    closeOrder: () => void;
    frontFile: File | null;
    backFile: File | null;
    view: boolean;
}
declare const CardOrder: ({ closeOrder, frontFile, backFile, view }: Props) => import("react/jsx-runtime").JSX.Element;
export default CardOrder;
