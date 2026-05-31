import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import axios from "axios";
import { baseUrl } from "@/services/request";
import { useTranslation } from "react-i18next";

interface Props {
  id: string;
  quantity: string | number;
  img: string;
  hideModal: () => void;
  reviewCardLink?: string;
}

interface Wallet {
  wallet_id: string;
  quantity: number | string;
}

const schema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First Name must be greater than 3 characters." }),
  lastName: z
    .string()
    .min(3, { message: "Last Name must be greater than 3 characters." }),
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

const WalletOrder = ({
  id,
  quantity,
  img,
  hideModal,
  reviewCardLink,
}: Props) => {
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const [loader, setLoader] = useState(false);

  const { t } = useTranslation();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

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
    const singleWallet: Wallet = { wallet_id: id, quantity: quantity };

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
      link: reviewCardLink,
    };

    const orderWallet = {
      wallets: [singleWallet],
      order_metadata: deliveryData,
    };

    setLoader(true);
    // Send the form data to the server
    axios
      .post(`${baseUrl}/api/v1/products/order-wallet`, orderWallet, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        window.location.href = response.data.checkout_url;
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);
      });
  };

  return (
    <>
      <div className="overlay z-[999] bg-neutral-950/90"></div>
      <div className="flex justify-center">
        <div className="fixed z-[1000] top-0 lg:grid grid-cols-2 lg:rounded-3xl rounded overflow-hidden lg:h-[85vh] h-[90vh] lg:w-[80%] mx-2 lg:mt-20 mt-10 lg:overflow-hidden overflow-y-scroll">
          <div className="relative flex justify-center bg-white">
            <button
              onClick={() => hideModal()}
              className="absolute lg:hidden top-1 right-1 text-white bg-red-500 bi-x-lg  rounded px-1"
            ></button>
            <img
              src={img}
              alt="wallet"
              className="object-contain w-80 lg:absolute lg:top-[25%]"
            />
          </div>
          {/* Form */}
          <div className="relative secondary-bg lg:p-2 lg:pb-0 pb-8">
            <button
              onClick={() => hideModal()}
              className="lg:absolute lg:block hidden top-3 right-3 text-white bg-red-500 bi-x-lg  rounded px-1"
            ></button>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="lg:px-5 px-6 py-5"
            >
              <p className="text-2xl mb-10 font-poppins text-white">
                {t("deliveryInfo")}
              </p>
              <div className="lg:grid grid-cols-2 gap-x-8">
                {/* first name */}
                <div className="mb-4">
                  <label
                    className="text-xs text-gray-300 block"
                    htmlFor="firstName"
                  >
                    {t("fName")}
                  </label>
                  <input
                    {...register("firstName")}
                    type="text"
                    name="firstName"
                    className={`text-black bg-gray-100 py-3 rounded h-10 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
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
                <div className="mb-4">
                  <label
                    className="text-xs text-gray-300 block"
                    htmlFor="lastName"
                  >
                    {t("lName")}
                  </label>
                  <input
                    {...register("lastName")}
                    type="text"
                    name="lastName"
                    className={`text-black bg-gray-100 py-3 rounded h-10 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
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
                <div className="mb-4">
                  <label
                    className="text-xs text-gray-300 block"
                    htmlFor="email"
                  >
                    {t("email")}
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    name="email"
                    className={`text-black bg-gray-100 py-3 rounded h-10 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
                      errors.email && "border-red-600 border-1 border"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-xs pt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                {/* Street */}
                <div className="grid grid-cols-3 gap-x-5 mb-4">
                  <div className="col-span-2">
                    <label
                      className="text-xs text-gray-300 block"
                      htmlFor="street"
                    >
                      {t("street")}
                    </label>
                    <input
                      {...register("street")}
                      type="text"
                      name="street"
                      className={`text-black bg-gray-100 py-3 rounded h-10 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
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
                      className="text-xs text-gray-300 block"
                      htmlFor="streetNo"
                    >
                      {t("streetNo")}
                    </label>
                    <input
                      {...register("streetNo")}
                      type="text"
                      name="streetNo"
                      className={`text-black bg-gray-100 py-3 rounded h-10 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
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
                {/* Address */}
                <div className="mb-4">
                  <label
                    className="text-xs text-gray-300 block"
                    htmlFor="address"
                  >
                    {t("address")}
                  </label>
                  <input
                    {...register("address")}
                    type="text"
                    name="address"
                    className={`text-black bg-gray-100 py-3 rounded h-10 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
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
                <div className="mb-4">
                  <label className="text-xs text-gray-500 block" htmlFor="plz">
                    {t("PLZ")}
                  </label>
                  <input
                    {...register("plz")}
                    type="text"
                    name="plz"
                    className={`text-black bg-gray-100 py-3 rounded h-10 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
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
                <div className="mb-4">
                  <label
                    className="text-xs text-gray-400 block"
                    htmlFor="location"
                  >
                    {t("country")}
                  </label>
                  <input
                    {...register("location")}
                    type="text"
                    name="location"
                    className={`text-black bg-gray-100 py-3 rounded h-10 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
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
                <div className="mb-4">
                  <label className="text-xs text-gray-300 block" htmlFor="plz">
                    {t("phone")}
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    name="phone"
                    className={`text-black bg-gray-100 py-3 rounded h-10 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${
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
                <div className="mb-4">
                  <label className="text-xs text-gray-300 block" htmlFor="plz">
                    {t("referral")}
                  </label>
                  <input
                    {...register("referral")}
                    type="tel"
                    name="referral"
                    className={`text-black bg-gray-100 py-3 rounded h-10 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm`}
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
                <label htmlFor="save" className="text-white text-xs">
                  {t("saveInfo")}
                </label>
              </div>
              <div className="my-8">
                <Button label={t("order")} loader={loader} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletOrder;
