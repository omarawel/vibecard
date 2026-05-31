import { Data, StyleData } from "@/services/viewCard";
interface Props {
    styles: StyleData;
    data: Data;
    capture: () => void;
}
declare const BottomContent: ({ styles, data, capture }: Props) => import("react/jsx-runtime").JSX.Element;
export default BottomContent;
