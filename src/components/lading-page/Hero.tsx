"use client";
// import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";
import { CountdownTimer } from "./CountDownTimer";

const SliderCard = () => {
  return (
    <section className="w-full">
      <div className="space-y-8">
        <div className="space-y-6">
          <span className="rounded-full flex items-center bg-zinc-800 px-4 py-1.5 text-sm font-medium text-zinc-100">
            <Star className="text-amber-300 me-3" />
            COOL FEATURES
          </span>
          <h2 className="max-w-2xl font-semibold tracking-tight text-zinc-100 text-xl">
            We Provide Many Interesting Features For You
          </h2>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-zinc-100">
            Interactive Data Visualization
          </h3>
          <p className="text-zinc-400">
            Incorporating interactive charts, graphs, and infographics can make
            complex.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

const HeroSlider = () => {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      orientation="vertical"
      className="w-full max-w-xs h-[calc(100vh-80px)]"
    >
      <CarouselContent className="-mt-1 h-[calc(100vh-80px)] w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="pt-1 md:pt-1.5 h-1/3 md:basis-1/2 lg:basis-1/2 pb-5"
          >
            <div className="p-1 h-full">
              <Card className="h-full bg-transparent border-0 backdrop-blur-3xl">
                <CardContent className="flex items-center justify-center p-6 h-full">
                  <SliderCard />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

const Hero = () => {
  return (
    <section className="min-h-[87vh] bg-slate-800 py-3 overflow-x-hidden relative">
      <div className="min-h-[85vh] mx-auto flex items-stretch px-4 sm:px-6 lg:px-8 lg:max-w-[1440px]">
        <div className="flex flex-col w-full gap-x-10 md:flex-row relative">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-16 -z-1 transform-gpu overflow-hidden blur-3xl -left-[80rem] sm:top-[0rem]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[20rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9780ff] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div className="md:w-1/2 p-6 grid place-items-center">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-2xl md:text-3xl lg:text-7xl font-bold bg-gradient-to-r from-white via-team-50 to-teal-200 bg-clip-text text-transparent">
                V3 Dev MeetUp
              </h1>
              <p className="text-slate-50">
                Join us at Dev MeetUp for insightful talks, networking
                opportunities, and hands-on workshops to enhance your
                development skills and knowledge.
              </p>

              <div className="">
                <CountdownTimer />
              </div>

              {/* <div className="relative space-x-6">
                <Link
                  href="/waitlist"
                  className="bg-gradient-to-r from-teal-600 to-teal-400 text-white inline-block py-4 px-10 rounded-2xl"
                >
                  Join Waitlist
                </Link>
              </div> */}
            </div>
          </div>

          <div className="md:w-1/2 h-full flex items-center justify-center relative">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-16 -z-1 transform-gpu overflow-hidden blur-3xl -right-[80rem] sm:-top-20"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9780ff] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>
            <HeroSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
