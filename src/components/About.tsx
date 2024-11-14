'use client';
import React from 'react';
import Title from './Title';
import useHoverMobile from '@/hooks/useHoverMobile';
import HoverMobileToggle from './HoverMobileToggle';
import Image from 'next/image';

const About = () => {
  const aboutCardData = [
    {
      image: './image/about/1.webp',
      text: 'super team',
    },
    {
      image: './image/about/2.webp',
      text: 'super team',
    },
    {
      image: './image/about/3.webp',
      text: 'super team',
    },
  ];

  const { openOrHiddenHover, hoverMobileState } = useHoverMobile({
    dataItems: aboutCardData,
  });
  return (
    <section className="pb-24 dark:bg-slate-800 dark:text-white min-h-64">
      <div className="container">
        <Title
          uptitle="What we do"
          title="Story about us"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />

        <div className="flex flex-wrap justify-center lg:space-x-2 text-white">
          {aboutCardData.map((data, index) => (
            <div
              className="max-w-[380px] max-h-[250px] relative bg-cyan-400 group mt-2"
              key={index}
            >
              <div className="relative transition duration-300 linear lg:group-hover:-translate-x-4 lg:group-hover:-translate-y-4 ">
                <Image
                  src={data.image}
                  alt="image"
                  width={380}
                  height={250}
                  priority
                />

                {!hoverMobileState[index] ? (
                  <HoverMobileToggle
                    index={index}
                    hoverMobileState={hoverMobileState}
                    openOrHiddenHover={openOrHiddenHover}
                    isOpen={true}
                  />
                ) : (
                  <></>
                )}
              </div>

              <div
                className={`${
                  hoverMobileState[index] ? 'show-hover' : ''
                } absolute top-0 w-full h-full flex items-center flex-col justify-center text-center opacity-0 invisible hover-gradient transition-all duration-300 ease-in-out lg:group-hover:visible lg:group-hover:opacity-90 lg:group-hover:-translate-x-4 lg:group-hover:-translate-y-4`}
              >
                {hoverMobileState[index] ? (
                  <HoverMobileToggle
                    index={index}
                    hoverMobileState={hoverMobileState}
                    openOrHiddenHover={openOrHiddenHover}
                    isOpen={false}
                  />
                ) : (
                  <></>
                )}

                <Image
                  alt="Image"
                  src="./image/about/about-team.webp"
                  width={32}
                  height={23}
                />

                <p className="uppercase font-MontserratBold mt-1">
                  {data.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
