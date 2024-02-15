
import { redirect } from "next/navigation";
import Analytics from "../(components)/Analytics";
import DashboardSidebar from "../(components)/DashboardSidebar";
import LinksTable from "../(components)/LinksTable";

export default async function Dashboard() {
  await getData()
  return (
    <div className="flex">
      <div className="hidden sm:block sm:min-w-[60px] lg:min-w-[200px]">
        <DashboardSidebar />
      </div>

      <div className="w-full mt-10 flex flex-col px-6">
        <div className="text-2xl font-bold">My Links</div>

        <div className="w-full">
          <Analytics />
        </div>

        {/* Table For Links */}
        <LinksTable />
      </div>
    </div>
  );
}

export const getData = async ()=>{
  redirect(`/signin`)
}
