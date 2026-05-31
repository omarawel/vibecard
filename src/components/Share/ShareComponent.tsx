import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";

interface Props {
  url: string;
  title: string;
  description: string;
}

const ShareComponent = ({ url, title, description }: Props) => {
  return (
    <>
      <FacebookShareButton
        url={url}
        title={title}
        className="flex"
        style={{ width: "50px", margin: 0 }}
      >
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        title={title}
        className="flex"
        style={{ width: "50px" }}
      >
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>

      <LinkedinShareButton
        url={url}
        title={title}
        summary={description}
        className="flex"
        style={{ width: "50px" }}
      >
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>

      <WhatsappShareButton
        url={url}
        title={title}
        className="flex"
        style={{ width: "50px" }}
      >
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
    </>
  );
};

export default ShareComponent;
