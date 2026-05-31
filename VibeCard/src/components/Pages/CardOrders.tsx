import useDocumentTitle from "@/hooks/useDocumentTitle";
import Orders from "../Orders/Orders";
import { useState } from "react";

const CardOrders = () => {
  const [title] = useState("Card Orders");
  useDocumentTitle(title);

  return (
    <>
      <Orders type="Card" />
    </>
  );
};

export default CardOrders;
