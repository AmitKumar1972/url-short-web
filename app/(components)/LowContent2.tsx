import Image from "next/image";

export default function LowContent2() {
  return (
    <div className="flex md:flex-row-reverse flex-col justify-center max-w-[1000px] items-center p-10 gap-5">
      <Image
        src="/feature-sales-marketing-2.svg"
        alt="Analytics Image"
        width={400}
        height={400}
      />
      <div>
        {/* <p className="text-2xl font-bold">Gain Insight into Your Shortened URLs</p> */}
        <p className="bg-lavender text-pink-600 font-bold rounded-full py-1 px-3 inline-flex items-center justify-center text-sm bg-pink-100">Sales & marketing</p>
        <p className="text-3xl font-bold mt-8">Powerful tools that work</p>
        <p className="text-base mt-4 text-slate-600">
          Our product lets your target your users to better understand their behavior and
          provide them a better overall experience through smart re-targeting.
          We provide you many powerful tools to reach them better.
        </p>
        <div className="mt-2">
          <ul>
            <li className="flex items-center gap-3 py-2">
              <Image
                src="https://rx.link/assets/img/feature-list-icon-4.svg"
                alt="icon"
                width={25}
                height={25}
              />
              <p className="text-base font-medium mb-0">Link Management</p>
            </li>

            <li className="flex items-center gap-3 py-2">
              <Image
                src="https://rx.link/assets/img/feature-list-icon-5.svg"
                alt="icon"
                width={25}
                height={25}
              />
              <p className="text-base font-medium mb-0">Privacy Control</p>
            </li>

            <li className="flex items-center gap-3 py-2">
              <Image
                src="https://rx.link/assets/img/feature-list-icon-6.svg"
                alt="icon"
                width={25}
                height={25}
              />
              <p className="text-base font-medium mb-0">Powerful Dashboard</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}