import axios from "axios";
import { baseUrl } from "../../services/request";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { Data, StyleData } from "../../services/viewCard";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Default from "../ViewCard/Default";
import Center from "../ViewCard/Center";
import Right from "../ViewCard/Right";
import html2canvas from "html2canvas";

const ViewCard = () => {
  const [title] = useState("My Card");
  useDocumentTitle(title);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();

  const captureRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<Data>();
  const [styles, setStyles] = useState<StyleData>();
  const [loading, setLoading] = useState(true);
  const [qrImg, setQrImg] = useState<string | null>(null);
  const [profileImg, setProfileImg] = useState<string | null>(null);
  const [logo, setLogo] = useState<string | null>(null);
  const [coverImg, setCoverImg] = useState<string | null>(null);
  const [imgUrl, setImgUrl] = useState<string>("");

  const imgToBlob = async (url: string): Promise<string | null> => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch image");
      }
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error("Error fetching and converting image:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/cards/card/${id}?increment=true`
        );

        setProfileImg(response.data.main_picture);

        setData(response.data);
        setStyles(JSON.parse(response.data.styles));

        const imageFields = [
          { field: response.data.qr_code, setter: setQrImg },
          { field: response.data.qr_code, setter: setImgUrl },
          // { field: response.data.main_picture, setter: setProfileImg },
          { field: response.data.covor_picture, setter: setCoverImg },
          { field: response.data.company_logo, setter: setLogo },
        ];

        const imagePromises = imageFields.map(({ field, setter }) => {
          if (field) {
            return imgToBlob(field).then((imgUrl) => setter(imgUrl || ""));
          }
          return Promise.resolve(); // No need to wait for null fields
        });

        await Promise.all(imagePromises);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, baseUrl]);

  const handleCapture = async () => {
    if (captureRef.current) {
      try {
        await Promise.all(
          Array.from(captureRef.current.querySelectorAll("img")).map(
            (img) =>
              new Promise<void>((resolve, reject) => {
                if (img.complete) {
                  resolve();
                } else {
                  img.onload = () => resolve();
                  img.onerror = () => reject(new Error("Image failed to load"));
                }
              })
          )
        );

        const canvas = await html2canvas(captureRef.current, { useCORS: true });
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "capture.png";
        link.click();
      } catch (error) {
        console.error("Error capturing image:", error);
      }
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imgUrl;
    link.download = "image.jpg";
    link.click();
  };

  return (
    <>
      {loading && <Loading />}
      <div className="h-[100vh]">
        <div className="lg:px-40 md:px-36 px-2">
          <div className="lg:pt-10 md:pt-10 py-5 lg:ps-24">
            <Link to={"/"} className="text-2xl text-white logo-font">
              vibecard
            </Link>
          </div>

          <div
            ref={captureRef}
            className="lg:flex justify-center lg:mt-10 mt-5 py-5"
          >
            <div className="lg:block flex justify-center lg:me-28 lg:mb-0 mb-10 lg:content-center">
              {data?.qr_code && (
                <div>
                  <img
                    src={qrImg ? qrImg : ""}
                    alt="Qr code"
                    className="lg:w-80 w-72 rounded-2xl shadow-2xl shadow-zinc-950"
                  />
                  {/* Download Qr Code */}
                  <p
                    onClick={() => handleDownload()}
                    className="text-center mt-5 text-blue-400 font-poppins cursor-pointer"
                  >
                    Download <span className="bi-download px-2"></span>{" "}
                  </p>
                </div>
              )}
            </div>
            <div className="lg:w-[28%] w-[88%] md:w-full lg:mx-0 mx-auto">
              {/* Default / Left */}
              {data && styles && data.card_layout === "default" && (
                <Default
                  data={data}
                  profile={profileImg ? profileImg : null}
                  cover={coverImg ? coverImg : ""}
                  logo={logo ? logo : ""}
                  styles={styles}
                  capture={() => handleCapture()}
                />
              )}
              {/* Centered */}
              {data && styles && data.card_layout === "center" && (
                <Center
                  data={data}
                  profile={profileImg ? profileImg : null}
                  cover={coverImg ? coverImg : ""}
                  logo={logo ? logo : ""}
                  styles={styles}
                  capture={() => handleCapture()}
                />
              )}
              {/* Right */}
              {data && styles && data.card_layout === "right" && (
                <Right
                  data={data}
                  profile={profileImg ? profileImg : null}
                  cover={coverImg ? coverImg : ""}
                  logo={logo ? logo : ""}
                  styles={styles}
                  capture={() => handleCapture()}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCard;
