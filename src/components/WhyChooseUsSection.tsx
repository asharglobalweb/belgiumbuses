"use client";

import Image from "next/image";
import {
  ShieldCheck,
  User,
  Clock,
  Headset
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      Icon: ShieldCheck,
      title: "Best Price Guarantee",
      desc: "With Belgium Buses, you always get the best value across Belgium. If you find a lower quote for the same journey, we’ll match it so you travel for less without compromising comfort.",
    },
    {
      Icon: User,
      title: "Experienced Drivers",
      desc: "Our professional and friendly drivers are fully licensed and trained to make every trip safe, smooth, and enjoyable from start to finish.",
    },
    {
      Icon: Clock,
      title: "Always Available",
      desc: "From early morning airport transfers to late-night returns, our fleet operates 24 hours a day to fit your travel plans anywhere in Belgium.",
    },
    {
      Icon: Headset,
      title: "24/7 Support",
      desc: "Our dedicated customer service team is available around the clock to help with bookings, updates, or travel assistance whenever you need it.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center lg:justify-end relative">
          <Image
            src="/images/bus2.png"
            alt="Modern coach from Belgium Buses in Belgium"
            width={600}
            height={400}
            className="object-cover z-10"
          />
          <Image
            src="/images/Vector.png"
            alt="Decorative background graphic"
            width={600}
            height={400}
            className="object-cover absolute"
          />
        </div>

        <div className="space-y-6">
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Why Belgium Buses
          </h2>
          <p className="text-gray-700">
            Choose <strong>Belgium Buses</strong> for reliable, comfortable, and affordable group transport. We make every journey across Belgium effortless with professional drivers and modern vehicles.
          </p>
          <div className="space-y-4">
            {features.map(({ Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {title}
                  </h3>
                  <p className="mt-1 text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
