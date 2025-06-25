"use client";

import "swiper/css";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonLink?: string;
  images: string[];
  imageOnLeft?: boolean;
}

export default function EventCard({
  title,
  description,
  buttonLabel,
  buttonLink,
  images,
  imageOnLeft = false,
}: EventCardProps) {
  return (
    <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ${
          imageOnLeft ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-12`}
      >
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-violet-500">{title}</h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
            {description}
          </p>
          {buttonLabel && buttonLink && (
            <Link href={buttonLink}>
              <button className="mt-8 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl transition">
                {buttonLabel}
              </button>
            </Link>
          )}
        </div>

        {/* Right: Swiper Carousel */}
        <div className="flex-1 w-full max-w-xl rounded-2xl overflow-hidden shadow-lg">
          <Swiper
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full aspect-video">
                  <Image
                    src={img}
                    alt={`Event image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
