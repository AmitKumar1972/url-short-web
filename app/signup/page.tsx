import Image from "next/image";
import NavBar from "../(components)/navbar";
import SignupBox from "../(components)/SignupBox";

export default function signup() {
  return (
    <div className="flex flex-col items-center w-full mx-auto">
      <div className='w-full max-w-5xl'>
        <NavBar />
      </div>
      <div className="flex flex-col md:flex-row bg-blue-50 md:w-full md:items-center">
        <div className="w-full max-w-md xl:max-w-lg ">
          <Image
            src="/login.svg"
            width={550}
            height={550}
            alt="Login image"
          />
        </div>
        <div className="flex-1 mb-7 xl:max-w-lg max-w-md">
          <SignupBox />
        </div>
      </div>
    </div>
  )
}
