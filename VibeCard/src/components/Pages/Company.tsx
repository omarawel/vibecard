import { company } from "@/assets";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import companies from "@/services/company";
import axios from "axios";
import { baseUrl } from "@/services/request";

const schema = z.object({
  fName: z
    .string()
    .min(3, { message: "First name must be greater than 3 characters." }),
  lName: z
    .string()
    .min(3, { message: "Last name must be greater than 3 characters." }),
  job: z
    .string()
    .min(3, { message: "JobTitle must be greater than 2 characters." }),
  company: z.string().min(3, { message: "Company name required." }),

  people: z
    .number({
      invalid_type_error: "Number of employees must be 2 and greater than 2",
    })
    .min(2),
  how_many: z
    .number({
      invalid_type_error:
        "Number of digital cards must be 2 and greater than 2",
    })
    .min(2),

  learn: z.string().optional(),

  email: z.string().email({ message: "Email is required." }),
});

type FormData = z.infer<typeof schema>;

const Company = () => {
  const [title] = useState("Vibecard Companies and Teams");
  useDocumentTitle(title);

  const { t } = useTranslation();

  const [loader, setLoader] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [countryName, setCountryName] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [submitError, setSubmitError] = useState<boolean>(false);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleOnChange = (
    value: string,
    data: { name: string; dialCode: string; countryCode: string }
  ) => {
    setPhone(value);
    setCountryName(data.name); // Store the country name in the state
  };

  // On Form Submit
  const onSubmit = (data: FieldValues) => {
    if (!phone) {
      setPhoneError(true);
      return;
    }
    setPhoneError(false);
    setLoader(true);

    const companyData = {
      work_email: data.email,
      first_name: data.fName,
      last_name: data.lName,
      company_name: data.company,
      job_title: data.job,
      phone_number: phone,
      country: countryName,
      how_heard_about_us: data.learn,
      number_of_employees: data.people,
      number_of_employees_needs_vibecard: data.how_many,
    };

    axios
      .post(`${baseUrl}/api/v1/auth/for-companies`, companyData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        setLoader(false);
        setSuccess(response.data.message);
      })
      .catch((error) => {
        setSubmitError(true);
        setLoader(false);
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto lg:px-9 px-3 lg:mt-32 mt-24">
        <div className="grid lg:grid-cols-2 lg:gap-x-4 mt-6">
          <div className="lg:mt-40 mt-5 overflow-hidden">
            <p className="text-white font-poppins lg:text-5xl font-bold text-3xl mb-5">
              {t("company-title")}
            </p>
            <p className="text-white font-poppins text-lg lg:px-0">
              {t("company-desc")}
            </p>
          </div>
          <div className="flex justify-center lg:mt-0 mt-8">
            <img
              src={company}
              alt="Company"
              className="rounded lg:w-full w-96"
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-white text-center mt-16 font-poppins lg:text-3xl text-xl">
            {t("ready-to-get-started")}
          </p>
          <p className="text-center mt-2 font-poppins text-gray-300 lg:text-lg">
            {t("submit-the-form")}
          </p>

          {/* Login error */}
          {submitError && (
            <div className="fixed text-center top-24 right-0 lg:w-[30%] w-[98%]">
              <p className="z-50 bg-red-600 text-lg rounded py-4 text-white">
                <span className="bi-exclamation-triangle-fill me-3"></span>
                Something went wrong.
              </p>
            </div>
          )}

          {/* Success */}
          {success !== "" && (
            <div className="fixed text-center top-24 right-0 lg:w-[30%] w-[98%]">
              <p className="ms-2 z-40 bg-green-500 text-white text-lg rounded text-center py-4">
                <span className="bi-check-circle-fill me-4"></span>
                {success}
              </p>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-x-5 lg:px-20 px-2 mt-10">
            {/* Email */}
            <div className="mb-5">
              <label
                className="text-sm text-gray-400 block font-poppins"
                htmlFor="email"
              >
                {t("email")}
              </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                className="text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300"
              />
              {errors.email && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* First Name */}
            <div className="mb-5">
              <label
                className="text-sm text-gray-400 block font-poppins"
                htmlFor="fName"
              >
                {t("fName")}
              </label>
              <input
                {...register("fName")}
                type="text"
                name="fName"
                className="text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300"
              />
              {errors.fName && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.fName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="mb-5">
              <label
                className="text-sm text-gray-400 block font-poppins"
                htmlFor="lName"
              >
                {t("lName")}
              </label>
              <input
                {...register("lName")}
                type="text"
                name="lName"
                className="text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300"
              />
              {errors.lName && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.lName.message}
                </p>
              )}
            </div>

            {/* Job Title */}
            <div className="mb-5">
              <label
                className="text-sm text-gray-400 block font-poppins"
                htmlFor="job"
              >
                {t("job")}
              </label>
              <input
                {...register("job")}
                type="text"
                name="job"
                className="text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300"
              />
              {errors.job && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.job.message}
                </p>
              )}
            </div>

            {/* Company */}
            <div className="mb-5">
              <label
                className="text-sm text-gray-400 block font-poppins"
                htmlFor="company"
              >
                {t("company") + " Name"}
              </label>
              <input
                {...register("company")}
                type="text"
                name="company"
                className="text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300"
              />
              {errors.company && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.company.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                className="text-sm text-gray-400 block font-poppins mb-2"
                htmlFor="phone"
              >
                {t("phone")}
              </label>
              <PhoneInput
                country={"de"}
                value={phone}
                onChange={handleOnChange}
                inputStyle={{
                  width: "100%",
                  fontSize: "16px",
                  height: "45px",
                }}
              />

              {phoneError && (
                <p className="text-red-600 text-xs pt-1">
                  Valid Phone number required.
                </p>
              )}
            </div>

            {/* How many People */}
            <div className="mb-5">
              <label
                className="text-sm text-gray-400 block font-poppins"
                htmlFor="people"
              >
                {t("how-many")}
              </label>
              <input
                {...register("people", { valueAsNumber: true })}
                type="number"
                name="people"
                className="text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300"
                min={2}
              />
              {errors.people && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.people.message}
                </p>
              )}
            </div>

            {/* How many Card*/}
            <div className="mb-5">
              <label
                className="text-sm text-gray-400 block font-poppins"
                htmlFor="how_many"
              >
                {t("how-many-card")}
              </label>
              <input
                {...register("how_many", { valueAsNumber: true })}
                type="number"
                name="how_many"
                className="text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300"
                min={2}
              />
              {errors.how_many && (
                <p className="text-red-600 text-xs pt-1">
                  {errors.how_many.message}
                </p>
              )}
            </div>

            {/* How do u learn about us  */}
            <div className="mb-5">
              <label
                className="text-sm text-gray-400 block font-poppins"
                htmlFor="how_many"
              >
                {t("how-learn")}
              </label>

              <select
                {...register("learn")}
                name="learn"
                className="text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300"
              >
                <option defaultValue={""} hidden></option>
                {companies.map((c) => (
                  <option key={c.id} value={c.value}>
                    {c.value}
                  </option>
                ))}
              </select>
            </div>

            {/* Button */}
            <div className="mt-1">
              <Button loader={loader} label="Submit" />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Company;
