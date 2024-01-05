// import Image from "next/image";

// export default function Dashboard() {
//   return (
//     <div className="flex flex-col lg:flex-row lg:gap-12">
//       <div className="flex flex-col border-r-2 lg:min-h-screen w-auto">
//         <div className="m-9">
//           <p className="text-2xl font-bold">Url Shortener</p>
//           <div className="flex gap-1">
//             <p className="text-sm">Powered by</p>
//             <Image
//               src="/logo2.svg"
//               width={20}
//               height={20}
//               alt="Logo"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col">
//           <div className="flex justify-center">
//             <button className="flex items-center gap-2 w-full h-full hover:bg-blue-100 py-2 px-9">
//               <Image
//                 src="/link.png"
//                 width={15}
//                 height={15}
//                 alt="Logo"
//               />
//               <span className="hidden lg:inline-block">My Links</span>
//             </button>
//           </div>
//           <div className="flex justify-center">
//             <button className="flex items-center gap-2 w-full h-full py-2 px-9 hover:bg-blue-100">
//               <Image
//                 src="/settings.png"
//                 width={15}
//                 height={15}
//                 alt="Logo"
//               />
//               <span className="hidden lg:inline-block">Settings</span>
//             </button>
//           </div>
//         </div>
//         <div>
//           User Profile
//         </div>
//       </div>
//       <div className="flex-grow"></div>
//     </div>
//   );
// }


import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-12">
      <div className="flex flex-col border-r-2 lg:min-h-screen w-auto">
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
        <div className="flex flex-col items-center mt-4">
          <Image
            src="/profile-image.jpg" // Replace with the actual path to the user's profile image
            alt="User Profile"
            className="w-16 h-16 rounded-full mb-2"
          />
          <p className="text-sm font-semibold">John Doe</p>
          <p className="text-xs text-gray-500">john.doe@example.com</p>
        </div>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
}

