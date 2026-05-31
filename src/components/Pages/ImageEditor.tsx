import { useEffect, useState } from "react";
import LargeEditor from "../Editor/LargeEditor";
import SmallEditor from "../Editor/SmallEditor";
import Loading from "../Loading/Loading";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import { useTranslation } from "react-i18next";

const ImageEditor = () => {
  const [title] = useState("Design your Card");
  useDocumentTitle(title);
  const { t } = useTranslation();
  const [alert, setAlert] = useState<boolean>(true);

  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reload
  useEffect(() => {
    let isReloading = false;

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isReloading) {
        const message =
          "Are you sure you want to leave? Your changes might not be saved.";
        event.returnValue = message; // Standard for most browsers
        return message; // For some older browsers
      }
    };

    const handlePopState = () => {
      isReloading = false; // Reset the flag if back navigation happens
    };

    const handleUnload = () => {
      isReloading = true; // Set flag to true only when a reload is detected
    };

    // Add event listeners
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("unload", handleUnload);
    window.addEventListener("popstate", handlePopState);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("unload", handleUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [history]);

  // Screen Detector
  useEffect(() => {
    function detectMobile() {
      const userAgent = navigator.userAgent || navigator.vendor;

      // Check for Android devices
      if (/android/i.test(userAgent)) {
        return true;
      }

      // Check for iOS devices
      if (/iPad|iPhone|iPod/.test(userAgent)) {
        return true;
      }

      // Check for other mobile user agents
      if (/Mobile|webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        return true;
      }

      return false;
    }

    // Set the mobile state based on detection
    setIsMobile(detectMobile());
  }, []);

  if (isMobile === null) {
    return <Loading />;
  }

  return (
    <>
      {/* Alert */}
      {alert && (
        <div className="lg:hidden block">
          <div className="overlay top-0 z-[55]"></div>
          <div className="fixed top-0 left-0 flex z-[60] justify-center items-center h-[100dvh] w-full lg:px-0 px-3">
            <div className="lg:w-[35%] w-full hero-bg rounded px-5 py-6 secondary-bg shadow shadow-zinc-900 text-white">
              <p className="text-xl font-bold text-gray-400">
                {" "}
                <span className="bi-info-circle me-2"></span> {t("notice")}
              </p>
              <p className="mt-3 text-sm">{t("alert")}</p>
              <button
                onClick={() => setAlert(!alert)}
                className="btn-bg w-full mt-3 shadow p-3 rounded"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Large device */}
      {!isMobile && (
        <div className="lg:block hidden mt-28 relative z-50">
          <LargeEditor />
        </div>
      )}
      {/* Small device */}
      {isMobile && (
        <div className="lg:hidden block">
          <SmallEditor />
        </div>
      )}
    </>
  );
};

export default ImageEditor;
