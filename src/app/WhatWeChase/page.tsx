import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import React, { FC } from "react";
import { valueList } from "@/app/data/valueList";
import Value from "@/components/whoweare/Value";

const page: FC = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-12 md:pt-24 md:px-12 bg-black-p pb-8">
        <div className="pt-8 px-4 md:px-6 ">
          <h1 className="text-5xl text-yellow-p leading-normal font-medium md:text-6xl">
            South Tangerang innovators with mission bring Indonesia to global AI
            map
          </h1>
          <p className="text-2xl text-yellow-p mt-8">
            Rooted in South Tangerang, we&apos;re an AI agency that embraces
            challenges. We question norms to uncover innovative solutions,
            driven by our mission to solve complex problems with cutting-edge AI
            technology. Our passionate team is dedicated to reshaping industries
            locally, with an eye toward future global impact.
          </p>
          <p className="text-2xl text-yellow-p mt-6">
            We learn by doing, embrace innovation, and constantly improve.
            Through open dialogue and attentive listening, we understand
            challenges deeply, adapt quickly, and push AI solutions forward.
          </p>
        </div>
      </div>

      <div className="pt-12 md:pt-24  md:px-8 bg-black-p pb-8">
        <div className="pt-8 px-4 md:px-6 md:flex-col md:justify-center md:items-center ">
          <h1 className="text-5xl text-black-p leading-normal font-medium md:text-6xl bg-yellow-p">
            Our Value
          </h1>
          <div className="flex justify-center md:h-[30%]">
            <Image
              src="/assets/gambar-vlal.png"
              width="500"
              height="500"
              alt="our value"
            />
          </div>
        </div>
        <div className="flex flex-col grid-cols-1 gap-12 text-center mt-6">
          {valueList.map((val, index) => (
            <Value
              key={index}
              header={val.header}
              paragraph={val.paragraph}
              pictureLink={val.pictureLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
