import Image from "next/image";
import React from "react";

const JobHeader = () => {
  return (
    <div className="mb-4 flex items-center gap-3">
      <a
        className="flex"
        rel="noreferrer"
        target="_blank"
        href="https://peerlist.io/"
      >
        <div className="border border-primaryBorder bg-white inline-block p-2 rounded-2xl">
          <div className="w-10 h-10 relative">
            <div className="w-10 h-10 rounded-full">
              <Image
                src="/peerlist.jpg"
                alt="company-logo"
                width={"40"}
                height={"40"}
                className="w-10 h-10 rounded-full bg-center bg-no-repeat bg-cover  flex justify-center items-center object-contain hover:opacity-90 transition-opacity  logo-drop-shadow bg-white"
              />
            </div>
          </div>
        </div>
      </a>
      <div className="flex flex-col ">
        <span className="flex items-center font-semibold text-lg">
          Software Engineer, Front End{" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="#0D0D0D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span>
          {`at Peerlist • Full time • Remote (United States, Canada)`}
        </span>
      </div>
    </div>
  );
};

export default JobHeader;
