import { useEffect, useState } from "react";
import {
  SocialMediaContent,
  contactContents,
  socialMedias,
} from "../../../services/contents";
import { useContentStore } from "../../../store/useContentStore";
import ContentItems from "./ContentItems";
import { t } from "i18next";

interface Props {
  onClose?: () => void;
}

const Content = ({ onClose }: Props) => {
  const { socialMedia, updateSocialMedia, contact, updateContacts } =
    useContentStore();

  const [activeMedias, setActiveMedias] = useState([""]);
  const [contactsIcons, setContactsIcons] = useState([""]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (socialMedia.length > 0) {
      const icons = socialMedia.map((item) => item.icon);
      setActiveMedias(icons);
    }
    if (contactContents.length > 0) {
      const contacts = contact.map((contact) => contact.icon);
      setContactsIcons(contacts);
    }
  }, [socialMedia, contact]);

  // Social Medias
  const [socialMediaId, setSocialMediaId] = useState<number>(0);
  const [socialMediaLink, setSocialMediaLink] = useState("");

  // Contacts
  const [contactId, setContactId] = useState<number>(0);
  const [contactAddress, setContactAddress] = useState("");

  // Social Media
  const handleSocialUpdate = (socialInfo: SocialMediaContent) => {
    if (socialMediaLink !== "") {
      setSocialMediaId(0);

      const iconExists = socialMedia.some(
        (media) => media.icon == socialInfo.icon
      );

      if (iconExists) {
        updateSocialMedia(
          socialMedia.map((media) =>
            media.icon == socialInfo.icon
              ? { ...media, link: socialMediaLink, label: socialInfo.label }
              : media
          )
        );
      } else {
        updateSocialMedia([
          ...socialMedia,
          {
            link: socialMediaLink,
            color: socialInfo.color.replace("text", "bg").toString(),
            icon: socialInfo.icon,
            label: socialInfo.label,
          },
        ]);
      }
    } else {
      setError(true);
    }
  };

  function handleSocialDelete(iconToDelete: string) {
    const filtered = socialMedia.filter((media) => media.icon !== iconToDelete);
    const linkFilter = activeMedias.filter((media) => media !== iconToDelete);
    setActiveMedias(linkFilter);
    updateSocialMedia(filtered);
    setSocialMediaId(0);
    setError(false);
  }

  // Contact
  const handleContactUpdate = (socialInfo: SocialMediaContent) => {
    if (contactAddress !== "") {
      setContactId(0);
      const iconExists = contact.some((c) => c.icon == socialInfo.icon);

      if (iconExists) {
        updateContacts(
          contact.map((c) =>
            c.icon == socialInfo.icon ? { ...c, link: contactAddress } : c
          )
        );
      } else {
        updateContacts([
          ...contact,
          {
            link: contactAddress,
            color: socialInfo.color.replace("text", "bg").toString(),
            icon: socialInfo.icon,
          },
        ]);
      }
    } else {
      setError(true);
    }
  };

  function handleContactDelete(iconToDelete: string) {
    const filtered = contact.filter((c) => c.icon !== iconToDelete);
    const contactFilter = contactsIcons.filter((c) => c !== iconToDelete);
    setContactsIcons(contactFilter);
    updateContacts(filtered);
    setContactId(0);
    setError(false);
  }

  return (
    <div>
      <div className="flex justify-between">
        <p className="chakra text-white mb-4">{t("content")}</p>
        <button
          onClick={onClose}
          className="lg:hidden block bi-x-lg mb-5"
        ></button>
      </div>

      <div className="bg-white rounded p-2 mb-5 lg:overflow-hidden lg:h-auto h-[75dvh] overflow-y-scroll lg:pb-0 pb-5">
        {/* Contacts */}
        <p className="chakra mb-3 text-black">{t("contact")}</p>

        <ContentItems
          item="contact"
          contents={contactContents}
          id={contactId}
          error={error}
          selectedContents={contactsIcons}
          deleteItem={(iconName: string) => handleContactDelete(iconName)}
          update={(content: SocialMediaContent) => handleContactUpdate(content)}
          setId={(value: number) => setContactId(value)}
          onError={(error: boolean) => setError(error)}
          onLink={(value: string) => setContactAddress(value)}
        />

        {/* Social Media */}
        <p className="chakra mt-5 mb-3 text-black">{t("socialMedia")}</p>

        <ContentItems
          item="media"
          contents={socialMedias}
          id={socialMediaId}
          error={error}
          selectedContents={activeMedias}
          deleteItem={(iconName: string) => handleSocialDelete(iconName)}
          update={(content: SocialMediaContent) => handleSocialUpdate(content)}
          setId={(value: number) => setSocialMediaId(value)}
          onError={(error: boolean) => setError(error)}
          onLink={(value: string) => setSocialMediaLink(value)}
        />
      </div>
    </div>
  );
};

export default Content;
