'use client';
import React from 'react';
import Title from './Title';
import Image from 'next/image';

const Say = () => {
  const sayData = [
    {
      image: '/image/say/1.webp',
      name: 'Nick Karvounis',
      work: 'Graphic Design',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
    },
    {
      image: '/image/say/2.webp',
      name: 'Jaelynn Castillo',
      work: 'Graphic Design',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
    },
    {
      image: '/image/say/3.webp',
      name: 'Mike Petrucci',
      work: 'Graphic Design',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
    },
    {
      image: '/image/say/4.webp',
      name: 'Matthew Dix',
      work: 'Graphic Design',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
    },
  ];
  return (
    <section className="bg-sayBg overflow-hidden min-h-[812px]">
      <div className="dark:bg-dark pb-8">
        <div className="container">
          <Title uptitle="Happy Clients" title="What people say" />
          <div className="grid sm:grid-cols-1 xl:grid-cols-2 xl:space-x-8 pt-5">
            {sayData.map((data, index) => {
              return (
                <div
                  className="flex max-w-[520px] mb-20 sm:mx-auto sm:flex-wrap sm:text-center md:flex-nowrap md:text-left "
                  key={index}
                >
                  <div className="md:mr-[32px] sm:mx-auto sm:mb-4">
                    <Image
                      src={data.image}
                      alt="image"
                      width={110}
                      height={110}
                      className="min-w-[110px] h-[110px]"
                      sizes="auto"
                    />
                  </div>
                  <div>
                    <p className="font-MontserratBold text-lg dark:text-white">
                      {data.name}
                    </p>
                    <p className="font-RobotoLightItalic pt-1 dark:text-green-400">
                      {data.work}
                    </p>
                    <div className="w-20 h-1 bg-red-400 my-5 sm:mx-auto md:mx-0" />
                    <p className="font-RobotoRegular text-gray-500 dark:text-white">
                      {data.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Say;
