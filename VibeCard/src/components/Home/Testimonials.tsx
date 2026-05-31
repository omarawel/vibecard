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
