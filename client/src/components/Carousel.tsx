import React from "react";
import Image from "next/image";
import { Card, CardContent } from "./ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const VariantsCarousel = {
  variant: {
    default: "w-full max-w-xs flex flex-col gap-5 p-6",
    full: "w-full flex flex-col gap-5",
  },
  size: {
    default: "",
    full: "basis-2/3 md:basis-1/2 lg:basis-1/3",
  },
  padding: {
    default: "p-1",
    full: "",
  },
  CardContent: {
    default: "aspect-square items-center justify-center",
    full: "aspect-square items-center justify-center",
  },
  imageSize: {
    default: "w-full h-full border border-black rounded-md",
    full: "w-full h-full border border-black rounded-md",
  },
  text: {
    title: {
      default: "text-lg font-semibold text-gray-900",
      full: "text-xl font-semibold text-gray-900",
    },
    label: {
      default: "text-sm font-medium text-gray-600",
      full: "text-2xl font-medium text-gray-600",
    },
    description: {
      default: "text-sm text-gray-700",
      full: "text-sm text-gray-700",
    },
    price: {
      default: "text-lg font-semibold text-gray-900",
      full: "text-lg font-semibold text-gray-900",
    },
  },
  Icons: {
    default: "",
    full: "",
  },
};

const CarouselTemplate = ({
  data,
  title,
  variant = "default",
}: {
  data: {
    label: string | number;
    image?: string;
    description?: string;
    price?: string | number;
  }[];
  title: string;
  variant?: "default" | "full";
}) => {
  return (
    <Carousel className={`${VariantsCarousel.variant[variant]}`}>
      <div className="flex flex-row justify-between items-center">
        <div>
          <span className={`${VariantsCarousel.text.title[variant]}`}>
            {title}
          </span>
        </div>
        <div className="flex flex-row gap-4">
          <CarouselPrevious className={`${VariantsCarousel.Icons[variant]}`} />
          <CarouselNext className={`${VariantsCarousel.Icons[variant]}`} />
        </div>
      </div>
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem
            key={index}
            className={`${VariantsCarousel.size[variant]}`}
          >
            <div className={`${VariantsCarousel.padding[variant]}`}>
              <Card>
                <CardContent
                  className={`${VariantsCarousel.CardContent[variant]}`}
                >
                  <div className={VariantsCarousel.imageSize[variant]}>
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.label ? String(item.label) : "Image"}
                        width={300}
                        height={300}
                        className={VariantsCarousel.imageSize[variant]}
                      />
                    ) : (
                      <div className={VariantsCarousel.imageSize[variant]} />
                    )}
                  </div>
                  <div className="py-5">
                    <h5 className={`${VariantsCarousel.text.label[variant]}`}>
                      {item.label}
                    </h5>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselTemplate;
