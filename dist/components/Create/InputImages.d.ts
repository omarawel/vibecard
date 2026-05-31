interface Props {
    type: "profile" | "cover" | "logo";
    onPreviewChange: (type: "profile" | "cover" | "logo", preview: string | null) => void;
    onHandleFile: (type: "profile" | "cover" | "logo", file: File | null) => void;
    title: string;
    error?: boolean;
    coverBg?: boolean;
}
declare const InputImages: ({ type, title, error, onPreviewChange, onHandleFile, coverBg, }: Props) => import("react/jsx-runtime").JSX.Element;
export default InputImages;
