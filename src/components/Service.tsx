import React from 'react';
import Title from './Title';
import Image from 'next/image';

const Service = () => {
  const serviceData = [
    {
      icon: './image/service/1.png',
      title: 'Photography',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: './image/service/2.png',
      title: 'Web Design',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: './image/service/3.png',
      title: 'Creativity',
      text: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: './image/service/4.png',
      title: 'Css/Html',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: './image/service/5.png',
      title: 'Photography',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: './image/service/6.png',
      title: 'digital',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
  ];
  return (
    <section className="pb-[40px] dark:bg-slate-800 dark:text-white">
      <div className="container">
        <Title uptitle="We work with" title="Amazing Services" />

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 lg:space-x-5">
          {serviceData.map((data, index) => {
            return (
              <div className="flex max-w-[346px] my-8 mx-auto" key={index}>
                <div className="pt-1 pr-3">
                  <Image
                    src={data.icon}
                    alt="image"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-base">
                  <h3 className="font-MontserratBold text-slate-900 mb-2 uppercase dark:text-white">
                    {data.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    {data.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
