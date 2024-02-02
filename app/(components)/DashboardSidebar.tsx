"use client"

import Image from "next/image";

export default function DashboardSidebar() {
  return (
    <div className="flex flex-col border-r-2 w-full min-h-screen">
      {/* For upper part */}
      <div className="flex flex-col gap-1 py-4 lg:mx-6">
        <p className="text-xl font-bold hidden lg:block">Dashly</p>
        <div className="flex gap-1 sm:justify-center lg:justify-start">
          <p className="text-sm text-slate-600 hidden lg:block">powered By</p>
          <Image
            src="/logo5.svg"
            width={20}
            height={20}
            alt="Logo"
            className="lg:w-6 lg:h-6 sm:w-8 sm:h-8"
          />
        </div>
      </div>

      {/* For links and settings button */}
      <div className="flex flex-col w-full mt-10 sm:items-center lg:items-start">
        <div className="flex gap-5 hover:bg-blue-100 py-3 hover:cursor-pointer lg:px-6 w-full sm:justify-center lg:justify-start">
          <Image
            src="/final-link.png"
            width={25}
            height={20}
            alt="Link Icon"
          />
          <span className="hidden lg:block font-normal">My Links</span>
        </div>

        <div className="flex gap-5 hover:bg-blue-100 py-3 hover:cursor-pointer lg:px-6 w-full sm:justify-center lg:justify-start">
          <Image
            src="/settings.png"
            width={25}
            height={20}
            alt="Link Icon"
          />
          <span className="hidden lg:block font-normal">Settings</span>
        </div>
      </div>

      <div className="flex-grow"></div>

      {/* For user profile */}
      <div className="flex gap-2 items-center lg:px-6 py-3 cursor-pointer sm:justify-center lg:justify-start">
        <Image
          src="/profile-image.jpg"
          alt="User Profile"
          width={44}
          height={44}
          className="rounded-full object-cover border-2"
        />
        <div className=" lg:flex-col hidden lg:flex">
          <p className="text-sm font-semibold">Amit Bishnoi</p>
          <p className="text-xs text-gray-500">amitk@gmail.com</p>
        </div>
      </div>
    </div>
  )
}
