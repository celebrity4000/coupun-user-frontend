import {
    Carousel,
    CarouselContent,
    CarouselItem,
    // CarouselNext,
    // CarouselPrevious,
} from "@/components/ui/carousel";
import CardComponent from "./CardComponent";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const OfferSection: React.FC = () => {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (
        <div className="mt-12 w-full overflow-scroll-x">
            {/* Heading */}
            <div className="font-['Poppins'] text-xl font-semibold text-[#404040] mb-4 px-4">
                <div className="flex justify-between items-center flex-row gap-6">
                    <h1 className="inline-block whitespace-nowrap ">Now Trending</h1>

                    <div className="h-1 bg-[#FBAF41] mt-1 w-full"></div>
                </div>
            </div>


            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-6xl">
                <CarouselContent className="-ml-1">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <CardComponent />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>



        </div>
    );
};

export default OfferSection;
