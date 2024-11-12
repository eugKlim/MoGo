'use client';
import React from 'react';
import Image from 'next/image';
import Title from './Title';
import useHoverMobile from '@/hooks/useHoverMobile';
import HoverMobileToggle from './HoverMobileToggle';

import FacebookIco from './social-icons/facebook-ico';
import TwitterIco from './social-icons/twitter-ico';
import PinterestIco from './social-icons/pinterest-ico';
import InstagramIco from './social-icons/instagram-ico';

const Team = () => {
  const teamData = [
    {
      image: '/image/team/1.jpg',
      name: 'MATTHEW DIX',
      work: 'Graphic Design',
    },
    {
      image: '/image/team/2.jpg',
      name: 'CHRISTOPHER CAMPBELL',
      work: 'Branding/UX design',
    },
    {
      image: '/image/team/3.jpg',
      name: 'MICHAEL FERTIG',
      work: 'Developer',
    },
  ];

  const Links = [
    {
      href: '#',
      name: 'Facebook',
      component: <FacebookIco className="w-6 h-6" />,
    },
    {
      href: '#',
      name: 'Twitter',
      component: <TwitterIco className="w-6 h-6" />,
    },
    {
      href: '#',
      name: 'Pinterest',
      component: <PinterestIco className="w-6 h-6" />,
    },
    {
      href: '#',
      name: 'Instagram',
      component: <InstagramIco className="w-6 h-6" />,
    },
  ];

  const { openOrHiddenHover, hoverMobileState } = useHoverMobile({
    dataItems: teamData,
  });

  return (
    <section className="pb-8 lg:pb-24 dark:bg-slate-800 dark:text-white">
      <div className="container">
        <Title
          uptitle="Who we are"
          title="Meet our team"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />

        <div className="flex justify-between space-x-4 sm:justify-center sm:flex-wrap">
          {teamData.map((data, index) => {
            return (
              <div className="mb-10" key={index}>
                <div className="relative group bg-cyan-400 max-w-[340px]">
                  <div className="transition-translate duration-300 ease-in-out lg:group-hover:-translate-x-4 lg:group-hover:-translate-y-4">
                    <Image
                      alt="Image"
                      src={data.image}
                      width={340}
                      height={420}
                      className="inline-block"
                      sizes="auto"
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
                    } absolute top-0 w-full h-full flex items-center flex-col justify-center text-center opacity-0 invisible hover-gradient transition-translate duration-300 ease-in-out lg:group-hover:visible lg:group-hover:opacity-90 lg:group-hover:-translate-y-4 lg:group-hover:-translate-x-4`}
                  >
                    <div className="flex mb-[-1px]">
                      {Links.map((link, index) => (
                        <a
                          href={link.href}
                          className="inline-block p-2 bg-yellow-500 text-red-500 hover:bg-red-500 border-r-2 border-red-400 hover:text-white"
                          aria-label={link.name}
                          title={link.name}
                          key={index}
                        >
                          {link.component}
                        </a>
                      ))}

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
                </div>
                <div className="text-center pt-4 ">
                  <p className="text-slate-800 font-MontserratRegular uppercase dark:text-white">
                    {data.name}
                  </p>
                  <p className="text-gray-500 font-RobotoLightItalic dark:text-white">
                    {data.work}
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

export default Team;
