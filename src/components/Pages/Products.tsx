import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Wallets from "../Product/Wallets";
import SocialMediaProduct from "../Product/SocialMediaProduct";
import GoogleReview from "../Product/GoogleReview";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import Cart from "../Cart/Cart";
import { useTranslation } from "react-i18next";
import { card1, card2, card3, fb, g1, g2, g3, ig, tk } from "@/assets";
import BusinessCard from "../Product/BusinessCard";

const Products = () => {
  const [title] = useState("Shop our Products");
  useDocumentTitle(title);

  const { t } = useTranslation();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Cart />
      <div className="lg:container mx-auto lg:mt-36 mt-28 ">
        <h1 className="lg:text-4xl text-2xl lg:text-center px-3 font-extrabold text-white">
          {t("productTitle")}
        </h1>
      </div>

      <div className="lg:container mx-auto mt-16 lg:px-0 px-3">
        <div className="mb-10 lg:mx-40">
          {/* Business Card */}
          <Carousel>
            <CarouselContent>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <BusinessCard img={card1} />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <BusinessCard img={card2} />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <BusinessCard img={card3} />
              </CarouselItem>
            </CarouselContent>
            <div className="lg:hidden md:block block">
              <CarouselPrevious className="absolute z-40 left-0 bg-black text-white" />
              <CarouselNext className="absolute z-40 right-0 bg-black text-white" />
            </div>
          </Carousel>
          {/* Social Media */}
          <Carousel>
            <CarouselContent>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <SocialMediaProduct img={ig} />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <SocialMediaProduct img={fb} />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <SocialMediaProduct img={tk} />
              </CarouselItem>
            </CarouselContent>
            <div className="lg:hidden md:block block">
              <CarouselPrevious className="absolute z-40 left-0 bg-black text-white" />
              <CarouselNext className="absolute z-40 right-0 bg-black text-white" />
            </div>
          </Carousel>
          {/* <Google Review /> */}
          <Carousel>
            <CarouselContent>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <GoogleReview img={g1} />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <GoogleReview img={g3} />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <GoogleReview img={g2} />
              </CarouselItem>
            </CarouselContent>
            <div className="lg:hidden md:block block">
              <CarouselPrevious className="absolute z-40 left-0 bg-black text-white" />
              <CarouselNext className="absolute z-40 right-0 bg-black text-white" />
            </div>
          </Carousel>
          {/* Wallets */}
          <Wallets />
          {/* Review Cards */}
          <Wallets review_card />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
