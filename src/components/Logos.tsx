import React from 'react';
import Image from 'next/image';

const Logos = () => {
  return (
    <section className="min-h-[205px] md:bg-gray-300 md:py-10 sm:hidden md:block">
      <div className="container">
        <Image
          src="./image/logos/logos.webp"
          alt="logos"
          width={1000}
          height={127}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default Logos;
