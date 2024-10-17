import React, { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="relative w-full h-screen">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/convert-yellw.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-start p-8 md:ml-12">
        <h1 className="text-black-p text-left text-5xl lg:text-8xl leading-snug">
          <span className="bg-black-p text-yellow-p font-semibold">
            Reimagine
          </span>
        </h1>
        <h1 className="text-left text-5xl md:text-6xl md:mt-4 leading-snug text-yellow-p">
          Life
        </h1>
        <h1 className="text-left text-5xl md:text-6xl leading-snug text-yellow-p">
          with Gen AI
        </h1>
      </div>
    </div>
  );
};

export default Hero;