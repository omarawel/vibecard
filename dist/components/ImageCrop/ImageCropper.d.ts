interface Props {
    imageSrc: string;
    onCropComplete: (croppedImage: string) => void;
    aspect: number;
}
declare const ImageCropper: ({ imageSrc, onCropComplete, aspect }: Props) => import("react/jsx-runtime").JSX.Element;
export default ImageCropper;
