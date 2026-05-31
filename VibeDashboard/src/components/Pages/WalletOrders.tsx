import { useState } from "react";
import Orders from "../Orders/Orders";
import useDocumentTitle from "@/hook/useDocumentTitle";

const WalletOrders = () => {
  const [title] = useState("Wallet Orders");
  useDocumentTitle(title);

  return (
    <>
      <Orders type="Wallets" />
    </>
  );
};

export default WalletOrders;
