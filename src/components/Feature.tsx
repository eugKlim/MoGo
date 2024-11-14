'use client';
import React from 'react';
import Title from './Title';
import Image from 'next/image';

const Feature = () => {
  return (
    <section className="bg-featureBg min-w-full mx-auto md:min-h-[847px]">
      <div className="dark:bg-dark">
        <div className="container">
          <Title uptitle="For all devices" title="Unique design" />
          <div className="mt-24 text-center">
            <Image
              src="./image/feature/device.webp"
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
