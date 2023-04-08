import Image from 'next/image';

// images and icons
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, GlobeAltIcon, UserCircleIcon, UserIcon } from '@heroicons/react/24/solid';

import Logo from '../public/airbnb-logo.png';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 md:grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left - logo */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={Logo}
          alt="logo"
          className="object-contain object-[left]"
          fill
          priority
        />
      </div>
      {/* middle - search  */}
      <div className="hidden md:flex items-center gap-x-2 md:border-2 rounded-full p-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-1 outline-none text-sm text-gray-600 placeholder:text-gray-400 pl-2 hidden md:inline-flex"
        />
        <MagnifyingGlassIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex" />
      </div>
      {/* right  */}
      <div className='flex gap-x-4 items-center justify-end text-gray-500'>
        <p className='hover:bg-gray-200 hover:text-black p-2 rounded-full hidden md:inline cursor-pointer duration-150'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className='flex items-center gap-x-2 border-2 rounded-full p-2'>
          <Bars3Icon className='h-6 cursor-pointer' />
          <UserCircleIcon className='h-6 cursor-pointer'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
