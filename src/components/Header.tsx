import React from "react";
import JobHeader from "./component/jobHeader";
import Badges from "./component/badges";
import BottomInfo from "./component/footer_of_header";
import BottomRightInfo from "./component/bottomRight";

const Header = () => {
  return (
    <div className="border-b border-primaryBorder lg:px-6 lg:py-10 p-4 bg-gray-gray0 flex   flex-col ">
      <div className="flex justify-between w-full items-start">
        <JobHeader />
        <Badges />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4 pl-[72px]">
          <BottomInfo bold="78" notBold="Candidates" />
          <BottomInfo bold="78" notBold="Candidates" />
          <BottomInfo bold="78" notBold="Candidates" />
        </div>
        <div className="flex gap-2">
          <BottomRightInfo notBold="Posted" bold="1d ago" />
          <BottomRightInfo
            notBold="by"
            bold={`Akash Bhadange`}
            img="/aksh.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
