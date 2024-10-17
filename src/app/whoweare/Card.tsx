import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface cardProps {
  name: string;
  role: string;
  photoURL: string;
  paragraph: string;
  linkedinUrl: string;
}


const Card: FC<cardProps> = ({ name, role, photoURL, paragraph, linkedinUrl }) => {
  return (
    <>
    <Navbar/>
    <div className="w-80 bg-black-p shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:bg-yellow-p group flex flex-col h-full">
      <div className="px-6 pt-6 pb-4 flex-grow flex flex-col">
        <div className="flex justify-center mb-4">
          <div className="w-32 h-32 relative">
            <Image
              className="rounded-full"
              layout="fill"
              objectFit="cover"
              src={photoURL}
              alt={`${name}'s profile picture`}
            />
          </div>
        </div>
        <div className="text-center flex flex-col flex-grow">
          <h1 className="font-bold text-xl mb-2 text-yellow-p group-hover:text-black-p">{name}</h1>
          <h2 className="text-yellow-p text-sm mb-4 group-hover:text-black-p">{role}</h2>
          <p className="text-yellow-p text-base group-hover:text-black-p mb-4 flex-grow">{paragraph}</p>
          <div className="mt-auto">
            <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <div className="inline-block p-2 rounded-full bg-yellow-p group-hover:bg-black-p transition-colors duration-300">
                <Image
                  src="/assets/linkedin.svg"
                  width={24}
                  height={24}
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Card;
