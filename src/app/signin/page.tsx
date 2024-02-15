import Image from "next/image";
import NavBar from "../(components)/navbar";
import SignBox from "../(components)/SigninBox";

export default function signin() {
  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
      <div className='w-full max-w-5xl'>
        <NavBar />
      </div>

      <div className="w-full flex flex-col md:flex-row items-center py-20 px-4 justify-between">
        <Image
          src="/login.svg"
          width={400}
          height={400}
          alt="Login image"
        />
        <div className="w-full">
          <SignBox />
        </div>
      </div>
    </div>
  )

}