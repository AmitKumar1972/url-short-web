import NavBar from './../components/navbar'
import ImageInput from './../components/ImageInput'
import ThreeBox from './../components/ThreeBox'
import LowContent from './../components/LowContent'
import LowContent2 from './../components/LowContent2'
import Footer from './../components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col items-center w-full mx-auto'>
      <div className='w-full flex items-center'>
        <div className='flex flex-col gap-7 items-center max-w-5xl mx-auto'>
          <NavBar />
          <ImageInput />
        </div>
      </div>

      <Image
        src='/waves.png'
        alt='Image'
        width={4000}
        height={500}
      />
      <div className="flex flex-col items-center justify-center p-10 max-w-[1000px]">
        <p className="text-2xl font-bold">Free URL Shortener and Branded URLs</p>
        <p className="text-2xl font-bold">with Great Analytics Tools</p>
        <p className='mt-5 font-sans text-base font-normal text-center'>Dashly let you understand more about click through of your links. we give you a huge marketing tool with advanced URL tracking system for free without any hidden commitments. Why? Because we believe that the best thing should be free.</p>
      </div>
      <ThreeBox />
      <LowContent />
      <LowContent2 />
      <div className="mb-10 w-full" style={{ backgroundImage: "url(https://rx.link/assets/img/call-to-action-bg.svg)" }}>
        <div className="container text-center p-10 mx-auto max-w-xl">
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
