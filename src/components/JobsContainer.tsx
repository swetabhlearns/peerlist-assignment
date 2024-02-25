"use client";

import CandidateSearch from "./component/search";
import Header from "./Header";
import Drag from "./Drag";
import { useState } from "react";

const JobsContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="mb-28 sm:mb-0 min-h-screen lg:min-h-[calc(100vh-132px)] w-full flex flex-col gap-4 lg:gap-6 border-r border-primaryBorder">
      <Header />
      <CandidateSearch onSearchQueryChange={setSearchQuery} />
      <Drag searchQuery={searchQuery} />
    </div>
  );
};

export default JobsContainer;
