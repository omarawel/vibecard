import { State } from "../../../store/useTextColorStore";
interface Props {
    defaultFontStyle: string;
    defaultFontSize: string;
    view: keyof State;
}
declare const FontStylesSize: ({ view, defaultFontSize, defaultFontStyle }: Props) => import("react/jsx-runtime").JSX.Element;
export default FontStylesSize;
