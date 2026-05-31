import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useContentStore } from "../../store/useContentStore";
import ImageCropper from "../ImageCrop/ImageCropper";
import { useTranslation } from "react-i18next";
import { useCoverColorStore } from "@/store/useCoverColorStore";

interface Props {
  type: "profile" | "cover" | "logo";
  onPreviewChange: (
    type: "profile" | "cover" | "logo",
    preview: string | null
  ) => void;
  onHandleFile: (type: "profile" | "cover" | "logo", file: File | null) => void;
  title: string;
  error?: boolean;
  coverBg?: boolean;
}

const InputImages = ({
  type,
  title,
  error,
  onPreviewChange,
  onHandleFile,
  coverBg,
}: Props) => {
  const { t } = useTranslation();

  const [preview, setPreview] = useState<string | null>(null);
  const [cropping, setCropping] = useState<string | null>(null);
  const { updateCoverLogo } = useContentStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const { updateCoverColor } = useCoverColorStore();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      const previewURL = URL.createObjectURL(selectedFile);
      setCropping(previewURL);
      // Reset the input value
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  const handleFileRemoved = (type: "profile" | "logo" | "cover") => {
    setPreview(null);
    onPreviewChange(type, null);
    onHandleFile(type, null);
  };

  const handleCropComplete = (croppedImage: string) => {
    setPreview(croppedImage);
    setCropping(null);
    onPreviewChange(type, croppedImage);
    // You might want to convert the croppedImage back to a File object
    fetch(croppedImage)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], `${type}.jpg`, { type: "image/jpeg" });
        onHandleFile(type, file);
        if (type === "logo") {
          updateCoverLogo(true);
        }
        if (type === "cover") {
          updateCoverColor("");
        }
      });
  };

  // Handle Preview
  useEffect(() => {
    if (coverBg === false) {
      setPreview(null);
      onPreviewChange("cover", null);
      onHandleFile("cover", null);
    }
  }, [coverBg]);

  const aspectRatio = type === "profile" ? 1 : type === "cover" ? 3 : 1;

  return (
    <div>
      <p className="text-xs mb-4 font-poppins first-letter:uppercase lg:text-center text-gray-400">
        {t(title)}
      </p>
      <div
        className={`border shadow shadow-gray-600 rounded-lg border-gray-600 ${
          type === "cover" ? "lg:w-72 w-full h-auto" : "lg:w-28 w-full h-auto"
        } p-1 relative ${error && "border border-red-600"}`}
      >
        <input
          type="file"
          id={`${type}-file`}
          className="hidden"
          onChange={handleFileChange}
          accept="image/*"
          ref={inputRef}
        />
        {preview ? (
          <div>
            <img
              src={preview}
              alt={`${type} preview`}
              className="file-preview"
            />
          </div>
        ) : (
          <label htmlFor={`${type}-file`} className="cursor-pointer">
            <div className="flex flex-col text-center mt-5">
              <i className="bi-image text-xl text-gray-200"></i>
              <span className="text-[8px] text-gray-200 font-poppins">
                {t("image")}
              </span>
            </div>
          </label>
        )}

        {preview && (
          <div
            onClick={() => handleFileRemoved(type)}
            className="absolute -top-4 -right-3 z-20"
          >
            <p className="bi-x bg-red-700 shadow shadow-zinc-900 h-6 w-6 pt-1 rounded-full text-center cursor-pointer text-white text-sm"></p>
          </div>
        )}
      </div>
      {error && (
        <p className="text-[10px] mt-2 text-red-500">
          Profile picture required
        </p>
      )}

      {cropping && (
        <ImageCropper
          imageSrc={cropping}
          onCropComplete={handleCropComplete}
          aspect={aspectRatio}
        />
      )}
    </div>
  );
};

export default InputImages;
