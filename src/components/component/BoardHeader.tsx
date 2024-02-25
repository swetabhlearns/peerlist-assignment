interface Props {
  index: number;
  title: string;
  length: number;
}

const BoardHeader = ({ index, title, length }: Props) => {
  const backgroundColorClass =
    index === 0 ? "bg-red-100" : index === 2 ? "bg-green-100" : "bg-gray-200";
  const textColorClass =
    index === 0 ? "#EB5757" : index === 2 ? "#00AA45" : "#0D0D0D";

  return (
    <div className={`${backgroundColorClass} p-2 rounded-tl-lg rounded-tr-lg`}>
      <div className="flex gap-2 items-center">
        {index === 0 ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_36591)">
              <path
                d="M7.99998 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00001C14.6666 4.31811 11.6818 1.33334 7.99998 1.33334C4.31808 1.33334 1.33331 4.31811 1.33331 8.00001C1.33331 11.6819 4.31808 14.6667 7.99998 14.6667Z"
                fill="#EB5757"
                stroke="#EB5757"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.33331 8H10.6666"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_36591">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : index === 1 ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_33006)">
              <path
                d="M7.99998 14.6667C11.682 14.6667 14.6666 11.682 14.6666 8.00001C14.6666 4.31801 11.682 1.33334 7.99998 1.33334C4.31798 1.33334 1.33331 4.31801 1.33331 8.00001C1.33331 11.682 4.31798 14.6667 7.99998 14.6667Z"
                stroke="#0D0D0D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_33006">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_33021)">
              <path
                d="M8 14.6667C11.682 14.6667 14.6667 11.682 14.6667 8.00001C14.6667 4.31801 11.682 1.33334 8 1.33334C4.318 1.33334 1.33333 4.31801 1.33333 8.00001C1.33333 11.682 4.318 14.6667 8 14.6667Z"
                fill="#00AA45"
                stroke="#00AA45"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.66667 8.33332L6.66667 10.3333L11.3333 5.66666"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_33021">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}

        <span className={`font-semibold text-base text-[${textColorClass}]`}>
          {`${title} • ${length}`}
        </span>
      </div>
    </div>
  );
};

export default BoardHeader;
