import Image from "next/image";

export default function ThreeBox() {
  return (
    <div className='flex md:flex-row flex-col gap-20 justify-center mt-10 mb-10'>
      {/* 1st box */}
      <div className='flex flex-row items-center'>
        <div className='bg-blue-400 px-5 h-full flex items-center'>
          <Image
            src="/Url-shortener-logo.svg"
            alt="Link analytics"
            width="36"
            height="36"
            loading="lazy" />
        </div>
        <div className='bg-slate-200 flex items-center font-medium px-5 h-full text-sm'>
          <p>Url Shortener</p>
        </div>
      </div>

      {/* second box */}
      <div className='flex flex-row items-center'>
        <div className='bg-blue-400 px-5 h-full flex items-center'>
          <Image
            src="/Analytics logo.svg"
            alt="Link analytics"
            width="36"
            height="36"
            loading="lazy" />
        </div>
        <div className='bg-slate-200 flex items-center font-medium px-5 h-full text-sm'>
          <p className='w-24'>Detailed Analytics</p>
        </div>
      </div>

      {/* Third Box */}
      <div className='flex flex-row items-center'>
        <div className='bg-blue-400 px-5 h-full flex items-center'>
          <Image
            src="/Analytics logo.svg"
            alt="Link analytics"
            width="36"
            height="36"
            loading="lazy" />
        </div>
        <div className='bg-slate-200 flex items-center font-medium px-5 h-full text-sm'>
          <p className='w-24'>Link Management Platform</p>
        </div>
      </div>
    </div>
  )
}