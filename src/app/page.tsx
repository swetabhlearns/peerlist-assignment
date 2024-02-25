import Drag from "@/components/Drag";
import JobsContainer from "@/components/JobsContainer";
import SidebarComponent from "@/components/Nav";

export default function Home() {
  return (
    <main className="lg:w-[1200px] w-full min-h-screen mx-auto flex font-body">
      <SidebarComponent />
      <JobsContainer />
    </main>
  );
}
