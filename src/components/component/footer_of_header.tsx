import React from "react";

interface Props {
  bold: string;
  notBold: string;
}

const BottomInfo = ({ bold, notBold }: Props) => {
  return (
    <div className="flex gap-[2px] items-center">
      <span className="text-xs font-semibold">{bold}</span>
      <span className="text-xs">{notBold}</span>
    </div>
  );
};

export default BottomInfo;
