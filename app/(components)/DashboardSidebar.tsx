"use client"

import Image from "next/image";

export default function DashboardSidebar() {
  return (
    <div className="flex flex-col border-r-2 w-full min-h-screen">
      {/* For upper part */}
      <div className="flex flex-col gap-1 py-4 lg:mx-6">
        <p className="text-xl font-bold hidden lg:block">Dashly</p>
        <div className="flex gap-1 md:justify-center lg:justify-start">
          <p className="text-sm text-slate-600 hidden lg:block">powered By</p>
          <Image
            src="/logo5.svg"
            width={20}
            height={20}
            alt="Logo"
            className="lg:w-6 lg:h-6 md:w-8 md:h-8"
          />
        </div>
      </div>

      {/* For links and settings button */}
      <div className="flex flex-col w-full mt-10 md:items-center lg:items-start">
        <div className="flex gap-5 hover:bg-blue-100 py-3 hover:cursor-pointer lg:px-6">
          <Image
            src="/final-link.png"
            width={25}
            height={20}
            alt="Link Icon"
          />
          <span className="hidden lg:block font-normal">My Links</span>
        </div>

        <div className="flex gap-5 hover:bg-blue-100 py-3 hover:cursor-pointer lg:px-6">
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
      <div className="flex gap-2 items-center lg:px-6 py-3 cursor-pointer md:justify-center lg:justify-start">
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



{/* <div className="flex flex-col border-r-2 min-h-screen">

{/* Heading Data */}
{/* <div className="lg:m-9">
  <p className="lg:text-2xl font-bold hidden lg:block">Url Shortener</p>
  <div className="flex gap-1">
    <p className="text-sm hidden lg:block">Powered by</p>
    <Image
      src="/logo2.svg"
      width={20}
      height={20}
      alt="Logo"
    />
  </div>
</div>

{/* Links and Setting Buttons */}
{/* <div className="flex flex-col">
  <div className="flex justify-center">
    <button className="flex items-center gap-2 w-full h-full hover:bg-blue-100 py-2 px-9">
      <Image
        src="/link.png"
        width={15}
        height={15}
        alt="Link Icon"
      />
      <span className="hidden lg:inline-block">My Links</span>
    </button>
  </div>
  <div className="flex justify-center">
    <button className="flex items-center gap-2 w-auto h-auto py-2 px-9 hover:bg-blue-100">
      <Image
        src="/settings.png"
        width={40}
        height={40}
        alt="Settings Icon"
        className="rounded-full mb-2 object-cover border-spacing-4"
      />
      <span className="hidden lg:inline-block">Settings</span>
    </button>
  </div>
</div>

<div className="flex-grow"></div> */}

{/* User Data at the Bottom */ }
{/* <div className="flex flex-row items-center mt-4 gap-2 ml-5">
  <Image
    src="/profile-image.jpg" // Replace with the actual path to the user's profile image
    alt="User Profile"
    width={40}
    height={40}
    className="rounded-full mb-2 object-cover border-spacing-4"
  />
  <div className="hidden lg:flex lg:flex-col">
    <p className="text-sm font-semibold">Amit Bishnoi</p>
    <p className="text-xs text-gray-500">amitk@gmail.com</p>
  </div>
</div>
</div> */}