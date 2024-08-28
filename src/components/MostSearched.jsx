import FakeData from "@/Shared/FakeData";
import React from "react";
import Items from "./Items";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function MostSearched() {
  return (
    <div className="mx-24">
      <h2 className="text-4xl font-black my-16 text-center font-first">
        Most Searched
      </h2>

      <Carousel>
        <CarouselContent>
          {FakeData.jewlist.map((jew, index) => (
            <CarouselItem className="basis-1/1  sm:basis-1/4">
              <Items jew={jew} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MostSearched;
