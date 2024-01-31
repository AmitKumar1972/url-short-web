import Image from "next/image";

export default function ImageInput() {
  return (
    <div className='flex md:flex-row flex-col-reverse justify-center items-center'>
      <div>
        <Image
          src='/illustration.png'
          alt='Image'
          width={500}
          height={500}
        />
      </div>
      <div className='ml-12 md:py-20 py-8'>
        <p className='text-2xl font-bold justify-evenly'>Shrink your link, Expand your reach</p>
        <p className='mt-4 font-sans text-lg font-medium'>Create New Link</p>
        <p className='font-sans font-normal text-base text-gray-500'>Create, shorten and manage your links</p>
        <div className='flex items-center mt-2 relative border rounded-2xl shadow-lg'>
          <input
            type='text'
            id='linkInput'
            className='flex-1 pr-28 pl-4 py-5 text-lg outline-none rounded-2xl'
            placeholder='https://example.com'
          />
          <button className='absolute right-3 py-3 px-6 rounded-2xl cursor-pointer bg-blue-500 text-white font-medium'>
            Shorten
          </button>
        </div>

        <p className="text-xs mt-2 text-gray-400">* By Clicking Shorten you are agreeing to our <span className="underline">Terms of Service</span> and <span className="underline">Privacy</span></p>
      </div>
    </ div>
  )
}
