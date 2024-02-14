import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

import { Button } from '../ui/button';
import Link from 'next/link';

export const ScrollDownButton = () => {
  return (
    <div className="flex items-center justify-center h-5 mt-5">
      <Link href="#sobre">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-[#144659] p-2 w-7 h-7 animate-bounce mt-0 mb-0 m-auto"
        >
          <FaArrowDown size={10} />
        </Button>
      </Link>
    </div>
  );
};
