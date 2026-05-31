import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
interface Props {
  images: string[];
}

const WalletCards = ({ images }: Props) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent className="flex gap-x-2 px-1">
        {images.map((img) => (
          <CarouselItem key={img} className="rounded overflow-hidden">
            <img
              src={img}
              alt="card"
              className="rounded-xl lg:h-96 lg:w-[80%] w-full cursor-pointer"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default WalletCards;
