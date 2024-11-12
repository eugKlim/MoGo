'use client';
import React from 'react';
import Image from 'next/image';
import Title from './Title';
import useHoverMobile from '@/hooks/useHoverMobile';
import HoverMobileToggle from './HoverMobileToggle';

const Work = () => {
  const workData = [
    {
      image: '/image/work/1.jpg',
      imageSize: [318, 258], //width, height
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
    {
      image: '/image/work/2.jpg',
      imageSize: [318, 258],
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
    {
      image: '/image/work/3.jpg',
      imageSize: [318, 516],
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group row-span-2',
    },
    {
      image: '/image/work/4.jpg',
      imageSize: [318, 258],
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
    {
      image: '/image/work/5.jpg',
      imageSize: [318, 258],
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
    {
      image: '/image/work/6.jpg',
      imageSize: [318, 258],
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
    {
      image: '/image/work/7.jpg',
      imageSize: [318, 258],
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
  ];
  const { openOrHiddenHover, hoverMobileState } = useHoverMobile({
    dataItems: workData,
  });

  return (
    <section className="sm:bg-gray-100 md:bg-white dark:bg-gray-700 dark:text-white min-h-[516px]">
      <div className="container">
        <Title
          uptitle="What we do"
          title="Story about us"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1900px] mx-auto text-white">
        {workData.map((data, index) => {
          return (
            <div className={data.class} key={index}>
              <Image
                alt="Image"
                src={data.image}
                width={data.imageSize[0]}
                height={data.imageSize[1]}
                sizes="auto"
                className="inline-block"
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
              <div
                className={`${
                  hoverMobileState[index] ? 'show-hover' : ''
                } absolute transition-all duration-500 linear top-0 left-0 w-full h-full opacity-0 invisible flex justify-center align-center hover-gradient flex-col text-center xl:group-hover:opacity-90 xl:group-hover:visible cursor-default`}
              >
                <div>
                  <Image
                    alt="Image"
                    src="/image/work/ico.png"
                    width={30}
                    height={30}
                    className="mx-auto"
                  />
                </div>
                <p className="uppercase font-MontserratBold my-2">
                  {data.hoverTitle}
                </p>
                <p className="font-RobotoLightItalic">{data.hoverText}</p>

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
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
