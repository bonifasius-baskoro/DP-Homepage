import Navbar from "@/components/shared/Navbar";
import Example from "@/components/whatwedo/sliderCard";
import React, { FC } from "react";

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
    </div>
  );
};

export default page;