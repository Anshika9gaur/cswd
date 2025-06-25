"use client";

import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // ✅ Add Autoplay
import Image from "next/image";

const images = [
  "/hack1.png",
  "/hack2.png",
  "/hack3.png",
];

export default function GallerySection() {
  return (
    <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-violet-500">Gallery</h2>
          <p className="text-xl sm:text-2xl mt-4">Our beautiful memories</p>
          <div className="mt-10 flex justify-center md:justify-start space-x-10">
            <div>
              <p className="text-3xl font-bold text-violet-500">0+</p>
              <p className="text-lg">Sponsors</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-violet-500">0+</p>
              <p className="text-lg">Events</p>
            </div>
          </div>
        </div>

        {/* Swiper Gallery */}
        <div className="flex-1 w-full max-w-xl rounded-2xl overflow-hidden shadow-lg">
          <Swiper
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }} // ✅ Autoplay config
            modules={[Navigation, Autoplay]} // ✅ Include Autoplay module
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full aspect-video">
                  <Image
                    src={img}
                    alt={`Gallery image ${index + 1}`}
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
  