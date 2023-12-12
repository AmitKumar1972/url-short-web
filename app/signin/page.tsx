import Image from "next/image";
import NavBar from "../(components)/navbar";
import SignBox from "../(components)/SigninBox";
import Footer from "../(components)/Footer";

export default function signin() {
  return (
    <div className="flex flex-col">
      <NavBar/>
      <div className="w-full h-auto flex flex-row justify-evenly bg-blue-50" >
        <Image 
        src="/login.svg"
        width={600}
        height={600}
        alt="Login image"
        />
        <div className="py-9 h-auto w-1/3">
        <SignBox />
        </div>
        
      </div>
      <div className="mb-10" style={{ backgroundImage: "url(https://rx.link/assets/img/call-to-action-bg.svg)" }}>
        <div className="container text-center p-10">
          <h2 className="text-dark text-3xl font-bold py-3 my-0 pt-0 pb-3">It&apos;s easy to get Started</h2>
          <p className="font-medium text-base pb-2">And it&apos;s free. Two things everyone loves.</p>
          <div className="mt-5">
            <a href="#" className="text-white text-sm font-bold bg-blue-500 rounded-full py-2 px-6 no-underline inline-block">
              Get Started
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )

}