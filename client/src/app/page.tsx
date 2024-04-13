"use client";

import CarouselTemplate from "@/components/Carousel";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";


const CarouselItems = [
  {
    label: "Card 1",
    image: "",
    description: "",
    price: "",
  },
  {
    label: "Card 2",
    image: "",
    description: "",
    price: "",
  },
  {
    label: "Card 3",
    image: "",
    description: "",
    price: "",
  },
  {
    label: "Card 4",
    image: "",
    description: "",
    price: "",
  },
  {
    label: "Card 5",
    image: "",
    description: "",
    price: "",
  },
  {
    label: "Card 6",
    image: "",
    description: "",
    price: "",
  },
  {
    label: "Card 7",
    image: "",
    description: "",
    price: "",
  },
];

export default function Home() {
  return (
    <div>
      <section className="">
        <MaxWidthWrapper>
          <div className="w-full h-[100vh] flex flex-col items-center justify-center">
            <CarouselTemplate
              data={CarouselItems}
              title={"Variant Full"}
              variant={"full"}
            />
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="">
        <MaxWidthWrapper>
          <div className="w-full h-[100vh] flex flex-col items-center justify-center">
            <CarouselTemplate
              data={CarouselItems}
              title={"Variant Default"}
              variant={"default"}
            />
          </div>
        </MaxWidthWrapper>
      </section>

      
    </div>
  );
}
