interface Wallets {
    color: string;
    description: string;
    image: string;
    price: number;
    size: string;
    wallet_id: string;
    name: string;
    status: string;
}
declare const useWallets: () => {
    allWallets: Wallets[];
};
export default useWallets;
