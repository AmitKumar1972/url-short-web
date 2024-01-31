import Image from "next/image";

export default function ThreeBox() {
  return (
    <div className='flex flex-col md:flex-row lg:gap-20 gap-7 justify-center mt-4 mb-4'>
      {/* 1st box */}
      <div className='flex flex-col md:flex-row items-center'>
        <div className='px-5 py-3 md:py-0 md:px-0 flex items-center justify-center'>
          <Image
            src="/Url-shortener-logo.svg"
            alt="Link analytics"
            width="36"
            height="36"
            loading="lazy" />
        </div>
        <div className='flex items-center font-medium px-5 py-3 md:py-0 md:px-5 md:w-48 text-sm text-center md:text-left'>
          <p>Url Shortener</p>
        </div>
      </div>

      {/* second box */}
      <div className='flex flex-col md:flex-row items-center'>
        <div className='px-5 py-3 md:py-0 md:px-0 flex items-center justify-center'>
          <Image
            src="/Analytics logo.svg"
            alt="Link analytics"
            width="36"
            height="36"
            loading="lazy" />
        </div>
        <div className='flex items-center font-medium px-5 py-3 md:py-0 md:px-5 md:w-48 text-sm text-center md:text-left'>
          <p>Detailed Analytics</p>
        </div>
      </div>

      {/* Third Box */}
      <div className='flex flex-col md:flex-row items-center'>
        <div className='px-5 py-3 md:py-0 md:px-0  flex items-center justify-center'>
          <Image
            src="/Analytics logo.svg"
            alt="Link analytics"
            width="36"
            height="36"
            loading="lazy" />
        </div>
        <div className='flex items-center font-medium px-5 py-3 md:py-0 md:px-5 md:w-48 text-sm text-center md:text-left'>
          <p>Link Management Platform</p>
        </div>
      </div>
    </div>
  )
}
