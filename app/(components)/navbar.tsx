import Image from 'next/image'
import Link from 'next/link';

export default function NavBar() {

  return (
    <div className='flex justify-between p-3 text-center items-center w-full'>

      {/* Logo and Name */}
      <div className='gap-3 text-center items-center flex flex-row'>
        <Image
          src="/logo5.svg"
          width={35}
          height={35}
          alt="Logo"
        />
        <p className='font-sans text-xl'>Dashly</p>
      </div>

      {/* Auth Buttons */}
      <div className='flex items-center flex-row'>
        <div className='px-1'>
          <Link href='/signin' className='px-6 py-2 rounded-full border-blue-500 text-blue-500 font-medium hover:bg-blue-500 hover:text-white'>
            Login
          </Link>
        </div>
        <div className='px-1'>
          <Link href='/signup' className='px-6 py-2 rounded-full bg-blue-400 text-white font-medium hover:bg-blue-500'>
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}
