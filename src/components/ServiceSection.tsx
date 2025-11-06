"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    key: "corporate",
    title: "Corporate Events",
    description: `Make your corporate travel effortless with our premium coach hire services across Belgium. Whether it’s for conferences, meetings, or company events, we offer dependable and comfortable transport for your team. Our modern fleet ensures punctuality, comfort, and a professional image.`,
    image: "/images/corporate21.png",
  },
  {
    key: "school",
    title: "School Trips",
    description: `Turn every educational journey into a safe and enjoyable experience with our trusted school coach hire service. From museum visits in Brussels to history trips in Bruges, we make group travel simple and reliable for teachers and students across Belgium.`,
    image: "/images/school21.png",
  },
  {
    key: "shuttles",
    title: "Shuttles",
    description: `Experience smooth and efficient travel between airports, hotels, and event venues with our reliable shuttle services in Belgium. Designed for convenience and comfort, we specialise in dependable group transport for corporate transfers and private travel logistics.`,
    image: "/images/shuttle21.png",
  },
  {
    key: "transfers",
    title: "Transfers",
    description: `Enjoy seamless door-to-door transport with our professional transfer service anywhere in Belgium. From airport pickups to city transfers, we provide a smooth, comfortable, and timely travel experience.`,
    image: "/images/transfer21.png",
  },
  {
    key: "home",
    title: "Home to School",
    description: `Simplify your family’s routine with our safe and reliable home to school transport service. Our professional drivers ensure punctuality and peace of mind for parents. With well-maintained vehicles and high safety standards, we provide a dependable daily school transport solution across Belgium.`,
    image: "/images/home21.png",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(services[0].key);
  const current = services.find((s) => s.key === active)!;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            Our Services
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Belgium Coach Hire and Bus Rentals
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover reliable and affordable coach hire, minibus rental, and group transport services across Belgium. We make every journey smooth, safe, and comfortable.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {services.map((s) => (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-200 font-medium
                ${
                  active === s.key
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:shadow-sm"
                }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">{current.title}</h3>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              {current.description}
            </p>
          </div>

          <div className="w-full flex justify-center">
            <div className="relative w-full max-w-[700px] h-[450px]">
              <Image
                src={current.image}
                alt={`${current.title} Belgium Buses`}
                fill
                className="object-cover rounded-lg shadow-lg"
                quality={100}
                priority
                unoptimized={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
