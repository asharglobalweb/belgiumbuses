"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const partners = [
  { name: "Alpadia Language Schools", logo: "/images/partner/psg.png" },
  { name: "Apple", logo: "/images/partner/apple-logo-banner.avif" },
  { name: "Nintendo", logo: "/images/partner/nintendo-logo-banner.avif" },
  { name: "Roland Garros", logo: "/images/partner/ttl.png" },
  { name: "Fnac", logo: "/images/partner/if.png" },
  { name: "Sorbonne Université", logo: "/images/partner/su.png" },
  { name: "Accor Hotels", logo: "/images/partner/ac.png" },
  { name: "TF1", logo: "/images/partner/rn.png" },
  { name: "Orange", logo: "/images/partner/ul.png" },
  { name: "Alliance Française", logo: "/images/partner/af.png" },
];

export default function PartnersSwiper() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="inline-block bg-blue-100 text-blue-600 px-3 py-2 rounded-full text-sm font-semibold">
          We’ve partnered with
        </h3>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
          loop
          speed={8000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 3 },
            640: { slidesPerView: 5 },
            1024: { slidesPerView: 8 },
          }}
        >
          {partners.map(({ name, logo }) => (
            <SwiperSlide key={name}>
              <div className="flex items-center justify-center h-[96px] w-full relative">
                <div className="relative w-[120px] h-[80px] flex items-center justify-center">
                  <Image
                    src={logo}
                    alt={name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100px, 150px"
                    quality={100}
                    priority={false}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
