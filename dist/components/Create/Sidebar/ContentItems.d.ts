import { SocialMediaContent } from "../../../services/contents";
interface Props {
    id: number;
    error: boolean;
    contents: SocialMediaContent[];
    selectedContents: string[];
    deleteItem: (iconName: string) => void;
    update: (content: SocialMediaContent) => void;
    setId: (value: number) => void;
    onError: (error: boolean) => void;
    onLink: (value: string) => void;
    item: string;
}
declare const ContentItems: ({ id, error, contents, selectedContents, deleteItem, update, setId, onError, onLink, item, }: Props) => import("react/jsx-runtime").JSX.Element;
export default ContentItems;
