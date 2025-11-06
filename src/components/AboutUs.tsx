"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="w-full">
          <Image
            src="/images/abtus.png"
            alt="Belgium Buses modern coach and minibus fleet in Belgium"
            width={1600}
            height={900}
            quality={100}
            priority
            unoptimized={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>

        <div>
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            About Us
          </span>
          <p className="mt-4 text-gray-700">
            At <strong>Belgium Buses</strong>, we are proud to be one of the leading providers of reliable, comfortable, and affordable group transportation across <strong>Belgium</strong>.
            From Brussels to Antwerp, Ghent to Bruges, we make travel simple with our modern fleet, professional drivers, and a commitment to exceptional service.
          </p>

          <ul className="mt-6 space-y-3 list-disc list-inside text-gray-700">
            <li>
              <strong>Modern Fleet:</strong> Our fleet ranges from compact 16-seater minibuses to large 50-seat luxury coaches —
              all maintained to the highest standards and equipped with air-conditioning, reclining seats, WiFi, and onboard entertainment options.
            </li>
            <li>
              <strong>Experienced Drivers:</strong> Every <strong>Belgium Buses</strong> driver is fully licensed, background-checked,
              and trained to provide safe, punctual, and friendly service — whether for a short city transfer or a long-distance journey.
            </li>
            <li>
              <strong>Tailored Travel Solutions:</strong> We handle <strong>corporate events</strong>, <strong>school trips</strong>,
              <strong>wedding transport</strong>, <strong>airport transfers</strong>, and <strong>private tours</strong> across Belgium.
            </li>
            <li>
              <strong>Transparent Pricing:</strong> Our quotes are all-inclusive with no hidden fees, giving you peace of mind and total clarity on costs before you travel.
            </li>
          </ul>

          <p className="mt-6 text-gray-700">
            With years of expertise in the transport industry, <strong>Belgium Buses</strong> has earned a trusted reputation for excellence in
            <strong> coach hire, minibus rental, and group travel services</strong> throughout Belgium. Whether you’re attending an event in Brussels, visiting the historic canals of Bruges, or exploring the Ardennes, we make every journey safe and enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
}
