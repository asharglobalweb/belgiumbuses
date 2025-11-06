"use client";

import React from "react";

export default function BigNumbersSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center lg:text-left">
        <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
          Our Achievements
        </span>
        <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-gray-900">
          Trusted by passengers across Belgium
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl">
          At <strong>Belgium Buses</strong>, we take pride in delivering safe, reliable, and comfortable travel
          for thousands of passengers every month. From airport transfers and school trips to private tours
          and corporate events, we’re dedicated to providing exceptional service across the country.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-blue-600 text-white p-10 rounded-2xl shadow-lg">
            <p className="text-sm uppercase tracking-wide opacity-80">
              Passengers Transported
            </p>
            <p className="mt-2 text-5xl font-extrabold">250,000+</p>
            <p className="mt-4 text-lg opacity-90">
              Every year, hundreds of thousands of passengers travel with Belgium Buses for dependable,
              comfortable journeys throughout Belgium — including Brussels, Antwerp, Ghent, and Bruges.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-blue-50 p-8 rounded-2xl shadow-sm">
              <p className="text-2xl font-bold text-blue-600">1,200+</p>
              <p className="mt-1 text-gray-700">Journeys operated annually</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl shadow-sm">
              <p className="text-2xl font-bold text-blue-600">24/7</p>
              <p className="mt-1 text-gray-700">Customer support and live updates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
