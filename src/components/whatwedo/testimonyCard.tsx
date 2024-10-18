import React, { FC } from "react";

interface TestimonyCardProps {
  name: string;
  testimony: string;
  companyName: string;
}

const TestimonyCard: FC<TestimonyCardProps> = ({
  name,
  testimony,
  companyName,
}) => {
  return (
    <div className="bg-black-p rounded-lg shadow-md p-4 sm:p-6 m-2 sm:m-4 ">
      <blockquote className="text-yellow-p text-base sm:text-lg italic mb-3 sm:mb-4">
        &quot;{testimony}&quot;
      </blockquote>
      <div className="mt-3 sm:mt-4">
        <p className="font-bold text-yellow-p text-sm sm:text-base">{name}</p>
        <p className="text-yellow-p text-xs sm:text-sm">{companyName}</p>
      </div>
    </div>
  );
};

export default TestimonyCard;
