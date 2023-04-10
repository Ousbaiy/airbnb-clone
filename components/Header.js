import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

// library
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import {
  Bars3Icon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

// images
import Logo from '../public/airbnb-logo.png';

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [nuOfGuests, setNuOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const resetInput = () => {
    setSearchInput('');
  };

  const handleSearch = () => {
    if (searchInput) {
      router.push({
        pathname: '/search',
        query: {
          location: searchInput,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          nuOfGuests,
        },
      });
    }
    setSearchInput('');
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 md:grid-cols-3 bg-white shadow-md p-5 md:px-16">
      {/* left - logo */}
      <div
        className="relative hidden md:flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push('/')}
      >
        <Image
          src={Logo}
          alt="logo"
          className="object-contain object-[left]"
          fill
          priority
        />
      </div>
      {/* middle - search  */}
      <div className="flex items-center gap-x-2 border-2 rounded-full p-2 shadow-sm col-span-2 md:col-span-1">
        <input
          type="text"
          placeholder={placeholder || 'Start your search'}
          className="flex-1 outline-none text-sm text-gray-600 placeholder:text-gray-400 pl-2 flex"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <MagnifyingGlassIcon
          className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex"
          onClick={handleSearch}
        />
      </div>
      {/* right  */}
      <div className="flex gap-x-4 items-center justify-end text-gray-500">
        <p className="hover:bg-gray-100 p-2 rounded-full hidden md:inline cursor-pointer duration-150">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer hidden md:inline-flex" />
        <div className="flex items-center gap-x-2 border-2 rounded-full p-2 hover:shadow-md transition duration-150 cursor-pointer ">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto pt-5 ">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
            className="w-[270px] md:w-auto"
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-1 font-semibold">Number of Guests</h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={nuOfGuests}
              onChange={(e) => setNuOfGuests(e.target.value)}
              min={1}
            />
          </div>
          <div className="flex">
            <button
              className="flex-1  
              text-gray-500"
              onClick={resetInput}
            >
              cancel
            </button>
            <button className="flex-1 text-red-400" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
