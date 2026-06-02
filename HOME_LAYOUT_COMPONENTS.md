# VibeCard - Home & Layout Components Documentation

## 📱 Complete Homepage & Card Layout Architecture

This document consolidates all Home Page components and Layout card templates used throughout the VibeCard application.

---

## 🏠 HOME PAGE COMPONENTS

The homepage is built from multiple reusable sub-components that showcase the product and features.

### 1️⃣ Hero.tsx - Hero Section

```typescript
import { Link } from "react-router-dom";
import Magnetic from "../GsapMagnetic/Magnetic";
import { ceo } from "../../assets";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="lg:grid grid-cols-2 lg:px-0 px-3 gap-10">
      <div className="">
        <h1 className="lg:text-5xl text-3xl font-extrabold text-white">
          {t("intro1") + " "}
          <span className="text-teal-400 rounded-full px-1">
            {" "}
            {t("intro2")}
          </span>{" "}
          {t("intro3")}
          <span className="text-indigo-400 rounded-full px-1">
            {t("intro4")}
          </span>
        </h1>

        <div className="lg:mt-16 mt-14 lg:mb-0 mb-10 lg:w-72 w-52 text-center">
          <Link to="/create">
            <div className="btn-bg py-4 lg:w-72 w-52 lg:text-center rounded-lg shadow-md shadow-zinc-950 hover:shadow-none hover:text-gray-400 transition ease-in-out delay-200 text-white font-extrabold">
              {t("get-started")}
            </div>
          </Link>
        </div>
      </div>

      {/* Hero Card Display */}
      <div className="flex justify-center text-white relative">
        <Magnetic>
          <div className="content-center rounded-2xl overflow-hidden">
            <div className="relative bg-zinc-900 px-5 py-6 w-[100%] lg:h-auto h-[95%] text-sm shadow-lg shadow-black border-gradient">
              <p className="lg:text-3xl text-xl logo-font">vibecard</p>
              <div className="grid grid-cols-3">
                <div className="col-span-2 mt-4">
                  <div className="flex mb-3">
                    <img
                      src={ceo}
                      alt="user"
                      className="lg:w-20 lg:h-20 w-14 h-14 rounded-full object-cover"
                    />
                    <span className="ms-6 mt-3 lg:text-3xl text-lg chakra text-white">
                      Mr Omar
                    </span>
                  </div>
                  <p className="text-white le:text-xl text-lg mb-1 chakra">
                    CEO
                  </p>
                  <p className="text-gray-400 my-3">
                    <span className="bi-geo-alt-fill lg:text-md text-sm text-teal-200 font-poppins">
                      {" "}
                      {t("at")} VibeCard
                    </span>
                  </p>
                  <div className="flex gap-x-10 text-white">
                    <p className="bi-envelope lg:text-2xl text-xl"></p>
                    <p className="bi-telephone lg:text-2xl text-xl"></p>
                    <p className="bi-instagram lg:text-2xl text-xl"></p>
                    <p className="bi-facebook lg:text-2xl text-xl"></p>
                  </div>
                </div>
                <div className="p-1 rounded mt-4 bi-qr-code text-white lg:text-[12em] text-[8.5em]"></div>
              </div>
            </div>
          </div>
        </Magnetic>
      </div>
    </div>
  );
};

export default Hero;
```

**Purpose:** First above-the-fold section with call-to-action button and interactive business card preview.

---

### 2️⃣ HeroCard.tsx - Interactive Card Customizer

```typescript
import { Link } from "react-router-dom";
import { ceo, logo } from "../../assets";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const socials = [
  { id: 1, icon: "bi-instagram", bg: "bg-pink-600" },
  { id: 2, icon: "bi-facebook", bg: "bg-blue-500" },
  { id: 12, icon: "bi-file-pdf-fill", bg: "bg-red-700" },
  { id: 4, icon: "bi-github", bg: "bg-zinc-700" },
  { id: 5, icon: "bi-tiktok", bg: "bg-black" },
  { id: 3, icon: "bi-linkedin", bg: "bg-sky-700" },
  { id: 6, icon: "bi-snapchat", bg: "bg-yellow-500" },
  { id: 7, icon: "bi-twitter-x", bg: "bg-black" },
  { id: 8, icon: "bi-youtube", bg: "bg-red-700" },
  { id: 9, icon: "bi-threads-fill", bg: "bg-black" },
  { id: 10, icon: "bi-calendar", bg: "bg-sky-700" },
  { id: 11, icon: "bi-pinterest", bg: "bg-red-700" },
];

const bgCover = [
  { style: "bg-gray-500", textColor: "text-black" },
  { style: "bg-lime-500", textColor: "text-black" },
  { style: "bg-cyan-600", textColor: "text-black" },
  { style: "bg-amber-500", textColor: "text-white" },
  { style: "bg-fuchsia-700", textColor: "text-black" },
];

const bgColors = [
  { style: "bg-teal-900", textColor: "text-white" },
  { style: "bg-black", textColor: "text-white" },
  { style: "bg-sky-900", textColor: "text-white" },
  { style: "bg-zinc-900", textColor: "text-white" },
  { style: "bg-rose-900", textColor: "text-white" },
  { style: "bg-white", textColor: "text-black" },
];

const HeroCard = () => {
  const { t } = useTranslation();
  const [coverBg, setCoverBg] = useState("bg-amber-500");
  const [cardBg, setCardBg] = useState({
    bg: "bg-zinc-900",
    color: "text-white",
  });

  return (
    <>
      <div className="lg:grid grid-cols-3 my-5 px-3 lg:ms-52">
        {/* Color Pickers - Desktop */}
        <div className="relative lg:block hidden">
          <p className="absolute w-52 border border-teal-500 -right-20 top-8"></p>
          <div className="absolute right-20 top-0 bg-white w-52 rounded py-3 px-3">
            <div>
              {bgCover.map((bg) => (
                <button
                  onClick={() => setCoverBg(bg.style)}
                  key={bg.style}
                  className={`${bg.style} w-6 h-6 border border-black me-3 rounded`}
                ></button>
              ))}
            </div>
          </div>

          <p className="absolute w-64 border border-teal-500 -right-14 bottom-40"></p>
          <div className="absolute right-32 bottom-32 bg-white w-60 rounded py-3 px-3">
            <div>
              {bgColors.map((bg) => (
                <button
                  onClick={() =>
                    setCardBg({ bg: bg.style, color: bg.textColor })
                  }
                  key={bg.style}
                  className={`${bg.style} w-6 h-6 border border-black me-3 rounded`}
                  style={{ background: bg.style }}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Card Display */}
        <div>
          {/* Cover Bg - Mobile */}
          <div className="ms-2 mb-3 flex lg:hidden justify-center">
            {bgCover.map((bg) => (
              <button
                onClick={() => setCoverBg(bg.style)}
                key={bg.style}
                className={`${bg.style} w-6 h-6 border border-white me-3 rounded`}
              ></button>
            ))}
          </div>

          {/* Card Component */}
          <div className="flex justify-center">
            <div
              className={`rounded-2xl overflow-hidden shadow-md lg:shadow-black shadow-gray-400 z-0 lg:mb-0 w-80 secondary-bg lg:pb-8 pb-8 ${cardBg.bg}`}
            >
              {/* Card Cover */}
              <div
                className={`lg:h-28 h-32 w-full relative flex justify-between z-0 ${coverBg}`}
              >
                <div className="absolute lg:top-16 left-2 top-16">
                  <img
                    src={ceo}
                    alt="user"
                    className="lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-gradient object-cover"
                  />
                </div>
                <p className="text-xs logo-font ps-3 pt-1">vibecard</p>

                <div className="content-center">
                  <p
                    className={`absolute right-0 me-1 w-48 text-center text-xl ${cardBg.color} chakra`}
                  >
                    <span className="">Mr </span>
                    Omar
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="px-5 mt-10 text-white">
                <div className="relative">
                  <img
                    src={logo}
                    alt="Cover"
                    className="absolute right-0 -top-6 w-14 h-14 rounded-full border-gradient bg-white object-cover"
                  />
                  <p className={`mb-1 lg:mt-0 mt-4 text-xl ${cardBg.color}`}>
                    CEO
                  </p>
                  <p className={`text-lg ${cardBg.color}`}>vibecard</p>
                  <p className={`mt-3 text-xs ${cardBg.color}`}>
                    {t("intro3") + " " + t("intro4")}
                  </p>
                  <p className={`my-2 text-md ${cardBg.color}`}>
                    <span
                      className={`bi-geo-alt-fill me-2 ${cardBg.color}`}
                    ></span>
                    {t("germany")}
                  </p>
                </div>

                {/* Contacts */}
                <div className={`grid grid-cols-5 gap-4 justify-center my-7`}>
                  <Link
                    to={`/`}
                    className={`bi-envelope-fill text-4xl text-center rounded-lg py-2 shadow-inner text-zinc-400`}
                  ></Link>
                  <Link
                    to={`/`}
                    className={`bi-globe text-4xl text-center rounded-lg py-2 shadow-inner text-violet-700`}
                  ></Link>
                  <Link
                    to={`/`}
                    className={`bi-telephone-fill text-4xl text-center rounded-lg py-2 shadow-inner text-yellow-400`}
                  ></Link>
                  <Link
                    to={`/`}
                    className={`bi-telegram text-4xl text-center rounded-lg py-2 shadow-inner text-cyan-400`}
                  ></Link>
                  <Link
                    to={`/`}
                    className={`bi-whatsapp text-4xl text-center rounded-lg py-2 shadow-inner text-green-500`}
                  ></Link>
                </div>

                {/* Social Media */}
                <div className="grid grid-cols-4 gap-x-3 gap-y-5 justify-center">
                  {socials.map((s) => (
                    <div
                      key={s.id}
                      className={`${s.bg} text-center p-2 rounded-lg shadow shadow-zinc-900`}
                    >
                      <Link
                        to={`/`}
                        className={`${s.icon} text-3xl text-center rounded-lg py-2`}
                      ></Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card Bg - Mobile */}
          <div className="flex lg:hidden justify-center mt-5 mb-14">
            {bgColors.map((bg) => (
              <button
                onClick={() => setCardBg({ bg: bg.style, color: bg.textColor })}
                key={bg.style}
                className={`${bg.style} w-6 h-6 border border-white me-3 rounded`}
                style={{ background: bg.style }}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
```

**Purpose:** Interactive card preview with real-time color customization for cover and card background.

---

### 3️⃣ SampleProducts.tsx - Product Showcase

```typescript
import { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

export const bgColors = [
  { style: "bg-teal-600", textColor: "text-black" },
  { style: "bg-red-600", textColor: "text-white" },
  { style: "bg-gray-500", textColor: "text-black" },
  { style: "bg-lime-500", textColor: "text-black" },
  { style: "bg-yellow-300", textColor: "text-black" },
  { style: "bg-cyan-600", textColor: "text-black" },
  { style: "bg-amber-500", textColor: "text-white" },
  { style: "bg-fuchsia-700", textColor: "text-black" },
  { style: "bg-black", textColor: "text-white" },
];

const SampleProducts = () => {
  const [metalBg, setMetalBg] = useState({
    bg: "bg-amber-500",
    color: "text-white",
  });

  const [plasticBg, setPlasticBg] = useState({
    bg: "bg-gray-500",
    color: "text-black",
  });

  const [bambooBg, setBambooBg] = useState({
    bg: "bg-black",
    color: "text-white",
  });

  return (
    <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-x-5 px-2">
      {/* Metal Cards */}
      <div className="lg:mb-0 mb-10">
        <Link to={"/product/29"}>
          <Card textColor={metalBg.color} bg={metalBg.bg} />
        </Link>
        <div className="mt-4 secondary-bg rounded-xl px-3 py-5 shadow shadow-zinc-950">
          <div className="flex justify-between">
            <p className="text-lg text-white">
              Vibecard{" "}
              <span className="text-teal-400 font-extrabold">Metal</span> Cards
            </p>
            <p className="text-white font-poppins">€35</p>
          </div>
          <div className="flex justify-center gap-x-2 mt-4">
            {bgColors.map((bg) => (
              <div
                key={bg.style}
                className={`border ${
                  bg.style === metalBg.bg && "border-black"
                } rounded-full w-7 h-7 text-center`}
              >
                <button
                  onClick={() =>
                    setMetalBg({ bg: bg.style, color: bg.textColor })
                  }
                  className={`${bg.style} rounded-full w-5 h-5 mt-[3px]`}
                ></button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recycled Paper Cards */}
      <div className="lg:mb-0 mb-10">
        <Link to={"/product/29"}>
          <Card textColor={plasticBg.color} bg={plasticBg.bg} />
        </Link>
        <div className="mt-4 secondary-bg rounded-xl px-3 py-5 shadow shadow-zinc-950">
          <div className="flex justify-between">
            <p className="text-white">
              Vibecard{" "}
              <span className="text-teal-400 font-extrabold">
                Recycled Papers
              </span>{" "}
              Cards
            </p>
            <p className="text-white font-poppins">€10</p>
          </div>
          <div className="flex justify-center gap-x-2 mt-4">
            {bgColors.map((bg) => (
              <div
                key={bg.style}
                className={`border ${
                  bg.style === plasticBg.bg && "border-black"
                } rounded-full w-7 h-7 text-center`}
              >
                <button
                  onClick={() =>
                    setPlasticBg({ bg: bg.style, color: bg.textColor })
                  }
                  className={`${bg.style} rounded-full w-5 h-5 mt-[3px]`}
                ></button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bamboo Cards */}
      <div className="lg:mb-0 mb-10">
        <Link to={"/product/29"}>
          <Card textColor={bambooBg.color} bg={bambooBg.bg} />
        </Link>

        <div className="mt-4 secondary-bg rounded-xl px-3 py-5 shadow shadow-zinc-950">
          <div className="flex justify-between">
            <p className="text-white">
              Vibecard{" "}
              <span className="text-teal-400 font-extrabold">Bamboo </span>
              Cards
            </p>
            <p className="text-white font-poppins">€25</p>
          </div>
          <div className="flex justify-center gap-x-2 mt-4">
            {bgColors.map((bg) => (
              <div
                key={bg.style}
                className={`border ${
                  bg.style === bambooBg.bg && "border-black"
                } rounded-full w-7 h-7 text-center`}
              >
                <button
                  onClick={() =>
                    setBambooBg({ bg: bg.style, color: bg.textColor })
                  }
                  className={`${bg.style} rounded-full w-5 h-5 mt-[3px]`}
                ></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleProducts;
```

**Purpose:** Showcase three main product types (Metal, Recycled Paper, Bamboo) with pricing and color customization.

---

### 4️⃣ FAQ.tsx - Frequently Asked Questions

```typescript
import { useState } from "react";
import { faq, ambassadorFaq } from "../../services/faq";
import { useTranslation } from "react-i18next";

interface Props {
  textSize?: boolean;
  ambassador?: boolean;
}

const Faq = ({ textSize, ambassador }: Props) => {
  const { t } = useTranslation();
  const [id, setId] = useState<number>(0);

  const handleFaq = (faqId: number) => {
    if (id === faqId) {
      setId(0);
    } else {
      setId(faqId);
    }
  };

  return (
    <>
      {!ambassador
        ? faq.map((faqs) => (
            <div key={faqs.id}>
              <div className="flex justify-between w-full mb-5 border-b pb-4 border-gray-700">
                <div>
                  <p
                    className={`${
                      textSize ? "text-sm" : "lg:text-xl text-lg "
                    } text-white font-poppins`}
                  >
                    {t(faqs.question)}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => handleFaq(faqs.id)}
                    className={`text-white font-poppins rounded px-2 py-0 shadow-none cursor-pointer pt-1 ${
                      id === faqs.id ? "bi-caret-up-fill" : "bi-caret-down-fill"
                    }  textSize ? "text-sm" : "text-xl "`}
                  ></button>
                </div>
              </div>
              {id === faqs.id && (
                <div
                  className={`text-sm ${
                    textSize ? "px-1 mx-2" : "px-3 mx-2 lg:mx-10"
                  } py-5 mb-4 rounded `}
                >
                  <p
                    className={`text-white font-poppins ${
                      textSize ? "text-sm" : "text-lg"
                    }`}
                  >
                    {t(faqs.answer)}
                  </p>
                </div>
              )}
            </div>
          ))
        : ambassadorFaq.map((faqs) => (
            <div key={faqs.id}>
              <div className="flex justify-between w-full mb-5 border-b pb-4 border-gray-700">
                <div>
                  <p
                    className={`${
                      textSize ? "text-sm" : "text-lg"
                    } text-white font-poppins`}
                  >
                    {t(faqs.question)}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => handleFaq(faqs.id)}
                    className={`text-white font-poppins rounded px-2 py-0 shadow-none cursor-pointer pt-1 ${
                      id === faqs.id ? "bi-caret-up-fill" : "bi-caret-down-fill"
                    }  textSize ? "text-sm" : "text-xl "`}
                  ></button>
                </div>
              </div>
              {id === faqs.id && (
                <div
                  className={`text-sm ${
                    textSize ? "px-1 mx-2" : "px-3 mx-2 lg:mx-10"
                  } py-5 mb-4 rounded `}
                >
                  <p
                    className={`text-white font-poppins ${
                      textSize ? "text-sm" : "text-lg"
                    }`}
                  >
                    {t(faqs.answer)}
                  </p>
                </div>
              )}
            </div>
          ))}
    </>
  );
};

export default Faq;
```

**Purpose:** Collapsible FAQ section with separate content for regular users and ambassadors.

---

### 5️⃣ Testimonials.tsx - Customer Reviews

```typescript
import { dallol, hayu, sitra, sumeya } from "@/assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";

interface Testimonial {
  id: number;
  name: string;
  job: string;
  company: string;
  img: string;
  note: string;
}

const testimony: Testimonial[] = [
  {
    id: 1,
    company: "Dallol ",
    job: "Company",
    name: "Dallol",
    img: dallol,
    note: "testimonials2",
  },
  {
    id: 2,
    company: "Social Media",
    job: "Lifestyle Blogger",
    name: "Sitra",
    img: sitra,
    note: "testimonials1",
  },
  {
    id: 3,
    company: "Social Media",
    job: "Social Media Influencer",
    name: "Hayu",
    img: hayu,
    note: "testimonials3",
  },
  {
    id: 4,
    company: "Social Media",
    job: "Freelancer",
    name: "Sumeya",
    img: sumeya,
    note: "testimonials4",
  },
];

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Carousel>
        <CarouselContent className="lg:w-[50%] gap-x-2 ms-1">
          {testimony.map((testimony) => (
            <CarouselItem
              key={testimony.id}
              className="lg:basis-1/1 secondary-bg rounded-lg"
            >
              <div className="relative lg:px-10 pb-10 pt-5">
                <img
                  src={testimony.img}
                  alt="Photo"
                  className="w-24 h-24 object-cover rounded-full"
                />
                <p className="absolute bi-quote right-0 top-0 text-gray-700 text-9xl "></p>
                <p className="ms-3 mt-5 text-xl font-bold font-poppins text-white">
                  {testimony.name}
                </p>
                <p className="ms-3 my-2 text-white">{testimony.job}</p>
                <p className="ms-3 text-sm text-gray-200">
                  {t(testimony.note)}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="lg:hidden">
          <CarouselPrevious className="absolute -left-2" />
          <CarouselNext className="absolute -right-2" />
        </div>
        <div className="lg:block md:hidden hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
```

**Purpose:** Carousel display of customer testimonials with profile images and quotes.

---

### 6️⃣ BusinessCard.tsx - Feature Showcase

```typescript
import { ceo } from "../../assets";
import Magnetic from "../GsapMagnetic/Magnetic";

const BusinessCard = () => {
  return (
    <div className="lg:pt-20 pt-24 pb-10 rounded px-2 mt-14">
      <div className="lg:grid grid-cols-2">
        <Magnetic>
          <div className="content-center hover:z-40">
            <div className="bg-teal-950 rounded-md px-5 py-6 lg:w-[85%] text-sm relative shadow-lg shadow-black">
              <p className="lg:text-3xl text-xl text-teal-600 logo-font">
                vibecard
              </p>
              <div className="grid grid-cols-3">
                <div className="col-span-2 mt-4">
                  <div className="flex mb-3">
                    <img
                      src={ceo}
                      alt="user"
                      className="lg:w-20 lg:h-20 w-14 h-14 rounded-full object-cover"
                    />
                    <span className="ms-6 mt-3 lg:text-3xl text-lg chakra text-white">
                      Mr Omar
                    </span>
                  </div>
                  <p className="text-white le:text-xl text-lg mb-1 chakra">
                    CEO
                  </p>
                  <p className="text-gray-400 my-3">
                    <span className="bi-geo-alt-fill lg:text-md text-sm text-teal-200 font-poppins">
                      {" "}
                      At VibeCard
                    </span>
                  </p>
                  <div className="flex gap-x-10 text-white">
                    <p className="bi-envelope lg:text-2xl text-xl"></p>
                    <p className="bi-telephone lg:text-2xl text-xl"></p>
                    <p className="bi-instagram lg:text-2xl text-xl"></p>
                    <p className="bi-facebook lg:text-2xl text-xl"></p>
                  </div>
                </div>
                <div className="p-1 rounded mt-4 bi-qr-code text-white lg:text-[12em] text-[8.5em]"></div>
              </div>
            </div>
          </div>
        </Magnetic>
        <div className="lg:mt-0 mt-10">
          <h1 className="chakra font-poppins text-3xl mb-4">
            The Future of Networking
          </h1>
          <h1 className="font-extrabold ">
            Transform Your Connections with a Tap
          </h1>
          <p className="text-lg mt-4 text-gray-600">
            Discover VibeCard, your ultimate tool for seamless networking. Our
            innovative NFC business cards and RFID solutions revolutionize the
            way you share your professional and personal information. Say
            goodbye to traditional business cards and embrace a sustainable,
            smart networking experience that leaves a lasting impression.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
```

**Purpose:** Two-column layout with interactive card and feature description.

---

### 7️⃣ Companies.tsx - Partner Slider

```typescript
import {
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
} from "@/assets";
import "./slider.css";

const companies = [
  { id: 1, img: company1 },
  { id: 2, img: company2 },
  { id: 3, img: company3 },
  { id: 4, img: company4 },
  { id: 5, img: company5 },
  { id: 6, img: company6 },
];

const Companies = () => {
  return (
    <div
      className="sliders"
      style={
        {
          "--width": "110px",
          "--height": "110px",
          "--quantity": companies.length,
        } as React.CSSProperties
      }
    >
      <div className="lists">
        {companies.map((c) => (
          <div
            key={c.id}
            className="items"
            style={
              {
                "--position": c.id,
              } as React.CSSProperties
            }
          >
            <img
              src={c.img}
              alt="Companies"
              className="lg:h-full lg:w-full object-cover rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
```

**Purpose:** Infinite auto-scrolling carousel of partner company logos.

---

### 8️⃣ Steps.tsx - Process Steps

```typescript
import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  desc: string;
  desc2?: string;
  step: string;
}

const Steps = ({ desc, title, step, desc2 }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="border-gradient-2 hover:border hover:border-gray-500 rounded-2xl p-7 text-white lg:mb-5 mb-4 secondary-bg shadow- shadow">
      <div className="relative right-20 lg:-top-28 -top-40">
        <div className="absolute lg:right-[35em]  right-36 top-40 bulb"></div>
      </div>
      <p className="font-extrabold mb-2 text-gray-400 font-poppins">
        {t("step")} {step}
      </p>
      <p className="text-white text-xl font-poppins">{t(title)}</p>
      <p className="text-md mt-3 text-gray-300 font-poppins text-sm">
        {t(desc)}
      </p>
      {desc2 && (
        <p className="text-md mt-2 text-gray-300 font-poppins text-sm">
          {t(desc2)}
        </p>
      )}
    </div>
  );
};

export default Steps;
```

**Purpose:** Reusable step card with gradient border and glowing effect.

---

### 9️⃣ Product.tsx - Product Carousel

```typescript
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import SocialMediaProduct from "../Product/SocialMediaProduct";
import GoogleReview from "../Product/GoogleReview";
import Autoplay from "embla-carousel-autoplay";
import BusinessCard from "../Product/BusinessCard";
import { card1, card2, card3, fb, g1, g2, g3, ig, tk } from "@/assets";

const Product = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="flex gap-x-2 lg:px-1 px-3">
        {/* Business Cards */}
        <CarouselItem key={1} className="lg:basis-1/4 md:basis-1/2">
          <BusinessCard img={card1} />
        </CarouselItem>
        <CarouselItem key={2} className="lg:basis-1/4 md:basis-1/2">
          <BusinessCard img={card2} />
        </CarouselItem>
        <CarouselItem key={3} className="lg:basis-1/4 md:basis-1/2">
          <BusinessCard img={card3} />
        </CarouselItem>

        {/* Social Media Products */}
        <CarouselItem key={4} className="lg:basis-1/4 md:basis-1/2">
          <SocialMediaProduct img={fb} />
        </CarouselItem>
        <CarouselItem key={5} className="lg:basis-1/4 md:basis-1/2">
          <SocialMediaProduct img={ig} />
        </CarouselItem>
        <CarouselItem key={6} className="lg:basis-1/4 md:basis-1/2">
          <SocialMediaProduct img={tk} />
        </CarouselItem>

        {/* Google Review Products */}
        <CarouselItem key={7} className="lg:basis-1/4 md:basis-1/2">
          <GoogleReview img={g1} />
        </CarouselItem>
        <CarouselItem key={8} className="lg:basis-1/4 md:basis-1/2">
          <GoogleReview img={g3} />
        </CarouselItem>
        <CarouselItem key={9} className="lg:basis-1/4 md:basis-1/2">
          <GoogleReview img={g2} />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Product;
```

**Purpose:** Auto-rotating carousel showcasing different product types.

---

### 🔟 Additional Home Components

| Component | File Size | Purpose |
|-----------|-----------|---------|
| **Card.tsx** | 878 B | Simple card preview with bg color |
| **slider.css** | 681 B | CSS animations for company slider |

---

## 🎨 LAYOUT COMPONENTS (Card Templates)

These reusable card layout templates handle displaying user information in different arrangements.

### 1️⃣ DefaultCard.tsx - Left-Aligned Layout

```typescript
import { userPic } from "../../assets";
import { useCoverColorStore } from "../../store/useCoverColorStore";
import { useCardColorStore } from "../../store/useCardColorStore";
import { useTextColorStore } from "../../store/useTextColorStore";
import { useContentStore } from "../../store/useContentStore";
import Button from "./Button";
import SocialMedia from "./SocialMedia";
import Contacts from "./Contacts";
import { useCardData } from "../../store/useCardData";
import Watermark from "../Watermark/Watermark";

interface Props {
  watermark?: boolean;
}

const DefaultCard = ({ watermark }: Props) => {
  const { coverColorBg } = useCoverColorStore();
  const { cardColorBg } = useCardColorStore();
  const { company, jobTitle, location, name, pronoun, tagLine } =
    useTextColorStore();
  const { socialMedia, contact } = useContentStore();
  const {
    companyVal,
    jobTitleVal,
    tagLineVal,
    locationVal,
    nameVal,
    preview,
    pronounVal,
  } = useCardData();

  return (
    <div
      className={`relative rounded-2xl w-full overflow-hidden shadow-lg shadow-zinc-800 z-0 lg:mb-0 mb-14 border border-gray-700`}
      style={{ backgroundColor: cardColorBg }}
    >
      {!watermark && <Watermark />}
      
      {/* Cover Section */}
      <div
        className={`lg:h-24 h-32 w-full relative flex justify-between z-0`}
        style={{ backgroundColor: coverColorBg !== "gradient-cover" ? coverColorBg : "" }}
      >
        {coverColorBg === "" && preview.cover && (
          <img src={preview.cover} alt="cover" className="w-full object-cover" />
        )}
        
        {/* Profile Image - Left */}
        <div className="absolute lg:top-10 left-2 top-16 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden z-0">
          <img src={preview?.profile ? preview.profile : userPic} alt="user" />
        </div>
        
        {/* Name - Right */}
        <div className="content-center">
          <p className={`absolute right-0 me-1 w-48 text-center overflow-hidden text-ellipsis text-nowrap ${name.font + " " + name.size}`}
            style={{ color: name.color }}>
            <span className={pronoun.font + " " + pronoun.size} style={{ color: pronoun.color }}>
              {pronounVal && "(" + pronounVal + ")"} </span>
            {nameVal && nameVal}
          </p>
        </div>
      </div>

      {/* Body Section */}
      <div className="px-5 mt-10 text-white">
        <div className="relative">
          {preview.logo && (
            <img src={preview?.logo} alt="Logo" className="absolute right-0 -top-6 w-14 h-14 rounded-full border-2 bg-white" />
          )}
          
          <p className={`${jobTitle.font + " " + jobTitle.size} mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase lg:mt-0 mt-4 ${!jobTitleVal && "invisible"}`}
            style={{ color: jobTitle.color }}>
            {jobTitleVal && jobTitleVal}
          </p>
          
          <p className={`${!companyVal && "invisible"} ${company.font + " " + company.size}`}
            style={{ color: company.color }}>
            {companyVal && "At " + companyVal}
          </p>
          
          <p className={`mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase ${!tagLineVal && "invisible"} ${tagLine.font + " " + tagLine.size}`}
            style={{ color: tagLine.color }}>
            {tagLineVal && tagLineVal}
          </p>
          
          <p className={`${location.font + " " + location.size} my-2 ${!locationVal && "invisible"}`}
            style={{ color: location.color }}>
            <span className="bi-geo-alt-fill me-2" style={{ color: location.color }}></span>
            {locationVal && locationVal}
          </p>
        </div>

        {contact.length > 0 && <Contacts />}
        {socialMedia.length > 0 && <SocialMedia />}
        <Button />
      </div>
    </div>
  );
};

export default DefaultCard;
```

**Layout:** Profile image on **left**, name on **right**

---

### 2️⃣ CenteredCard.tsx - Centered Layout

```typescript
import { userPic } from "../../assets";
import { useCoverColorStore } from "../../store/useCoverColorStore";
import { useCardColorStore } from "../../store/useCardColorStore";
import { useTextColorStore } from "../../store/useTextColorStore";
import { useContentStore } from "../../store/useContentStore";
import Button from "./Button";
import Contacts from "./Contacts";
import SocialMedia from "./SocialMedia";
import { useCardData } from "../../store/useCardData";
import Watermark from "../Watermark/Watermark";

interface Props {
  watermark?: boolean;
}

const CenteredCard = ({ watermark }: Props) => {
  const { coverColorBg } = useCoverColorStore();
  const { cardColorBg } = useCardColorStore();
  const {
    companyVal,
    jobTitleVal,
    tagLineVal,
    locationVal,
    nameVal,
    preview,
    pronounVal,
  } = useCardData();
  const { company, jobTitle, location, name, pronoun, tagLine } = useTextColorStore();
  const { socialMedia, contact } = useContentStore();

  return (
    <div
      className={`relative rounded-2xl w-full overflow-hidden shadow-lg shadow-zinc-800 lg:mb-0 mb-14 border-gray-700`}
      style={{ backgroundColor: cardColorBg }}
    >
      {!watermark && <Watermark />}
      
      {/* Cover Section */}
      <div className={`lg:h-24 h-32 relative flex justify-between`}
        style={{ backgroundColor: coverColorBg !== "gradient-cover" ? coverColorBg : "" }}>
        
        {coverColorBg === "" && preview.cover && (
          <img src={preview.cover} alt="cover" className="w-full object-cover" />
        )}

        {/* Profile Image - Centered */}
        <div className="absolute lg:top-10 top-16 left-1/3 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden">
          <img src={preview?.profile ? preview.profile : userPic} alt="user" />
        </div>
        
        {preview.logo && (
          <img src={preview?.logo} alt="Logo" className="absolute top-20 right-28 w-12 h-12 rounded-full border-2 bg-white" />
        )}
      </div>

      {/* Body Section */}
      <div className="px-5 mt-10 text-white">
        <div className="relative">
          {/* Name - Centered */}
          <div className="content-center">
            <p className={`text-center overflow-hidden text-ellipsis text-nowrap ${name.font + " " + name.size}`}
              style={{ color: name.color }}>
              <span className={pronoun.font + " " + pronoun.size} style={{ color: pronoun.color }}>
                {pronounVal && "(" + pronounVal + ")"} </span>
              {nameVal && nameVal}
            </p>
          </div>

          <p className={`${jobTitle.font + " " + jobTitle.size} mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-center ${!jobTitleVal && "invisible"}`}
            style={{ color: jobTitle.color }}>
            {jobTitleVal && jobTitleVal}
          </p>
          
          <p className={`${!companyVal && "invisible"} ${company.font + " " + company.size} text-center`}
            style={{ color: company.color }}>
            {companyVal && "At " + companyVal}
          </p>
          
          <p className={`mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-center ${!tagLineVal && "invisible"} ${tagLine.font + " " + tagLine.size}`}
            style={{ color: tagLine.color }}>
            {tagLineVal && tagLineVal}
          </p>
          
          <p className={`${location.font + " " + location.size} my-2 text-center ${!locationVal && "invisible"}`}
            style={{ color: location.color }}>
            <span className="bi-geo-alt-fill me-2" style={{ color: location.color }}></span>
            {locationVal && locationVal}
          </p>
        </div>

        {contact.length > 0 && <Contacts />}
        {socialMedia.length > 0 && <SocialMedia />}
        <Button />
      </div>
    </div>
  );
};

export default CenteredCard;
```

**Layout:** All text **centered**, profile image in **center** of cover

---

### 3️⃣ RightCard.tsx - Right-Aligned Layout

```typescript
import { userPic } from "../../assets";
import { useCoverColorStore } from "../../store/useCoverColorStore";
import { useCardColorStore } from "../../store/useCardColorStore";
import { useTextColorStore } from "../../store/useTextColorStore";
import { useContentStore } from "../../store/useContentStore";
import Button from "./Button";
import Contacts from "./Contacts";
import SocialMedia from "./SocialMedia";
import { useCardData } from "../../store/useCardData";
import Watermark from "../Watermark/Watermark";

interface Props {
  watermark?: boolean;
}

const RightCard = ({ watermark }: Props) => {
  const { coverColorBg } = useCoverColorStore();
  const { cardColorBg } = useCardColorStore();
  const { company, jobTitle, location, name, pronoun, tagLine } = useTextColorStore();
  const { socialMedia, contact } = useContentStore();
  const {
    companyVal,
    jobTitleVal,
    tagLineVal,
    locationVal,
    nameVal,
    preview,
    pronounVal,
  } = useCardData();

  return (
    <div
      className={`relative rounded-2xl w-full overflow-hidden shadow-lg shadow-zinc-800 lg:mb-0 mb-10 border-gray-700`}
      style={{ backgroundColor: cardColorBg }}
    >
      {!watermark && <Watermark />}
      
      {/* Cover Section */}
      <div className={`lg:h-24 h-32 relative flex justify-between z-0`}
        style={{ backgroundColor: coverColorBg !== "gradient-cover" ? coverColorBg : "" }}>
        
        {coverColorBg === "" && preview.cover && (
          <img src={preview.cover} alt="cover" className="w-full object-cover" />
        )}

        {/* Profile Image - Right */}
        <div className="absolute lg:top-10 top-16 right-2 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden">
          <img src={preview?.profile ? preview.profile : userPic} alt="user" />
        </div>
        
        {/* Name - Left */}
        <div className="content-center">
          <p className={`absolute left-0 w-48 text-center overflow-hidden text-ellipsis text-nowrap ${name.font + " " + name.size}`}
            style={{ color: name.color }}>
            <span className={pronoun.font + " " + pronoun.size} style={{ color: pronoun.color }}>
              {pronounVal && "(" + pronounVal + ")"} </span>
            {nameVal && nameVal}
          </p>
        </div>
      </div>

      {/* Body Section */}
      <div className="px-4 mt-10 text-white">
        <div className="relative">
          {preview.logo && (
            <img src={preview?.logo} alt="Logo" className="absolute left-0 -top-6 w-14 h-14 rounded-full border-2 bg-white" />
          )}
          
          <p className={`${jobTitle.font + " " + jobTitle.size} mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-end lg:mt-0 mt-4 ${!jobTitleVal && "invisible"}`}
            style={{ color: jobTitle.color }}>
            {jobTitleVal && jobTitleVal}
          </p>
          
          <p className={`${!companyVal && "invisible"} ${company.font + " " + company.size} text-end`}
            style={{ color: company.color }}>
            {companyVal && "At " + companyVal}
          </p>
          
          <p className={`mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-end ${!tagLineVal && "invisible"} ${tagLine.font + " " + tagLine.size}`}
            style={{ color: tagLine.color }}>
            {tagLineVal && tagLineVal}
          </p>
          
          <p className={`${location.font + " " + location.size} my-2 text-end ${!locationVal && "invisible"}`}
            style={{ color: location.color }}>
            <span className="bi-geo-alt-fill me-2" style={{ color: location.color }}></span>
            {locationVal && locationVal}
          </p>
        </div>

        <div className="px-2">
          {contact.length > 0 && <Contacts />}
          {socialMedia.length > 0 && <SocialMedia />}
          <Button />
        </div>
      </div>
    </div>
  );
};

export default RightCard;
```

**Layout:** Profile image on **right**, name on **left**, text **right-aligned**

---

### 4️⃣ Button.tsx - Save Contact Button

```typescript
import { t } from "i18next";
import { useTextColorStore } from "../../store/useTextColorStore";

const Button = () => {
  const { button } = useTextColorStore();
  return (
    <button
      className={`w-full rounded-lg py-4 mb-8 mt-5 shadow-md font-poppins font-extrabold shadow-zinc-950`}
      style={{ backgroundColor: button.color, color: button.font }}
    >
      {t("saveContact")}
    </button>
  );
};

export default Button;
```

**Purpose:** Reusable full-width button for saving contact information.

---

### 5️⃣ SocialMedia.tsx - Social Links Grid

```typescript
import { Link } from "react-router-dom";
import { useContentStore } from "../../store/useContentStore";
import { deezer, trustpilot, calendly } from "@/assets";

const SocialMedia = () => {
  const { socialMedia } = useContentStore();

  return (
    <div
      className={`lg:mb-0 mb-5 ${
        socialMedia.length > 0
          ? `grid ${
              socialMedia.length <= 3 ? "grid-cols-3" : "grid-cols-4"
            }  gap-3`
          : "invisible"
      }`}
    >
      {socialMedia.map((media) => (
        <>
          {media.icon === "trustpilot" ? (
            <div
              className={`flex rounded-md py-2 justify-center shadow-inner`}
              style={{ backgroundColor: media.color }}
            >
              <img src={trustpilot} alt="Trust pilot Logo" className="w-8 h-8 me-0 pe-0" />
            </div>
          ) : media.icon === "deezer" ? (
            <div
              className={`flex rounded-md py-2 justify-center shadow-inner`}
              style={{ backgroundColor: media.color }}
            >
              <img src={deezer} alt="Deezer Logo" className="w-8 h-8 me-0 pe-0" />
            </div>
          ) : media.icon === "calendly" ? (
            <div
              className={`flex rounded-md py-2 justify-center shadow-inner`}
              style={{ backgroundColor: media.color }}
            >
              <img src={calendly} alt="calendly Logo" className="w-8 h-8 me-0 pe-0" />
            </div>
          ) : (
            <Link
              key={media.icon}
              to={`${media.link}`}
              className={`${media.icon} text-white text-3xl text-center rounded-md py-2 shadow-inner`}
              style={{ backgroundColor: media.color }}
            ></Link>
          )}
        </>
      ))}
    </div>
  );
};

export default SocialMedia;
```

**Purpose:** Grid display of social media links with custom icons for special platforms.

---

### 6️⃣ Contacts.tsx - Contact Links Grid

```typescript
import { Link } from "react-router-dom";
import { useContentStore } from "../../store/useContentStore";

const Contacts = () => {
  const { contact } = useContentStore();

  return (
    <div
      className={`lg:my-2 my-5 ${
        contact.length > 0
          ? `grid ${
              contact.length + 2 <= 3 ? "grid-cols-3" : "grid-cols-5"
            }  gap-5 my-5`
          : "invisible"
      }`}
    >
      {contact.map((c) => (
        <Link
          key={c.icon}
          to={`${c.link}`}
          className={`${c.icon} text-3xl text-center rounded-lg py-2 shadow-inner`}
          style={{ color: c.color.replace("bg", "text") }}
        ></Link>
      ))}
    </div>
  );
};

export default Contacts;
```

**Purpose:** Grid display of contact methods (email, phone, etc.)

---

## 📊 Layout Comparison Table

| Layout | Profile Position | Text Alignment | Best For |
|--------|------------------|-----------------|----------|
| **DefaultCard** | Left | Left-aligned | Professional |
| **CenteredCard** | Center | Centered | Modern/Clean |
| **RightCard** | Right | Right-aligned | Creative |

---

## 🔄 Data Flow

All card layouts use Zustand stores for state management:

```
useCardData (user info)
  ↓
useCoverColorStore (cover BG)
useCardColorStore (card BG)
useTextColorStore (text styling)
useContentStore (contacts + social)
  ↓
[DefaultCard | CenteredCard | RightCard]
  ↓
Button + SocialMedia + Contacts (sub-components)
```

---

## 🎯 Key Features

✅ **Three layout templates** for different design preferences
✅ **Reusable sub-components** (Button, SocialMedia, Contacts)
✅ **Dynamic styling** from Zustand stores
✅ **Responsive design** (mobile-first)
✅ **Multi-language support** (i18n)
✅ **Interactive carousels** on homepage
✅ **Color customization** for products
✅ **Watermark support** for cards
✅ **Social media integration** with custom icons

---

Generated on: 2026-06-02
Commit: 37fe369bc632cfd8fce5b82850e3aab32dbadd89
