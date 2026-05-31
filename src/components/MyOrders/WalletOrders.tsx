import { baseUrl } from "@/services/request";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Delivery {
  address: string;
  email: string;
  fname: string;
  lname: string;
  location: string;
  phone: string;
  plz: string;
  street: string;
  street_no: string;
}

interface Wallet {
  wallet_id: string;
  quantity: number | string;
  image: string;
}

interface GetWallets {
  created_at: string;
  order_id: string;
  order_metadata: Delivery;
  payment_status: string;
  wallets: Wallet[];
  status: string;
}

interface TotalOrders {
  wallet_orders: GetWallets[];
}

const WalletOrders = () => {
  const { t } = useTranslation();
  const [wallets, setWallets] = useState<GetWallets[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<TotalOrders>(`${baseUrl}/api/v1/products/my-orders`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        const wallet = response.data.wallet_orders.filter(
          (w) => w.payment_status !== "pending" && w.status !== "cancelled"
        );

        setWallets(wallet);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Get date
  function getDate(timestamp: string) {
    const date = new Date(timestamp);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  // Cancel Time
  const isDisabled = (createdAt: string): boolean => {
    const createdDate = new Date(createdAt); // Parse the created date
    const currentDate = new Date(); // Get current date/time

    const differenceInMs = currentDate.getTime() - createdDate.getTime(); // Difference in milliseconds
    let differenceInHours = differenceInMs / (1000 * 60 * 60); // Convert milliseconds to hours

    return differenceInHours >= 18; // Return true if 18 hours or more have passed
  };

  // Handle Cancel
  const handleCancel = (id: string) => {
    axios
      .put(
        `${baseUrl}/api/v1/products/cancel-my-order?order_id=${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then(() => {
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {loading && <Loading />}

      {/* Wallets */}
      <div>
        <p className="text-white font-poppins mt-4">Wallet {t("orders")}</p>
        {wallets.length > 0 ? (
          <div className="lg:grid grid-cols-2 gap-x-5 mt-8">
            {wallets.map((wal) => (
              <div
                key={wal.order_id}
                className="lg:grid grid-cols-3 secondary-bg p-4 rounded-lg gap-x-5"
              >
                <div className="col-span-2">
                  {wal.wallets.length > 0 && (
                    <img
                      src={wal.wallets[0].image} // Displaying the first wallet's image
                      className="rounded-lg"
                      alt="Ordered Wallet"
                    />
                  )}
                </div>

                <div className="text-white space-y-3 lg:mt-0 mt-5">
                  <p className="text-white mb-3 font-poppins lg:mt-1 mt-2 lg:text-lg font-bold">
                    Order Information
                  </p>
                  <p className="lg:text-sm font-poppins">
                    Ordered date : {getDate(wal.created_at)}
                  </p>
                  <p className="lg:text-sm font-poppins">
                    Quantity: {wal.wallets.map((w) => w.quantity)}
                  </p>

                  <div className="flex">
                    <p className="lg:text-sm font-poppins">Status :</p>
                    <p className="font-poppins first-letter:uppercase ms-2 lg:text-sm">
                      {wal.status}
                    </p>
                  </div>

                  {/* Cancel */}
                  {wal.status === "pending" && (
                    <div className="lg:pt-28 pt-5">
                      {isDisabled(wal.created_at) ? (
                        <p className="text-xs bg-red-500 rounded p-1 font-poppins">
                          It has been 18 hours since the product was ordered,
                          and the cancel time has expired.
                        </p>
                      ) : (
                        <button
                          onClick={() => handleCancel(wal.order_id)}
                          className="font-poppins bg-red-500 w-full rounded py-2 text-sm shadow"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex lg:h-[40vh] h-[40vh] items-center">
            <div className="lg:w-[50%] p-5 secondary-bg rounded">
              <p className="text-white font-poppins mb-5">
                {t("wallet-empty")}
              </p>

              <Link
                to="/all-products"
                className="btn-bg rounded shadow-none p-3 font-poppins mb-3 text-white"
              >
                {t("order-now")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WalletOrders;
