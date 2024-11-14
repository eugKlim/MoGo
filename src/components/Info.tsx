import React from 'react';
import Image from 'next/image';

import FacebookIco from './social-icons/facebook-ico';
import TwitterIco from './social-icons/twitter-ico';
import PinterestIco from './social-icons/pinterest-ico';
import InstagramIco from './social-icons/instagram-ico';
import YoutubeIco from './social-icons/youtube-ico';
import DribbleIco from './social-icons/dribble-ico';

const Info = () => {
  const infoBlogsData = [
    {
      image: './image/info/blogs/1.webp',
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING',
      date: 'Jan 29, 2016',
      link: '#',
    },
    {
      image: './image/info/blogs/2.webp',
      title: 'CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR',
      date: 'Jan 12, 2016',
      link: '#',
    },
    {
      image: './image/info/blogs/3.webp',
      title: 'SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE',
      date: 'Jan 1, 2016',
      link: '#',
    },
  ];

  const infoSocialData = [
    {
      linkName: 'Facebook',
      icon: <FacebookIco className="w-4 h-4" />,
    },
    {
      linkName: 'Twitter',
      icon: <TwitterIco className="w-4 h-4" />,
    },
    {
      linkName: 'Pinterest',
      icon: <PinterestIco className="w-4 h-4" />,
    },
    {
      linkName: 'Instagram',
      icon: <InstagramIco className="w-4 h-4" />,
    },
    {
      linkName: 'Youtube',
      icon: <YoutubeIco className="w-4 h-4" />,
    },
    {
      linkName: 'Dribble',
      icon: <DribbleIco className="w-4 h-4" />,
    },
  ];

  const instagramData = [
    {
      image: './image/info/instagram/1.webp',
    },
    {
      image: './image/info/instagram/2.webp',
    },
    {
      image: './image/info/instagram/3.webp',
    },
    {
      image: './image/info/instagram/4.webp',
    },
    {
      image: './image/info/instagram/5.webp',
    },
    {
      image: './image/info/instagram/6.webp',
    },
    {
      image: './image/info/instagram/7.webp',
    },
    {
      image: './image/info/instagram/8.webp',
    },
    {
      image: './image/info/instagram/9.webp',
    },
  ];

  return (
    <div className="pt-16 pb-20  dark:bg-slate-800 dark:text-white min-h-[430px]">
      <div className="container flex justify-center flex-wrap lg:space-x-12 sm:flex-wrap-reverse">
        {/* 1 */}
        <section className="xl:w-1/3 mb-10 md:max-w-2/4">
          <h2 className="font-MontserratBold text-4xl text-gray-500 dark:text-white">
            MoGo
          </h2>
          <p className="my-8 text-gray-500 font-RobotoRegular dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div>
            <p className="font-MontserratBold text-lg">
              15k
              <span className="font-MontserratRegular text-base text-gray-400">
                followers
              </span>
            </p>

            <div className="w-full h-[1px] bg-slate-300 my-2 " />

            <div className="flex items-center">
              <span className="font-RobotoLightItalic text-gray-400 pr-4">
                Follow Us:
              </span>

              <div className="space-x-1">
                {infoSocialData.map((data, index) => {
                  return (
                    <a
                      href="#"
                      className="inline-block p-2 bg-yellow-500 text-red-500 hover:bg-red-500 hover:text-white rounded-3xl"
                      title={data.linkName}
                      key={index}
                      aria-label={data.linkName}
                    >
                      {data.icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <form className="mt-10 flex sm:flex-wrap md:flex-nowrap">
            <input
              type="text"
              className="border p-2 md:rounded-l-xl sm:w-full md:w-1/2 text-black"
              placeholder="Your Email..."
            />
            <button className="uppercase font-MontserratBold px-4 bg-emerald-400 border border-emerald-400 py-2 md:-ml-1 sm:mt-3 md:mt-0 text-white hover:bg-emerald-800 sm:w-full md:w-auto">
              Subscribe
            </button>
          </form>
        </section>
        {/* 2 */}
        <section className="xl:w-1/3 mb-10">
          <h3 className="uppercase mb-10">blogs</h3>

          <div>
            {infoBlogsData.map((data, index) => {
              return (
                <a
                  href="#"
                  className="flex items-center mb-5 hover:underline"
                  key={index}
                  aria-label={data.title}
                >
                  <div>
                    <Image
                      src={data.image}
                      alt="Image"
                      width={125}
                      height={53}
                    />
                  </div>
                  <div className="ml-3">
                    <h4 className="uppercase text-gray-500 mb-2 dark:text-white">
                      {data.title}
                    </h4>
                    <p className="font-RobotoLightItalic text-gray-400">
                      {data.date}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
        {/* 3 */}
        <section className="mb-10">
          <h3 className="uppercase mb-10">instagram</h3>

          <div className="grid grid-cols-[repeat(3,88px)] gap-1">
            {instagramData.map((data, index) => {
              return (
                <Image
                  src={data.image}
                  alt="Image"
                  width={88}
                  height={88}
                  key={index}
                />
              );
            })}
          </div>
          <a
            href="#"
            className="underline font-RobotoLightItalic text-slate-500 mt-3 inline-block dark:text-white"
            aria-label="View more photos"
          >
            View more photos
          </a>
        </section>
        {/* / */}
      </div>
    </div>
  );
};

export default Info;
