
import Analytics from "../(components)/Analytics";
import DashboardSidebar from "../(components)/DashboardSidebar";
import LinksTable from "../(components)/LinksTable";

export default function Dashboard() {
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





{/* <div className="flex gap-4 mt-4 flex-col md:flex-row"> */}
          {/* First Div */}
          {/* <div className="flex p-6 rounded-md border shadow">
            <div className="flex items-center justify-center gap-6">

              <div className="flex">
                <div className="flex-shrink-0 bg-green-500 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-500">Total Clicks</p>
                  <p className="text-gray-700">2330</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 bg-green-500 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    className="h-6 w-6 transform rotate-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-500 ">Top performing</p>
                  <p className="text-gray-700">https://dash.ly/uhjkluy</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Second Div */}
          {/* <div className="flex-1 p-6 rounded-lg shadow border">
            <div>
              <h2 className="text-lg font-semibold mb-4">Create New Link</h2>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter your URL"
                  className="flex-1 p-3 border rounded-lg"
                />
                <button className="bg-blue-500 text-white px-4 py-3 rounded-lg">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div> */}
