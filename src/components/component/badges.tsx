import React from "react";

const Badges = () => {
  return (
    <div className="flex items-center">
      <button
        className="border font-medium text-center transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded-full justify-center text-sm h-8 w-8 text-primary bg-white border-gray-gray3 hover:bg-gray-gray1  "
        type="button"
        title="Share this job"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white" />
          <rect
            x="0.5"
            y="0.5"
            width="23"
            height="23"
            rx="11.5"
            stroke="#D1D5DA"
          />
          <path
            d="M7 17H9.5L16.0625 10.4375C16.7529 9.74715 16.7529 8.62786 16.0625 7.93751C15.3721 7.24715 14.2529 7.24715 13.5625 7.93751L7 14.5V17"
            stroke="#24292E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.9375 8.5625L15.4375 11.0625"
            stroke="#24292E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
        className="border font-medium text-center transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded-full justify-center text-sm h-8 w-8 text-primary bg-white border-gray-gray3 hover:bg-gray-gray1  "
        type="button"
        title="Save this job"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white" />
          <rect
            x="0.5"
            y="0.5"
            width="23"
            height="23"
            rx="11.5"
            stroke="#D1D5DA"
          />
          <circle
            cx="8.25"
            cy="12"
            r="1.875"
            stroke="#24292E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="15.75"
            cy="8.25"
            r="1.875"
            stroke="#24292E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="15.75"
            cy="15.75"
            r="1.875"
            stroke="#24292E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.9375 11.1875L14.0625 9.0625"
            stroke="#24292E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.9375 12.8125L14.0625 14.9375"
            stroke="#24292E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
        className="border font-medium text-center transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded-full justify-center text-sm h-8 w-8 text-primary bg-white border-gray-gray3 hover:bg-gray-gray1  "
        type="button"
        title="Save this job"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.625 2.375H9.875M13.625 2.375L8 8M13.625 2.375V6.125"
            stroke="#0D0D0D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.625 8.625V12.375C13.625 12.7065 13.4933 13.0245 13.2589 13.2589C13.0245 13.4933 12.7065 13.625 12.375 13.625H3.625C3.29348 13.625 2.97554 13.4933 2.74112 13.2589C2.5067 13.0245 2.375 12.7065 2.375 12.375V3.625C2.375 3.29348 2.5067 2.97554 2.74112 2.74112C2.97554 2.5067 3.29348 2.375 3.625 2.375H7.375"
            stroke="#0D0D0D"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <button
        className="border font-medium text-center transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded-full justify-center text-sm h-8 w-8 text-primary bg-white border-gray-gray3 hover:bg-gray-gray1 "
        type="button"
        title="Save this job"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="8"
            cy="8"
            r="0.625"
            stroke="#24292E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="8"
            cy="12.375"
            r="0.625"
            stroke="#24292E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="8"
            cy="3.625"
            r="0.625"
            stroke="#24292E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Badges;
