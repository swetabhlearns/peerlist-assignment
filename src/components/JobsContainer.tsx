import Image from "next/image";
import Badges from "./component/badges";
import JobHeader from "./component/jobHeader";
import BottomInfo from "./component/footer_of_header";
import BottomRightInfo from "./component/bottomRight";
import CandidateSearch from "./component/search";
import Header from "./Header";
import Drag from "./Drag";

const JobsContainer = () => {
  return (
    <div className="mb-28 sm:mb-0 min-h-screen lg:min-h-[calc(100vh-132px)] w-full flex flex-col gap-4 border-r border-primaryBorder">
      <Header />
      <CandidateSearch />
      <Drag />
    </div>
  );
};

export default JobsContainer;
