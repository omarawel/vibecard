import { Data, StyleData } from "@/services/viewCard";
interface Props {
    data: Data;
    styles: StyleData;
    profile: string | null;
    cover: string | null;
    logo: string | null;
    capture: () => void;
}
declare const Center: ({ data, styles, cover, logo, profile, capture }: Props) => import("react/jsx-runtime").JSX.Element;
export default Center;
