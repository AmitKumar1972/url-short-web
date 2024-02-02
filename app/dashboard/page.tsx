
import DashboardSidebar from "../(components)/DashboardSidebar";

const dummyLinks = [
  {
    id: 1,
    shortLink: "https://dash.ly/uhjkluy",
    originalLink: "https://test-review-ap.myshopify.com/admin/oauth/authorize?client_id=570095e20",
    clicks: 25,
    dateCreated: "Sep 24, 2024",
  },
  {
    id: 2,
    shortLink: "https://dash.ly/uhjkluy",
    originalLink: "https://test-review-ap.myshopify.com/admin/oauth/authorize?client_id=570095e20b1937221e5c687jknejkcnwkejncwekjncwejknfiwhruih23iodjawkdmqwlknfasdlcnksdmkfnqweiofjiowejo",
    clicks: 10,
    dateCreated: "Sep 24, 2024",
  },
  {
    id: 3,
    shortLink: "https://dash.ly/uhjkluy",
    originalLink: "https://test-review-ap.myshopify.com/admin/oauth/authorize?client_id=570095e20b1937221e",
    clicks: 32,
    dateCreated: "Sep 24, 2024",
  },
];

export default function Dashboard() {
  return (
    <div className="flex">
      <div className="hidden sm:block sm:min-w-[60px] lg:min-w-[200px]">
        <DashboardSidebar />
      </div>

      <div className="w-full mt-10 flex flex-col px-6">
        <div className="text-2xl font-bold">My Links</div>

        <div className="flex gap-4 mt-4 flex-col md:flex-row">
          {/* First Div */}
          <div className="flex p-6 rounded-md border shadow">
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
          </div>

          {/* Second Div */}
          <div className="flex-1 p-6 rounded-lg shadow border">
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
        </div>

        {/* Table For Links */}
        <div className="mt-4 overflow-auto rounded-lg shadow">
          <table className="w-full border-collapse bg-white border rounded-lg">
            <thead className="bg-gray-300">
              <tr>
                <th className="py-3 px-4 text-sm font-semibold text-left border-b">SHORT LINK</th>
                <th className="py-3 px-4 text-sm font-semibold text-left border-b">ORIGINAL LINK</th>
                <th className="py-3 px-4 text-sm font-semibold text-left border-b">CLICKS</th>
                <th className="py-3 px-4 text-sm font-semibold text-left border-b">DATE CREATED</th>
              </tr>
            </thead>

            <tbody>
              {dummyLinks.map((link, index) => (
                <tr key={link.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="py-3 px-4 text-sm text-gray-700">{link.shortLink}</td>
                  <td className="py-3 px-4 text-sm text-gray-700 break-all">{link.originalLink}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{link.clicks}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{link.dateCreated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
