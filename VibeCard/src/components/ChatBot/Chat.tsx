import { useEffect } from "react";
import { useTranslation } from "react-i18next";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "df-messenger": any;
    }
  }
}

const Chat = () => {
  // const [chatBox, setChaBox] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative">
      {/* {chatBox && ( */}
      <div className="rounded lg:h-[88%] h-[88.5%] lg:w-96 w-[100%]">
        <df-messenger
          intent="WELCOME"
          chat-title="Vibebot_de"
          agent-id="52d05800-ee8a-482c-9383-571b10579904"
          language-code={`${i18n.language}`}
        ></df-messenger>
      </div>
      {/* )} */}
    </div>
  );
};

export default Chat;
