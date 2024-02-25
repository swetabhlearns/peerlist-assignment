import Image from "next/image";

const SidebarComponent = () => {
  return (
    <div className="w-[212px] border-r border-primaryBorder flex-col flex-shrink-0  h-screen pb-2 lg:flex justify-between hidden">
      <div className="relative my-3">
        <a href="/scroll">
          <img
            alt="Peerlist"
            loading="lazy"
            width="124"
            height="32"
            decoding="async"
            data-nimg="1"
            className="h-8"
            style={{ color: "transparent" }}
            src="https://dqy38fnwh4fqs.cloudfront.net/website/peerlist-logo-full.svg"
          />
        </a>
      </div>
      <div className="pr-6 flex flex-col  h-full overflow-y-auto hide-scrollbar gap-6">
        <div className="mt-6">
          {/* Links */}
          {/* Replace href values with appropriate paths */}
          <a
            className="flex lg:flex-row flex-col items-center group lg:py-2.5"
            href="/scroll"
          >
            <span className="relative text-white group-hover:text-gray-300">
              <Image
                src="/scroll.svg"
                alt="Scroll"
                width={"24"}
                height={"24"}
              />
            </span>
            <span className="flex flex-col lg:ml-2 lg:mt-0 transition-all lg:group-hover:translate-x-1">
              <span className="paragraph-clamp1 lg:text-base text-xxs font-normal">
                Scroll
              </span>
            </span>
            {/* SVG and text */}
          </a>
          <a
            className="flex lg:flex-row flex-col items-center group lg:py-2.5"
            href="/scroll"
          >
            <span className="relative text-white group-hover:text-gray-300">
              <Image
                src="/projects.svg"
                alt="Scroll"
                width={"24"}
                height={"24"}
              />
            </span>
            <span className="flex flex-col lg:ml-2 lg:mt-0 transition-all lg:group-hover:translate-x-1">
              <span className="paragraph-clamp1 lg:text-base text-xxs font-normal">
                Projects
              </span>
            </span>
            {/* SVG and text */}
          </a>
          <a
            className="flex lg:flex-row flex-col items-center group lg:py-2.5"
            href="/scroll"
          >
            <span className="relative text-white group-hover:text-gray-300">
              <Image src="/inbox.svg" alt="Scroll" width={"24"} height={"24"} />
            </span>
            <span className="flex flex-col lg:ml-2 lg:mt-0 transition-all lg:group-hover:translate-x-1">
              <span className="paragraph-clamp1 lg:text-base text-xxs font-normal">
                Inbox
              </span>
            </span>
            {/* SVG and text */}
          </a>
          <a
            className="flex lg:flex-row flex-col items-center group lg:py-2.5"
            href="/scroll"
          >
            <span className="relative text-white group-hover:text-gray-300">
              <Image src="/jobs.svg" alt="Scroll" width={"24"} height={"24"} />
            </span>
            <span className="flex flex-col lg:ml-2 lg:mt-0 transition-all lg:group-hover:translate-x-1">
              <span className="paragraph-clamp1 lg:text-base text-xxs font-normal">
                Jobs
              </span>
            </span>
            {/* SVG and text */}
          </a>
          <a
            className="flex lg:flex-row flex-col items-center group lg:py-2.5"
            href="/scroll"
          >
            <span className="relative text-white group-hover:text-gray-300">
              <Image
                src="/search.svg"
                alt="Scroll"
                width={"24"}
                height={"24"}
              />
            </span>
            <span className="flex flex-col lg:ml-2 lg:mt-0 transition-all lg:group-hover:translate-x-1">
              <span className="paragraph-clamp1 lg:text-base text-xxs font-normal">
                Search
              </span>
            </span>
            {/* SVG and text */}
          </a>
          <a
            className="flex lg:flex-row flex-col items-center group lg:py-2.5"
            href="/scroll"
          >
            <span className="relative text-white group-hover:text-gray-300">
              <Image
                src="/network.svg"
                alt="Scroll"
                width={"24"}
                height={"24"}
              />
            </span>
            <span className="flex flex-col lg:ml-2 lg:mt-0 transition-all lg:group-hover:translate-x-1">
              <span className="paragraph-clamp1 lg:text-base text-xxs font-normal">
                Network
              </span>
            </span>
            {/* SVG and text */}
          </a>

          {/* Additional Links */}
        </div>
        <div className="">
          {/* User Profile and Company */}
          {/* Adjust img src and href values */}
          <a
            className="flex lg:flex-row flex-col items-center group lg:py-2.5"
            href="/swetabh"
          >
            <span className="relative text-white group-hover:text-gray-300">
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 rounded-full bg-white">
                  <Image
                    src="https://bafkreihnhma5kplypz263o2khmull2dkix6sluxc3dqbgrnyecwhv5cqei.ipfs.nftstorage.link/"
                    alt="Scroll"
                    width={"24"}
                    height={"24"}
                    className="w-6 h-6  bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1 border-white rounded-full bg-white"
                  />
                </div>
              </div>
            </span>
            <span className="flex flex-col lg:ml-2 lg:mt-0 transition-all lg:group-hover:translate-x-1">
              <span className="paragraph-clamp1 lg:text-base text-xxs font-normal">
                Swetabh Kumar
              </span>
            </span>
            {/* User Profile */}
          </a>
          <a
            className="flex lg:flex-row flex-col items-center group py-2"
            href="/company/create"
          >
            {/* Company */}
            <span className="relative text-white group-hover:text-gray-300">
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 rounded-full bg-white">
                  <Image
                    src="/loom.jpg"
                    alt="Scroll"
                    width={"24"}
                    height={"24"}
                    className="w-6 h-6 bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1 border-white rounded-full bg-white"
                  />
                </div>
              </div>
            </span>
            <span className="flex flex-col lg:ml-2 lg:mt-0 transition-all lg:group-hover:translate-x-1">
              <span className="paragraph-clamp1 lg:text-base text-xxs font-normal">
                Loom
              </span>
              <span className="text-[10px]">Manage jobs, teams, & more →</span>
            </span>
          </a>
        </div>
        {/* Join Waitlist Button */}
        <button
          type="button"
          aria-label="Join Peerlist Mobile App Waitlist"
          className="flex mt-2 items-center gap-2 cursor-pointer group"
        >
          {/* Button contents */}
        </button>
      </div>
      <div className="flex flex-col justify-start text-[10px] gap-6 ">
        <p className="text-gray-700 font-semibold">
          Blog • Help Center • Feedback • Code of Conduct • Privacy • T&C
        </p>
        <span className="text-gray-700 ">© 2023 Peerlist Inc.</span>
      </div>
    </div>
  );
};

export default SidebarComponent;
