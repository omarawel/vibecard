import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Area } from "react-easy-crop";
import { getCroppedImg } from "../../services/cropImage";

interface Props {
  imageSrc: string;
  onCropComplete: (croppedImage: string) => void;
  aspect: number;
}

const ImageCropper = ({ imageSrc, onCropComplete, aspect }: Props) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState<Area | null>(null);

  const onCropChange = (crop: { x: number; y: number }) => {
    setCrop(crop);
  };

  const onCropCompleteInternal = useCallback(
    (_: Area, croppedAreaPixels: Area) => {
      setCroppedArea(croppedAreaPixels);
    },
    []
  );

  const onCrop = async () => {
    if (croppedArea && imageSrc) {
      const croppedImage = await getCroppedImg(imageSrc, croppedArea);
      onCropComplete(croppedImage);
    }
  };

  return (
    <>
      <div className="overlay z-50"></div>
      <div className="absolute lg:top-20 lg:w-[90%] top-0 w-full lg:h-[80%] h-[100%] left-0 z-50">
        <Cropper
          image={imageSrc}
          crop={crop}
          zoom={zoom}
          aspect={aspect}
          onCropChange={onCropChange}
          onCropComplete={onCropCompleteInternal}
          onZoomChange={setZoom}
        />
        <p
          className="absolute right-5 top-5 z-50 bg-green-400 bi-check text- text-xl cursor-pointer rounded px-5"
          onClick={onCrop}
        ></p>
      </div>
    </>
  );
};

export default ImageCropper;
