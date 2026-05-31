import { State } from "../../../store/useTextColorStore";
interface Props {
    bg: string;
    name: keyof State;
    title?: string;
}
declare const TextColor: ({ bg, name, title }: Props) => import("react/jsx-runtime").JSX.Element;
export default TextColor;
