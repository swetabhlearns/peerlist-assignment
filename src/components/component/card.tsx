import { Employee } from "@/bin/CardData";
import CandidateInfo from "./candidateInfo";
import CandidateMetadata from "./candidateMetadata";
import CardHeader from "./cardHeader";

interface Props {
  index: number;
  data: Employee;
}

const Card = ({ index, data }: Props) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-gray-00 flex flex-col gap-2">
      {!data?.external && (
        <>
          <CardHeader
            image={data.image}
            reff={data.reffered}
            index={index}
            peerMatched={data.peerMatched}
          />
          <CandidateInfo name={data.name} designation={data.company} />
          {index !== 0 && (
            <div className="flex gap-4 ">
              <CandidateMetadata notBold="Experience" bold={data.experience} />
              <CandidateMetadata notBold="Holding offer?" bold={data.holding} />
              <CandidateMetadata notBold="Notice period" bold={data.notice} />
            </div>
          )}
          {index !== 0 && (
            <CandidateMetadata
              notBold="Contact"
              bold={data.contact}
              mobile={data.number}
            />
          )}
        </>
      )}
      {data?.external && (
        <>
          <div className="flex justify-between">
            <span className="font-semibold text-[14px] text-gray-1000">
              {data.name}
            </span>
            <span className="text-[10px] text-gray-500">Applied 1d ago</span>
          </div>
          <div className="flex gap-4">
            <CandidateMetadata notBold="Resume" bold={`${data.name} .pdf ↗`} />
            <CandidateMetadata notBold="Notice period" bold="30 days" />
          </div>
        </>
      )}
      {(index === 0 || index === 2) && (
        <div className="flex gap-1 items-center ">
          {index === 0 ? (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_33467)">
                <path
                  d="M6 11C8.7614 11 11 8.7614 11 6C11 3.23857 8.7614 1 6 1C3.23857 1 1 3.23857 1 6C1 8.7614 3.23857 11 6 11Z"
                  stroke="#EB5757"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 6H8"
                  stroke="#EB5757"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_33467">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : index === 2 ? (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 6.28571L4.5 8.375L9.75 3.5"
                stroke="#00AA45"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : null}

          <p className="text-gray-500 text-[10px]">
            {index === 0
              ? `Rejected by`
              : index === 2
              ? "Shortlisted by"
              : null}{" "}
            <span className="font-semibold text-[10px] text-gray-500">
              Yogini Bende{" "}
            </span>
            on 15 Dec 2023
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
