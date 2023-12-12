import Image from "next/image";
import NavBar from "../(components)/navbar";
import SignupBox from "../(components)/SignupBox";
import Footer from "../(components)/Footer";

export default function signup() {
  return (
    <div className="flex flex-col">
      <NavBar/>
      <div className="w-full h-auto flex flex-row justify-evenly bg-blue-50">
        <Image 
        src="/login.svg"
        width={600}
        height={600}
        alt="Login image"
        />
        <div className="py-9 h-auto w-1/3">
        <SignupBox />
        </div>
      </div>
    </div>
  )
}