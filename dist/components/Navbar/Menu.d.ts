import { Nav } from "../../services/navs";
interface Props {
    nav: Nav[];
    menu: () => void;
    username: string | null;
}
declare const Menu: ({ nav, menu, username }: Props) => import("react/jsx-runtime").JSX.Element;
export default Menu;
