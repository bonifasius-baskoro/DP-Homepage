import React, { FC } from "react";

const BentoService: FC = () => {
  return (
    <div className="h-screen md:h-full bg-yellow-p py-10 flex flex-col md:flex-row gap-6 md:px-[5%] md:py-[5%]">
      <div className="h-1/3 md:h-auto">
        <div className="h-full mx-4 border-2  border-black p-4 md:p-8 rounded-lg relative">
          <h1 className="  text-2xl md:text-4xl font-bold">
            {" "}
            Your idea is possible!
          </h1>
          <p className="text-black mt-4 text-lg md:text-2xl font-light">
            Proof your concept and go trial and error with us
          </p>
          <div className="absolute right-0 bottom-0 p-4">
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.53887 17H11.4615M5.07714 13H9.92329M12.5389 7H20.4615M14.0771 11H18.9233M6.82072 8.46667L3.6728 16.6513C3.11146 18.1108 2.83079 18.8405 2.95799 19.4252C3.06924 19.9366 3.37653 20.384 3.8139 20.6714C4.31393 21 5.09579 21 6.65951 21H8.34092C9.90463 21 10.6865 21 11.1865 20.6714C11.6239 20.384 11.9312 19.9366 12.0424 19.4252C12.1696 18.8405 11.889 18.1108 11.3276 16.6513L8.1797 8.46667C8.07157 8.18552 7.80144 8 7.50021 8C7.19898 8 6.92886 8.18552 6.82072 8.46667ZM15.8207 15.5333L12.6728 7.34874C12.1115 5.88925 11.8308 5.1595 11.958 4.57483C12.0692 4.06344 12.3765 3.61602 12.8139 3.3286C13.3139 3 14.0958 3 15.6595 3H17.3409C18.9046 3 19.6865 3 20.1865 3.3286C20.6239 3.61602 20.9312 4.06344 21.0424 4.57483C21.1696 5.1595 20.889 5.88924 20.3276 7.34873L17.1797 15.5333C17.0716 15.8145 16.8014 16 16.5002 16C16.199 16 15.9289 15.8145 15.8207 15.5333Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <div className="h-[40%] mx-4 p-4 border-2  border-black  rounded-lg md:hover:scale-105">
          <h1 className="text-black text-2xl font-bold">
            Versatile model option
          </h1>
          <p className="text-black mt-4 text-xl font-light">
            Choose how you want to manage your data and model to use
          </p>
        </div>
        <div className="flex mt-6">
          <div className="w-1/2 h-1/3 md:h-full mx-4 border-2  border-black p-4  rounded-lg hover:scale-105">
            <h1 className="text-black text-xl font-bold">Nice</h1>
            <p className="text-black mt-4 text-xl font-light">
              Choose how you want to manage your data and model to use
            </p>
          </div>

          <div className="w-1/2 mx-4 border-2 md:h-full  border-black p-4  rounded-lg hover:scale-105">
            <h1 className="text-black text-xl font-bold">Nice</h1>
            <p className="text-black mt-4 text-xl font-light">
              Choose how you want to manage your data and model to use
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoService;
