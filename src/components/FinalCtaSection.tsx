"use client";

import Image from "next/image";
import ContactModal from "@/components/QuoteModal";

export default function FinalCta() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <Image
            src="/images/contact_support_transparent.png"
            alt="Customer support at Belgium Buses"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
        <div className="text-center md:text-left w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Let’s get your journey started
          </h2>
          <p className="text-gray-700">
            Get a quick quote from <strong>Belgium Buses</strong> and travel across Belgium with comfort, style, and confidence.
          </p>
          <ContactModal />
        </div>
      </div>
    </section>
  );
}
