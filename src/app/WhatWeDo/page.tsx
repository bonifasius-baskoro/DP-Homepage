import Navbar from "@/components/shared/Navbar";
import Example from "@/components/whatwedo/sliderCard";
import TestimonyCard from "@/components/whatwedo/testimonyCard";
import React, { FC } from "react";
import { testimonies } from "../data/testimonyList";

const page: FC = () => {
  return (
    <div className="bg-yellow-p">
      <Navbar />
      <div className="mt-12"></div>
      <Example />
      <div className="bg-yellow-p pt-8 pb-16">
        <h1 className="text-5xl font-semibold pl-4 md:pl-12">
          {" "}
          Focus on what matters.
        </h1>
        <p className="text-black-p text-3xl mt-12 pl-4 md:pl-12">
          Empower our AI agent to streamline your business routine operations,
          boosting productivity so you can focus on what truly matters.
        </p>
      </div>
      <div className="flex-col items-center justify-center bg-yellow-p pb-24 ">
        <div className="flex justify-center mb-4">
          <h2>Let&apos;s build together</h2>
        </div>
        <div className="bg-black-p rounded-3xl flex justify-center mx-24 md:mx-[40vw] h-12 transition-transform duration-300 ease-in-out hover:scale-105">
          <button className="text-yellow-p"> Contact Us!</button>
        </div>
      </div>
      <div className="h-24">
        <h1 className="font-bold text-3xl text-black-p md:text-5xl pl-4 mb-8">
          Hear from our partners!
        </h1>
      </div>
      <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 sm:px-8 md:px-12 gap-8  md:justify-center">
        {testimonies.map((testi, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-screen xl:w-[30vw] "
          >
            <TestimonyCard
              name={testi.name}
              testimony={testi.testimony}
              companyName={testi.companyName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
