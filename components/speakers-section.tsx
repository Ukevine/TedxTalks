"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Cursor from "@/components/Cursor";

export function SpeakersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const speakers = [
    {
      name: "Kevine Uwase",
      title: "Education Innovator",
      image: "/images/uwase.png",
      topic: "Reimagining Education in Rwanda",
    },
    {
      name: "Bruno Blaise",
      title: "Youth Activist",
      image: "/images/bruno.png",
      topic: "The Power of Youth Voice",
    },
    {
      name: "Jean-Paul Habimana",
      title: "Tech Entrepreneur",
      image: "/images/jean.png",
      topic: "Building Rwanda's Digital Future",
    },
    {
      name: "Narasha Urusaro",
      title: "Climate Advocate",
      image: "/images/grace.png",
      topic: "Sustainable Solutions for Tomorrow",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-black to-black/95 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ted-red to-transparent opacity-30"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Featured <span className="text-ted-red">Speakers</span>
            </h2>
            <div className="w-20 h-1 bg-ted-red mx-auto mb-6"></div>
            <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our speakers bring diverse perspectives and inspiring ideas to the
              TEDx stage. Each speaker has been carefully selected to share
              their unique insights on our theme "Dare to Dream."
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className={`group transition-all duration-1000 delay-${index * 100} ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              >
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-square bg-black/40 backdrop-blur-sm border border-gray-800">
                  <Image
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <p className="font-medium text-ted-red text-sm">
                        {speaker.topic}
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">{speaker.name}</h3>
                <p className="text-ted-red text-sm">{speaker.title}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm">
              More speakers to be announced. Stay tuned for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
