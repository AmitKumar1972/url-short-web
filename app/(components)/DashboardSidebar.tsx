import Image from "next/image";

export default function DashboardSidebar() {
  return (
    <div className="flex flex-col border-r-2 lg:min-h-screen w-auto">

      {/* Heading Data */}
      <div className="m-9">
        <p className="text-2xl font-bold">Url Shortener</p>
        <div className="flex gap-1">
          <p className="text-sm">Powered by</p>
          <Image
            src="/logo2.svg"
            width={20}
            height={20}
            alt="Logo"
          />
        </div>
      </div>

      {/* Links and Setting Buttons */}
      <div className="flex flex-col">
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
          <button className="flex items-center gap-2 w-full h-full py-2 px-9 hover:bg-blue-100">
            <Image
              src="/settings.png"
              width={15}
              height={15}
              alt="Settings Icon"
            />
            <span className="hidden lg:inline-block">Settings</span>
          </button>
        </div>
      </div>

      <div className="flex-grow"></div>

      {/* User Data at the Bottom */}
      <div className="flex flex-row items-center mt-4 gap-2 ml-5">
        <Image
          src="/profile-image.jpg" // Replace with the actual path to the user's profile image
          alt="User Profile"
          width={40}
          height={40}
          className="rounded-full mb-2 object-cover border-spacing-4"
        />
        <div className="flex flex-col">
          <p className="text-sm font-semibold">Amit Bishnoi</p>
          <p className="text-xs text-gray-500">amitk@gmail.com</p>
        </div>
      </div>
    </div>
  )

}