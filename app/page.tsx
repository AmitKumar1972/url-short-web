import NavBar from './(components)/navbar'
import ImageInput from './(components)/ImageInput'
import ThreeBox from './(components)/ThreeBox'
import LowContent from './(components)/LowContent'
import LowContent2 from './(components)/LowContent2'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col bg-slate-100 h-full'>
        <div>
          <NavBar />
        </div>
        <div className='flex flex-row justify-evenly'>
          <ImageInput />
        </div>
      </div>
      <div className="flex flex-col items-center mt-20">
        <p className="text-2xl font-bold text-center">Free URL Shortener and Branded URLs</p>
        <p className="text-2xl font-bold text-center">with Great Analytics Tools</p>
        <p className='mt-5 font-sans text-base font-normal'>Dashly let you understand more about click through of your links. we give you a huge marketing tool with advanced URL tracking</p>
        <p className='font-sans text-base font-normal'>system for free without any hidden commitments. Why? Because we believe that the best thing should be free.</p>
      </div>
      <ThreeBox />
      <LowContent />
      <LowContent2 />
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

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2023 Dashly. All rights reserved.</p>
          <p className="text-sm mt-2">Made with ❤️ by Code Dash</p>
        </div>
      </footer>
    </div>
  )
}
