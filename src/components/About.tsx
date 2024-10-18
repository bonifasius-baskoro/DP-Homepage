"use client";
import React, { FC, useState, useEffect, useRef } from "react";

const About: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`h-screen px-2 bg-[#212121] pt-24 transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div>
        <h1 className="text-5xl text-yellow-p px-2 font-semibold md:px-4">What We Do</h1>
      </div>
      <div className="mt-6">
        <p className="text-yellow-p text-lg pt-8 px-2 md:px-4">
          The AI Agency, based in South Tangerang, is at the forefront of
          Indonesia&apos;s artificial intelligence revolution. From this strategic
          location in Banten province, the company leverages its expertise in AI
          to drive innovation and efficiency across Indonesian businesses. Their
          suite of services, including OCR and conversation agents, is designed
          to reshape operations and boost productivity for companies throughout
          the region. The AI Agency&apos;s team of experts embraces challenges,
          constantly developing new AI solutions tailored to the unique
          landscape of Indonesian commerce and society. By focusing on local
          needs while applying global AI advancements, the company is working to
          secure Indonesia&apos;s place in the digital future, all from its home base
          in South Tangerang.
        </p>
      </div>
    </div>
  );
};

export default About;
