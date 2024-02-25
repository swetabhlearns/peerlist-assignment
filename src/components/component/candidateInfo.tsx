interface Props {
  name: string;
  designation: string;
}

const CandidateInfo = ({ name, designation }: Props) => {
  return (
    <div className="flex flex-col gap-[2px]">
      <div className="flex gap-1">
        <span className="font-semibold text-[14px]">{name}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="18" height="18" rx="9" fill="white" />
          <rect
            x="1"
            y="1"
            width="18"
            height="18"
            rx="9"
            stroke="white"
            stroke-width="2"
          />
          <rect x="1" y="1" width="18" height="18" rx="9" fill="white" />
          <rect
            x="1"
            y="1"
            width="18"
            height="18"
            rx="9"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M8.47729 2.80234C9.217 1.73255 10.7828 1.73255 11.5225 2.80234C11.9706 3.45043 12.7717 3.74544 13.5267 3.54042C14.773 3.20199 15.9725 4.22029 15.8595 5.52087C15.791 6.30877 16.2173 7.05577 16.9259 7.38975C18.0956 7.94104 18.3675 9.50115 17.4547 10.424C16.9017 10.983 16.7537 11.8325 17.0843 12.5492C17.6302 13.7322 16.8473 15.1042 15.5617 15.2174C14.7829 15.286 14.1299 15.8405 13.9279 16.6046C13.5944 17.8658 12.1231 18.4076 11.0663 17.6583C10.4261 17.2044 9.57362 17.2044 8.93343 17.6583C7.8767 18.4076 6.40537 17.8658 6.0719 16.6046C5.86988 15.8405 5.21681 15.286 4.43801 15.2174C3.15247 15.1042 2.3696 13.7322 2.91542 12.5492C3.24609 11.8325 3.09805 10.983 2.54505 10.424C1.63222 9.50115 1.90411 7.94104 3.07384 7.38975C3.78247 7.05577 4.20873 6.30877 4.14028 5.52087C4.02729 4.22029 5.22673 3.20199 6.47303 3.54042C7.22805 3.74544 8.02916 3.45043 8.47729 2.80234Z"
            fill="url(#paint0_linear_1_36673)"
          />
          <g filter="url(#filter0_d_1_36673)">
            <path
              d="M6.66669 10.254L8.66669 12.1111L13.3334 7.77777"
              stroke="white"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              shape-rendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_36673"
              x="5.06671"
              y="7.17776"
              width="9.86664"
              height="7.53333"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_36673"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_36673"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1_36673"
              x1="9.99988"
              y1="2"
              x2="9.99988"
              y2="18"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#27AE60" />
              <stop offset="1" stop-color="#1E874B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="text-xs ">{designation}</span>
    </div>
  );
};

export default CandidateInfo;
