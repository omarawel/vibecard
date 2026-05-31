interface Messages {
    email: string;
    id: string;
    message: string;
    username: number;
}
declare const useMessage: () => {
    messages: Messages[];
};
export default useMessage;
