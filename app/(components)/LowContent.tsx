import Image from "next/image";

export default function LowContent() {
  return (
    <div className="flex flex-row justify-center mt-20 gap-20">
      <div className="ml-28 h-full w-full">
        <Image
          src="/AnalyticsImage.webp"
          alt="Analytics Image"
          width={550}
          height={430}
        />
      </div>
      <div className="mr-32">
        {/* <p className="text-2xl font-bold">Gain Insight into Your Shortened URLs</p> */}
        <p className="bg-lavender text-pink-600 font-bold rounded-full py-1 px-3 inline-flex items-center justify-center text-sm bg-pink-100">Link Analytics</p>
        <p className="text-3xl font-bold mt-8">Unleash the Power of Link Analytics</p>
        <p className="text-base mt-4 text-slate-600">At Dashly, we believe in providing you with more than just shortened URLs.
          With our comprehensive link analytics feature,
          you can delve deeper into the performance of your links and
          gain valuable insights to optimize your online presence.
        </p>
        <div className="mt-5">
          <ul>
            <li className="flex items-center gap-3 py-2">
              <Image
                src="https://rx.link/assets/img/feature-list-icon-1.svg"
                alt="icon"
                width={25}
                height={25}
              />
              <p className="text-base font-medium mb-0">Click Count</p>
            </li>

            <li className="flex items-center gap-3 py-2">
              <Image
                src="https://rx.link/assets/img/feature-list-icon-2.svg"
                alt="icon"
                width={25}
                height={25}
              />
              <p className="text-base font-medium mb-0">Time-Based Analytics</p>
            </li>

            <li className="flex items-center gap-3 py-2">
              <Image
                src="https://rx.link/assets/img/feature-list-icon-3.svg"
                alt="icon"
                width={25}
                height={25}
              />
              <p className="text-base font-medium mb-0">Geographic Insights</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}