import Link from 'next/link';
import React from 'react';
import {
  HomeIcon,
  GanttChartSquare,
  CircleUserRound,
} from 'lucide-react';

const NavBar = () => {
  return (
    <header className="flex fixed left-5 top-1/2 -translate-y-1/2 z-50 bg-[#142834] rounded-full">
      <nav className="h-full flex flex-col justify-center p-2 gap-4">
        <Link
          href="/"
          className="shadow-md shadow-gray-800 rounded-full text-gray-900 hover:bg-white bg-[#ffffff8d] p-2 text-sm font-medium"
        >
          <HomeIcon size={14} />
        </Link>

        <Link
          href="/"
          className="shadow-md shadow-gray-800 rounded-full text-gray-900 hover:bg-white bg-[#ffffff8d] p-2 text-sm font-medium"
        >
          <GanttChartSquare size={14} />
        </Link>

        <Link
          href="/contact"
          className="shadow-md shadow-gray-800 rounded-full text-gray-900 hover:bg-white bg-[#ffffff8d] p-2 text-sm font-medium"
        >
          <CircleUserRound size={14} />
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
