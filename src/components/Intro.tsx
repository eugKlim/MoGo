'use client';
import React from 'react';
import useBgCheckFormats from '@/utils/useBgCheckFormats';
import Link from 'next/link';

const Intro = () => {
  useBgCheckFormats();

  const introItemsData = [
    {
      number: '01',
      title: 'Intro',
      process: 60,
    },
    {
      number: '02',
      title: 'About',
      process: 40,
    },
    {
      number: '03',
      title: 'Work',
      process: 10,
    },
    {
      number: '04',
      title: 'Contacts',
      process: 90,
    },
  ];

  return (
    <section
      className={`bg-options min-w-full mt-[-150px]   text-white  sm:bg-cover item-bg`}
      data-bg="image/intro/intro-bg.jpg"
    >
      <div className="dark:bg-dark pb-9 pt-[300px]">
        <div>
          <h2 className="font-KaushanScripts text-3xl text-center text-white mb-8 md:text-6xl sm:text-4xl">
            Creative Template
          </h2>
          <h3 className="font-MontserratBold text-3xl text-center uppercase text-white md:text-7xl sm:text-5xl title-line-intro">
            Welcome <span className="block">to MoGo</span>
          </h3>

          <Link href="/about" passHref>
            <button
              className="block mx-auto bg-transparent border-white border-2 uppercase py-2 px-6 mt-[100px] lg:hover:bg-white lg:hover:text-stone-900 font-MontserratBold"
              title="Learn more"
              aria-label="Learn more"
            >
              Learn more
            </button>
          </Link>
        </div>

        <div className="flex flex-wrap md:flex-nowrap md:space-x-8 mt-32">
          {introItemsData.map((data, index) => {
            return (
              <div className="mt-5 md:w-1/4 w-1/2 px-4" key={index}>
                <div className="border-t-4 border-white">
                  <span
                    className="bg-red-500 block   h-1 -mt-1"
                    style={{ maxWidth: `${data.process}%` }}
                  ></span>
                </div>
                <div className="mt-3">
                  <span className="font-MontserratBold mr-2 text-2xl">
                    {data.number}
                  </span>
                  <span className="font-MontserratRegular text-lg">
                    {data.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Intro;
