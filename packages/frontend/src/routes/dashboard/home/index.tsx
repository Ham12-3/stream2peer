import Layout from "../layout";
import { FaRegFolderOpen } from "react-icons/fa6";

function DashboardHome() {
  return (
    <Layout>
      <div className="text-primary-white ">
        <h1 className="text-2xl">Setup a project to get started</h1>
        <div className="flex justify-center w-full">
          <div className="border border-primary-border w-ful flex justify-center my-6 flex-col items-center gap-4 rounded-lg py-6 border-dashed w-full">
            <div className=""></div>
            <FaRegFolderOpen size={40} />
            <a href="/dashboard/projects" className="underline">
              Add new project.
            </a>
          </div>
        </div>

        <div>
          <p>
            Enable multistreaming by connecting your stream2peer account to
            different social platforms.{" "}
            <a href="/dashboard/destination" className="underline opacity-90">
              start multistreaming
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default DashboardHome;
