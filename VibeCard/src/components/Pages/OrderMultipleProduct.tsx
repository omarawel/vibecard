import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import axios from "axios";
import { baseUrl } from "@/services/request";
import { useCartStore } from "@/store/useCartStore";
import useWallets from "@/hooks/useWallets";
import { useTranslation } from "react-i18next";

interface Wallet {
  wallet_id: string;
  quantity: number | string;
}

const schema = z.object({
  firstName: z
    .string()
    .min(3, { message: "firstName must be greater than 3 characters." }),
  lastName: z
    .string()
    .min(3, { message: "lastName must be greater than 3 characters." }),
  email: z.string().email({ message: "Email address required." }),
  street: z.string().min(2, { message: "Street name required" }),
  streetNo: z.string().min(2, { message: "Street name required" }),
  address: z.string().min(2, { message: "Address required." }),
  plz: z.string().min(2, { message: "PLZ required." }),
  location: z.string().min(2, { message: "Country required." }),
  phone: z.string().min(10, { message: "Phone number required." }),
  referral: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const OrderMultipleProducts = () => {
  const { allWallets } = useWallets();

  const { t } = useTranslation();

  const [checkbox, setCheckbox] = useState<boolean>(false);

  const [loader, setLoader] = useState(false);
  const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    if (cart.length < 1) window.location.href = "/";
  }, [cart]);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // Get Metadata
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/products/order-metadata`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        const data = response.data.order_metadata;

        // Set form values using react-hook-form's setValue
        setValue("firstName", data.fname);
        setValue("lastName", data.lname);
        setValue("email", data.email);
        setValue("street", data.street);
        setValue("streetNo", data.street_no);
        setValue("address", data.address);
        setValue("plz", data.plz);
        setValue("location", data.location);
        setValue("phone", data.phone);
        setValue("referral", data.referral);
      })
      .catch((error) => {
        console.error("Failed to fetch order metadata:", error);
      });
  }, [setValue]);

  const onSubmit = (data: FieldValues) => {
    const multipleWallets: Wallet[] = cart.map((c) => ({
      wallet_id: c.id,
      quantity: c.quantity,
    }));

    const deliveryData = {
      fname: data.firstName,
      lname: data.lastName,
      email: data.email,
      address: data.address,
      location: data.location,
      plz: data.plz,
      phone: data.phone,
      street: data.street,
      street_no: data.streetNo,
      referral_code: data.referral,
    };

    const orderWallet = {
      wallets: multipleWallets,
      order_metadata: deliveryData,
    };

    const order = JSON.stringify(orderWallet);

    console.log(orderWallet);

    setLoader(true);
    // Send the form data to the server
    axios
      .post(`${baseUrl}/api/v1/products/order-wallet`, order, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        localStorage.clear();
        window.location.href = response.data.checkout_url;
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);
      });
  };

  const getWalletImg = (id: string) => {
    const wallet = allWallets.find((wal) => wal.wallet_id === id);
    return wallet ? wallet.image : "default-image.png";
  };

  return (
    <div className="fixed z-50 lg:grid grid-cols-2 secondary-bg h-[100vh] w-full overflow-y-scroll">
      <div className="flex justify-center items-center lg:h-[100vh] h-auto bg-zinc-900 shadow shadow-zinc-900">
        <div className="pt-10">
          {cart.map((c) => (
            <div key={c.id} className="mb-5">
              <img
                src={getWalletImg(c.id)}
                alt="wallet"
                className="lg:h-96 h-72 w-full object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-white rounded shadow-lg shadow-zinc-950 lg:p-10 mx-2 lg:mt-0 mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:px-5 px-6 lg:py-5 py-14"
        >
          <p className="lg:text-2xl text-xl font-bold mb-10 font-poppins text-black">
            {t("deliveryInfo")}
          </p>
          <div className="lg:grid grid-cols-2 gap-x-8">
            {/* first name */}
            <div className="mb-5">
              <label
                className="text-sm text-gray-500 block"
                htmlFor="firstName"
              >
                {t("fName")}
              </label>
              <input
                {...register("firstName")}
                type="text"
                name="firstName"
                className={`text-black bg-gray-300 py-3 rounded h-12 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                  errors.firstName && "border-red-600 border-1 border"
                }`}
              />
              {errors.firstName && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            {/* last name */}
            <div className="mb-5">
              <label className="text-sm text-gray-500 block" htmlFor="lastName">
                {t("lName")}
              </label>
              <input
                {...register("lastName")}
                type="text"
                name="lastName"
                className={`text-black bg-gray-300 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                  errors.lastName && "border-red-600 border-1 border"
                }`}
              />
              {errors.lastName && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            {/* Email */}
            <div className="mb-5">
              <label className="text-sm text-gray-500 block" htmlFor="email">
                {t("email")}
              </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                className={`text-black bg-gray-300 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                  errors.email && "border-red-600 border-1 border"
                }`}
              />
              {errors.email && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* street */}
            <div className="grid grid-cols-3 gap-x-5 mb-5">
              <div className="col-span-2">
                <label className="text-sm text-gray-500 block" htmlFor="street">
                  {t("street")}
                </label>
                <input
                  {...register("street")}
                  type="text"
                  name="street"
                  className={`text-black bg-gray-300 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                    errors.street && "border-red-600 border-1 border"
                  }`}
                />
                {errors.street && (
                  <p className="text-red-600 text-xs pt-1">
                    {errors.street.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  className="text-sm text-gray-500 block"
                  htmlFor="streetNo"
                >
                  {t("streetNo")}
                </label>
                <input
                  {...register("streetNo")}
                  type="text"
                  name="streetNo"
                  className={`text-black bg-gray-300 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                    errors.streetNo && "border-red-600 border-1 border"
                  }`}
                />
                {errors.streetNo && (
                  <p className="text-red-600 text-xs pt-1">
                    {errors.streetNo.message}
                  </p>
                )}
              </div>
            </div>
            {/* address */}
            <div className="mb-5">
              <label className="text-sm text-gray-500 block" htmlFor="address">
                {t("address")}
              </label>
              <input
                {...register("address")}
                type="text"
                name="address"
                className={`text-black bg-gray-300 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                  errors.address && "border-red-600 border-1 border"
                }`}
              />
              {errors.address && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.address.message}
                </p>
              )}
            </div>
            {/* PLZ */}
            <div className="mb-5">
              <label className="text-sm text-gray-500 block" htmlFor="plz">
                PLZ
              </label>
              <input
                {...register("plz")}
                type="text"
                name="plz"
                className={`text-black bg-gray-300 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                  errors.plz && "border-red-600 border-1 border"
                }`}
              />
              {errors.plz && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.plz.message}
                </p>
              )}
            </div>
            {/* Country */}
            <div className="mb-5">
              <label className="text-sm text-gray-500 block" htmlFor="plz">
                {t("country")}
              </label>
              <input
                {...register("location")}
                type="text"
                name="location"
                className={`text-black bg-gray-300 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                  errors.location && "border-red-600 border-1 border"
                }`}
              />
              {errors.location && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.location.message}
                </p>
              )}
            </div>
            {/* Phone */}
            <div className="mb-5">
              <label className="text-sm text-gray-500 block" htmlFor="plz">
                {t("phone")}
              </label>
              <input
                {...register("phone")}
                type="tel"
                name="phone"
                className={`text-black bg-gray-300 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                  errors.phone && "border-red-600 border-1 border"
                }`}
              />
              {errors.phone && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            {/* Referral */}
            <div className="mb-5">
              <label className="text-sm text-gray-500 block" htmlFor="plz">
                {t("referral")}
              </label>
              <input
                {...register("referral")}
                type="tel"
                name="referral"
                className={`text-black bg-gray-300 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm`}
              />
            </div>
          </div>
          <div className="flex gap-x-4 mt-2">
            <input
              type="checkbox"
              name="save"
              className="w-4 h-4"
              onChange={() => setCheckbox(!checkbox)}
            />
            <label
              htmlFor="save"
              className="font-poppins font-bold text-black text-xs"
            >
              {t("saveInfo")}
            </label>
          </div>
          <div className="lg:mt-16 mt-8">
            <Button label="order" loader={loader} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderMultipleProducts;
