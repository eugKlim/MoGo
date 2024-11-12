import React from 'react';
import { IHoverMobileToggle } from '@/types/hoverMobile.types';
import Image from 'next/image';
const HoverMobileToggle: React.FC<IHoverMobileToggle> = ({
  index,
  hoverMobileState,
  openOrHiddenHover,
  isOpen,
}) => {
  return (
    <button
      className={`
      ${hoverMobileState[index] ? 'show-hover top-1  font-bold text-2xl' : ''} 
       
      ${isOpen ? 'bottom-3  ' : ''} 
         absolute rounded-full bg-teal-500 text-red-500 px-2 py-1 right-1 w-10 h-10 lg:hidden`}
      onClick={() => openOrHiddenHover(index)}
      aria-label={isOpen ? 'open more info' : 'close more info'}
    >
      {isOpen ? (
        <Image
          src="/image/global/hand.svg"
          alt="hand show more"
          width={24}
          height={25}
          sizes="auto"
        />
      ) : (
        '✕'
      )}
    </button>
  );
};

export default HoverMobileToggle;
