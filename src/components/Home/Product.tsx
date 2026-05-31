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
        {/* Card */}
        <CarouselItem key={1} className="lg:basis-1/4 md:basis-1/2">
          <BusinessCard img={card1} />
        </CarouselItem>
        <CarouselItem key={2} className="lg:basis-1/4 md:basis-1/2">
          <BusinessCard img={card2} />
        </CarouselItem>
        <CarouselItem key={3} className="lg:basis-1/4 md:basis-1/2">
          <BusinessCard img={card3} />
        </CarouselItem>
        {/* Social */}
        <CarouselItem key={4} className="lg:basis-1/4 md:basis-1/2">
          <SocialMediaProduct img={fb} />
        </CarouselItem>
        <CarouselItem key={5} className="lg:basis-1/4 md:basis-1/2">
          <SocialMediaProduct img={ig} />
        </CarouselItem>
        <CarouselItem key={6} className="lg:basis-1/4 md:basis-1/2">
          <SocialMediaProduct img={tk} />
        </CarouselItem>
        {/* Google */}
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
