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

interface Position {
  x: string | number;
  y: string | number;
}

interface Card {
  text: string;
  bgColor: string;
  image: File | null;
  textSize: string;
  fontStyle: string;
  imageSize: string;
  imagePosition: Position;
  textPosition: Position;
  extraTextPosition: Position;
  pickedBg: string;
  color: string;
  extraText: string;
  extraTextColor: string;
  extraTextFontSize: string;
  extraTextFontStyle: string;
}

interface allOrders {
  back_image: string;
  front_image: string;
  front_style: Card; // This will be an object after parsing
  back_style: Card; // This will be an object after parsing
  order_id: string;
  order_metadata: Delivery; // This will be an object after parsing
  quantity: number;
  vibecardLogo: boolean;
  orientation: string;
  card_img: string;
  created_at: string;
  card_type: string;
  status: string;
  payment_status: string;
}

interface TotalOrders {
  product_orders: {
    back_image: string;
    front_image: string;
    front_style: string; // String to parse
    back_style: string; // String to parse
    order_id: string;
    order_metadata: Delivery; // String to parse
    quantity: number;
    vibecardLogo: boolean;
    orientation: string;
    card_img: string;
    created_at: string;
    card_type: string;
    status: string;
    payment_status: string;
  }[];
}

const CardOrders = () => {
  const { t } = useTranslation();
  const [orders, setOrders] = useState<allOrders[]>([]);
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
        const parsedOrders = response.data.product_orders.map((order) => {
          try {
            return {
              ...order,
              front_style: JSON.parse(order.front_style) as Card,
              back_style: JSON.parse(order.back_style) as Card,
              order_metadata: order.order_metadata,
            };
          } catch (e) {
            console.error("Error parsing order data", e);
            return {
              ...order,
              front_style: {} as Card,
              back_style: {} as Card,
              order_metadata: {} as Delivery,
            };
          }
        });

        const card = parsedOrders.filter(
          (c) => c.payment_status !== "pending" && c.status !== "cancelled"
        );

        setOrders(card);
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

  // Is Cancel can be done?
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

      <div>
        <p className="text-white font-poppins mt-4">
          {t("businessCard")} {t("orders")}
        </p>
        {orders.length > 0 ? (
          <div className="lg:grid grid-cols-2 gap-x-5">
            {orders.map((card) => (
              <div
                key={card.order_id}
                className="lg:grid lg:grid-cols-3 mb-4 secondary-bg p-4 rounded-lg mt-5"
              >
                <div className="col-span-2">
                  <img src={card.card_img} alt="Card" />
                </div>
                <div className="text-white space-y-3 lg:mt-0 mt-5">
                  <p className="text-white mb-3 lg:text-lg font-poppins font-bold lg:mt-0 mt-2">
                    Order Information
                  </p>
                  <p className="lg:text-sm font-poppins">
                    Ordered date : {getDate(card.created_at)}
                  </p>
                  <p className="lg:text-sm font-poppins">
                    Card type :{" "}
                    {card.card_type === "recycled_paper"
                      ? "PVC"
                      : card.card_type}
                  </p>
                  <p className="lg:text-sm font-poppins">
                    Quantity: {card.quantity}
                  </p>

                  <div className="flex gap-x-2">
                    <p className="lg:text-sm font-poppins">Status :</p>
                    <p className="lg:text-sm font-poppins first-letter:uppercase">
                      {card.status}
                    </p>
                  </div>

                  {/* Cancel */}
                  {card.status === "pending" && (
                    <div className="lg:pt-28 pt-5">
                      {isDisabled(card.created_at) ? (
                        <p className="text-xs bg-red-500 rounded p-1 font-poppins">
                          It has been 18 hours since the product was ordered,
                          and the cancel time has expired.
                        </p>
                      ) : (
                        <button
                          onClick={() => handleCancel(card.order_id)}
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
              <p className="text-white font-poppins mb-5">{t("card-empty")}</p>

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

export default CardOrders;
