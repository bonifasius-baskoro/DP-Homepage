import React, { FC } from "react";
import { cards } from "@/app/data/teamList";
import Card from "./Card";
const page: FC = () => {
  return (
    <div className="bg-black-p px-4 min-h-screen pt-16 pb-16">
      <h1 className="text-5xl text-yellow-p mb-24 ml-6">Who We Are</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {cards.map((data, index) => (
            <Card
              key={index}
              role={data.role}
              name={data.name}
              photoURL={data.photoURL}
              paragraph={data.paragraph}
              linkedinUrl={data.linkedinUrl}            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
