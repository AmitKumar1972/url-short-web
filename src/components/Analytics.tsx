import Image from "next/image";

export default function Analytics() {
  return (
    <div className="flex flex-row gap-6 mt-5 flex-wrap">
      <div className="flex flex-row border justify-start items-center shadow-lg px-2 py-2 rounded-lg min-w-[270px] gap-2">
        <Image
          src="/Icon.png"
          width={60}
          height={60}
          alt="Logo"
        />
        <div className="flex flex-col">
          <p className="text-lg font-semibold text-gray-500 whitespace-nowrap">Total Clicks</p>
          <p className="text-gray-700">2300</p>
        </div>
      </div>

      <div className="flex flex-row border justify-start items-center shadow-lg px-2 py-2 rounded-lg min-w-[250px] gap-2">
        <Image
          src="/Icon-1.png"
          width={60}
          height={60}
          alt="Logo"
        />
        <div className="flex flex-col">
          <p className="text-lg font-semibold text-gray-500">Total Performing</p>
          <p className="text-gray-700">https://dash.ly/jyq7m4kr</p>
        </div>
      </div>

      {/* Create short link wala div */}
      <div className="flex flex-col shadow-lg border px-2 py-2 rounded-lg min-w-[270px]">
        <h2 className="text-lg font-semibold mb-2">Create New Link</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter your Long URL"
            className="border rounded px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-500 text-white rounded px-2 py-1">
            Create
          </button>
        </div>
      </div>
    </div>
  )
}