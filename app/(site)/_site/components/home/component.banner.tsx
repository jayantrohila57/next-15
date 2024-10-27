'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { X } from 'lucide-react';

const Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="pt-4 transition-all duration-300">
      {/* banner - start */}
      <div className="mx-auto  ">
        <div className="relative flex flex-wrap rounded-lg bg-primary text-white px-4 py-2 shadow-lg sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-2">
          <div className="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm  sm:order-none sm:mb-0 sm:w-auto md:text-base">
            This is a section of some simple filler text, also known as placeholder text.
          </div>

          <Button
            variant={'link'}
            size={'sm'}
            className="text-sm py-0 inline text-white font-bold  ">
            Check Now
          </Button>

          {/* close button - start */}
          <div className="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-2 sm:w-auto xl:mr-3">
            <Button
              variant={'ghost'}
              size={'icon'}
              onClick={() => setIsVisible(false)}>
              <X />
            </Button>
          </div>
          {/* close button - end */}
        </div>
      </div>
      {/* banner - end */}
    </div>
  );
};

export default Banner;
