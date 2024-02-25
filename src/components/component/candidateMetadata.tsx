interface Props {
  notBold: string;
  bold: string;
  mobile?: string;
}
const CandidateMetadata = ({ bold, notBold, mobile }: Props) => {
  return (
    <div className="flex flex-col gap-[2px]">
      <span className="text-[10px] text-gray-500">{notBold}</span>
      <span className="text-xs text-gray-1000 font-semibold ">{bold}</span>
      {mobile && (
        <span className="text-xs text-gray-1000 font-semibold ">{mobile}</span>
      )}
    </div>
  );
};

export default CandidateMetadata;
