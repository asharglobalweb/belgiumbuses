"use client";

import Image from "next/image";
import ContactModal from "@/components/QuoteModal";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-5">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Premium coach and minibus hire in Belgium
          </h1>
          <p className="text-gray-700 max-w-md">
            Discover reliable and affordable <strong>coach and minibus hire in Belgium</strong> with <strong>Belgium Buses</strong> — ideal for corporate events, school trips, airport transfers, private tours, and group travel across the country.
          </p>
          <div className="flex justify-start">
            <ContactModal />
          </div>
          <p className="text-gray-700 max-w-md">
            Speak directly with our transport team at{" "}
            <a href="tel:+442038343226">
              <span className="text-primary font-semibold">+44 20 3834 3226</span>
            </a>
          </p>
        </div>
        <div className="flex justify-center lg:justify-end relative">
          <Image
            src="/images/bus-hire-transparent.png"
            width={600}
            height={400}
            alt="Belgium Buses coach and minibus hire services"
            className="object-contain z-10 relative h-auto"
            quality={100}
            priority
          />
          <Image
            src="/images/Frame.png"
            width={600}
            height={400}
            alt="Belgium Buses decorative frame design"
            className="object-contain absolute right-[-20px] w-[30vw] max-w-[350px] lg:max-w-[600px] h-auto lg:h-[520px] hidden lg:block"
            quality={100}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
