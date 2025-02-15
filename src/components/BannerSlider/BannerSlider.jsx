"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/ui/components/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { ChevronsRightIcon } from "lucide-react";
import Link from "next/link";

const BannerSlider = () => {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          stopOnFocusIn: false,
          delay: 5000,
        }),
        Fade(),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="w-full h-[400px] bg-[url('/images/slider/13_s.jpeg')]">
            <div className="p-5 md:p-10 w-full h-full flex flex-col items-start justify-end gap-y-2 text-white">
              <h3 className="text-xl font-bold">Managing ISIN Queries</h3>
              <p className="font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt voluptatem doloribus a illo. Cum eum pariatur ipsa
                deserunt, a consectetur.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-1 font-semibold"
              >
                Learn More <ChevronsRightIcon size={16} strokeWidth={3} />
              </Link>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="w-full h-[400px] bg-[url('/images/slider/14_s.jpeg')]">
            <div className="p-5 md:p-10 w-full h-full flex flex-col items-start justify-end gap-y-2 text-white">
              <h3 className="text-xl font-bold">Local Exchanges/Global data</h3>
              <p className="font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt voluptatem doloribus a illo. Cum eum pariatur ipsa
                deserunt, a consectetur.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-1 font-semibold"
              >
                Learn More <ChevronsRightIcon size={16} strokeWidth={3} />
              </Link>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="w-full h-[400px] bg-[url('/images/slider/15_s.jpeg')]">
            <div className="p-5 md:p-10 w-full h-full flex flex-col items-start justify-end gap-y-2 text-white">
              <h3 className="text-xl font-bold">Presenting Your Security</h3>
              <p className="font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt voluptatem doloribus a illo. Cum eum pariatur ipsa
                deserunt, a consectetur.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-1 font-semibold"
              >
                Learn More <ChevronsRightIcon size={16} strokeWidth={3} />
              </Link>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="w-full h-[400px] bg-[url('/images/slider/16_s.jpeg')]">
            <div className="p-5 md:p-10 w-full h-full flex flex-col items-start justify-end gap-y-2 text-white">
              <h3 className="text-xl font-bold">Independent & Reliable</h3>
              <p className="font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt voluptatem doloribus a illo. Cum eum pariatur ipsa
                deserunt, a consectetur.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-1 font-semibold"
              >
                Learn More <ChevronsRightIcon size={16} strokeWidth={3} />
              </Link>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default BannerSlider;
