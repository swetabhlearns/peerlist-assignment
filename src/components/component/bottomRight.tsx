import Image from "next/image";
import React from "react";

interface Props {
  bold: string;
  notBold: string;
  img?: string;
}

const BottomRightInfo = ({ bold, notBold, img }: Props) => {
  return (
    <div className="flex items-center gap-[2px]">
      <span className="text-gray-500 text-[10px]">{notBold}</span>
      <span className="flex text-gray-1000 text-[10px] font-semibold items-center">
        {img && (
          <Image
            src={img}
            alt="posted-by"
            width={18}
            height={18}
            className="rounded-full"
          />
        )}

        {bold}
      </span>
    </div>
  );
};

export default BottomRightInfo;
