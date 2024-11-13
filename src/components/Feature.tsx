'use client';
import React from 'react';
import Title from './Title';
import useBgCheckFormats from '@/utils/useBgCheckFormats';
import Image from 'next/image';

const Feature = () => {
  useBgCheckFormats();
  return (
    <section
      className="min-w-full mx-auto item-bg md:min-h-[847px]"
      data-bg="image/feature/feature-bg.jpg"
    >
      <div className="dark:bg-dark">
        <div className="container">
          <Title uptitle="For all devices" title="Unique design" />
          <div className="mt-24 text-center">
            <Image
              src="./image/feature/device.png"
              alt="Image"
              className="mx-auto"
              width={596}
              height={575}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
