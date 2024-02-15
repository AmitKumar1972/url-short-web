import Image from "next/image";
import NavBar from "../(components)/navbar";
import SignupBox from "../(components)/SignupBox";

export default function signup() {
  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
      <div className='w-full max-w-5xl'>
        <NavBar />
      </div>
      <div className="w-full flex flex-col md:flex-row items-center py-14 px-4 justify-between">
        <Image
          src="/login.svg"
          width={400}
          height={400}
          alt="Login image"
        />
        <div className="w-full">
          <SignupBox />
        </div>
      </div>
    </div>
  )
}
