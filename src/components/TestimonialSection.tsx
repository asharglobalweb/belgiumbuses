"use client";
import { Star } from "lucide-react";
import { useState } from 'react';

export default function TestimonialSection() {
  const testimonials = [
    {
      key: 'passengers',
      name: "Anne Dubois",
      role: "Regular Commuter, Brussels",
      avatar: "avatar1",
      message: "I travel often between Brussels and Ghent for work. Belgium Buses is always punctual and the coaches are very comfortable.",
    },
    {
      key: 'passengers',
      name: "Lars De Smet",
      role: "University Student, Antwerp",
      avatar: "avatar2",
      message: "Affordable and reliable service for students. The drivers are helpful and the WiFi is a big plus.",
    },
    {
      key: 'passengers',
      name: "Sofie Van Dam",
      role: "Family Traveller, Bruges",
      avatar: "avatar3",
      message: "We used Belgium Buses for a family trip to Bruges — the coach was spotless and the journey was smooth.",
    },
    {
      key: 'corporate',
      name: "Michel Laurent",
      role: "Operations Manager, Brussels",
      avatar: "avatar4",
      message: "Professional service for our corporate events. Belgium Buses handled everything with precision and care.",
    },
    {
      key: 'corporate',
      name: "Isabelle Meert",
      role: "HR Director, Antwerp",
      avatar: "avatar5",
      message: "Our conference transport was seamless. The drivers were courteous and the timetable was perfect.",
    },
    {
      key: 'corporate',
      name: "Jonas Verhoeven",
      role: "Event Coordinator, Ghent",
      avatar: "avatar6",
      message: "Great service for events in Ghent. The coaches were comfortable and our delegates were impressed.",
    },
    {
      key: 'school',
      name: "Mme. Claes",
      role: "Primary School Teacher, Bruges",
      avatar: "avatar7",
      message: "Our school trip was organised professionally and safely. The children were comfortable throughout the journey.",
    },
    {
      key: 'school',
      name: "Mr. Janssens",
      role: "Sports Coach, Liège",
      avatar: "avatar8",
      message: "We use Belgium Buses for away matches. They understand the importance of punctuality and safety.",
    },
    {
      key: 'school',
      name: "Frau Peeters",
      role: "Headmistress, Leuven",
      avatar: "avatar9",
      message: "Excellent communication and reliable drivers. Parents were very happy with the service.",
    },
  ];

  const categories = ['passengers', 'corporate', 'school'];
  const [active, setActive] = useState(categories[0]);
  const filtered = testimonials.filter(t => t.key === active);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center mb-8">
          <h3 className="inline-block bg-blue-100 text-blue-600 px-3 py-2 rounded-full text-sm font-semibold ">
            Client Testimonials
          </h3>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
        </div>
        <div className="mb-12 flex justify-center gap-4 flex-wrap">
          {categories.map(key => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-5 py-2 rounded-full transition-colors duration-200 focus:outline-none border ${active === key ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-300 hover:bg-blue-50 hover:text-blue-600'}`}
            >
              {key === 'passengers' ? 'From passengers' : key === 'corporate' ? 'From companies' : 'From schools'}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((t, idx) => (
            <div key={idx} className="flex flex-col bg-white rounded-xl shadow-md p-6 text-left h-full">
              <p className="text-gray-700 mb-6 flex-grow">{t.message}</p>
              <div className="flex mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
