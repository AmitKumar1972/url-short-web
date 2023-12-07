import Image from 'next/image'

export default function NavBar() {
  return (
    <div className='flex flex-row px-4 text-center items-center justify-between bg-slate-50'>

      {/* Logo and Name */}
      <div className='gap-3 text-center items-center flex flex-row'>
        <Image
          src="/logo2.svg"
          width={35}
          height={35}
          alt="Logo"
        />
        <p className='font-sans text-xl'>Dashly</p>
      </div>

      {/* Auth Buttons */}
      <div className='flex py-2 items-center flex-row'>
        <div className='px-2'>
          <button className='px-6 py-2 rounded-full border-2 border-blue-500 text-blue-500 font-medium hover:bg-blue-500 hover:text-white'>Sign in</button>
        </div>
        <div className='px-2'>
          <button className='px-6 py-2 rounded-full bg-blue-400 text-white font-medium hover:bg-blue-500'>Sign up</button>
        </div>
      </div>
    </div>
  )
}
