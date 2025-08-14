"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function WhatIsTedx() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      className="py-20 bg-gradient-to-b from-black to-black/95 relative overflow-hidden"
      ref={ref}
    >
      {/* Red divider line at the top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ted-red to-transparent opacity-30" />
      {/* Subtle background shapes */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div
          className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-ted-red/10 rounded-full" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ted-red/10 rounded-full" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/highschool.png"
                alt="High School Group"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="transition-all duration-1000 delay-300 bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-8 md:p-10 flex flex-col items-center md:items-start">
            <div className="w-full flex flex-col items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white text-center">
                ABOUT <span className="text-ted-red">US</span>
              </h2>
              <div className="w-20 h-1 bg-ted-red mx-auto" />
            </div>
            <h3 className="text-xl md:text-2xl font-medium mb-6 text-gray-200 text-center md:text-left">
              Student-Led High School TEDx Event
            </h3>
            <div className="space-y-4 text-gray-300 text-center md:text-left">
              <p>
                TEDxKHS is a dynamic, student-led organization that embodies the
                spirit of TED's mission to spread ideas that can change the
                world. We believe that by fostering a culture of curiosity,
                open-mindedness, and collaboration, we can create truly unique
                and impactful experiences.
              </p>
              <p>
                Our events bring together a diverse mix of voices from the high
                school community and beyond. Our goal is to inspire and empower
                our attendees to think differently, share their ideas, and make
                a meaningful impact in their communities.
              </p>
            </div>
            <div className="mt-8">
              <Button className="bg-ted-red hover:bg-ted-red/90 text-white rounded-full px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
