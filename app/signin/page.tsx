import Image from "next/image";
import NavBar from "../(components)/navbar";
import SignBox from "../(components)/SigninBox";

export default function signin() {
  return (
    <div className="flex flex-col">
      <NavBar/>
      <div className="w-full h-auto flex flex-row justify-evenly bg-blue-50" >
        <Image 
        src="/login.svg"
        width={550}
        height={550}
        alt="Login image"
        />
        <div className="py-9 h-screen w-1/4">
        <SignBox />
        </div>
      </div>
    </div>
  )

}