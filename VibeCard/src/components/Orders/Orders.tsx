import { useState } from "react";
import SmallNavbar from "../Dashboard/SmallNav";
import Sidebar from "../Dashboard/Sidebar";
import Nav from "../Dashboard/Nav";
import AllCardOrders from "./AllCardOrders";
import AllWalletOrders from "./AllWalletOrders";

interface Props {
  type: string;
}

interface Taps {
  id: number;
  name: string;
}

const tap: Taps[] = [
  { id: 1, name: "pending" },
  { id: 2, name: "cancelled" },
  { id: 3, name: "completed" },
];

const Orders = ({ type }: Props) => {
  const [activeTap, setActiveTap] = useState<string>("pending");

  return (
    <div>
      <div className="relative lg:grid md:grid grid-cols-11">
        {/* Small device Navbar */}
        <SmallNavbar active={type} />
        {/* Sidebar */}
        <div className="lg:col-span-2 w-full">
          <Sidebar active={type} />
        </div>
        <div className="lg:col-span-9 lg:px-4 md:px-2 py-2 md:col-span-10">
          {/* Nav */}
          <Nav />

          {/* Contents */}
          <h1 className="text-white text-xl my-3 ms-1 first-letter:uppercase mt-6">
            {type} Orders
          </h1>

          {/* Taps */}
          <div className="lg:flex grid grid-cols-3 lg:gap-x-5 gap-x-2 px-1">
            {tap.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTap(t.name)}
                className={`first-letter:uppercase font-poppins ${
                  activeTap === t.name
                    ? "btn-bg text-white p-0"
                    : "bg-gray-600 text-gray-300"
                } rounded shadow lg:px-10 lg:py-2 py-3 text-sm`}
              >
                {t.name}
              </button>
            ))}
          </div>

          {/* Cards */}
          {type === "Card" ? (
            <>
              {activeTap === "pending" && type === "Card" && (
                <AllCardOrders tap="pending" />
              )}

              {activeTap === "cancelled" && type === "Card" && (
                <AllCardOrders tap="cancelled" />
              )}

              {activeTap === "completed" && type === "Card" && (
                <AllCardOrders tap="completed" />
              )}
            </>
          ) : (
            <>
              {activeTap === "pending" && type === "Wallets" && (
                <AllWalletOrders tap="pending" />
              )}

              {activeTap === "cancelled" && type === "Wallets" && (
                <AllWalletOrders tap="cancelled" />
              )}

              {activeTap === "completed" && type === "Wallets" && (
                <AllWalletOrders tap="completed" />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
