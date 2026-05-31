declare global {
    namespace JSX {
        interface IntrinsicElements {
            "df-messenger": any;
        }
    }
}
declare const Chat: () => import("react/jsx-runtime").JSX.Element;
export default Chat;
