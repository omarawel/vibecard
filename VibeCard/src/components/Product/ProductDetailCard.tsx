import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

interface Props {
  images: string[];
}
const ProductDetailCard = ({ images }: Props) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 10000,
        }),
      ]}
    >
      <CarouselContent className="flex gap-x-2 px-1">
        {images.map((img) => (
          <CarouselItem key={img}>
            <img
              src={img}
              alt="card"
              className="rounded-xl lg:h-96 h-80 lg:w-[90%] w-full object-cover cursor-pointer"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ProductDetailCard;
