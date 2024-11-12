'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ToggleThemeBtn from './ToggleThemeBtn';
import { useState, useEffect } from 'react';
import useScreenWidth from '@/hooks/useScreenWidth';

const Header = () => {
  const pathname = usePathname();
  const headerDataLinks = [
    {
      nameLink: 'Home',
      link: 'home',
    },
    {
      nameLink: 'about',
      link: 'about',
    },
    {
      nameLink: 'service',
      link: 'service',
    },
    {
      nameLink: 'work',
      link: 'work',
    },
    {
      nameLink: 'blog',
      link: 'blog',
    },
    {
      nameLink: 'contact',
      link: 'contact',
    },
  ];

  const isMobile = useScreenWidth();

  // burger
  const [isActiveBurger, setActiveBurger] = useState(false);
  const clickBurger = () => {
    setActiveBurger((prevState) => !prevState);
  };
  useEffect(() => {
    if (isActiveBurger) {
      document.documentElement.style.overflow = 'hidden';
    }
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [isActiveBurger]);
  // burger /

  return (
    <>
      <header
        className={`container z-[990] flex justify-between items-center py-2 text-white max-w-[2500px] bg-orange-700 bg-opacity-80`}
      >
        <div
          className={`${
            isActiveBurger ? 'active' : ''
          } burger-overlay bg-dark sm:fixed lg:hidden w-full min-h-screen min-w-screen z-[901]`}
          aria-label="close popup"
          onClick={clickBurger}
        />

        <Link href="/home" passHref>
          <h1
            className="font-MontserratBold text-white z-20 cursor-pointer sm:text-lg md:text-3xl"
            aria-label="Go to home page"
            title="Go to Home"
          >
            MoGo
          </h1>
        </Link>
        <nav className="flex items-center space-x-6 relative">
          <ul
            className={`sm:nav-block ${
              isActiveBurger ? 'active' : ''
            }  uppercase text-sm flex items-center sm:flex-col sm:w-full sm:h-screen sm:bg-teal-500 sm:dark:bg-teal-700 lg:dark:bg-transparent sm:fixed sm:top-0 sm:left-0 sm:max-w-60 sm:overflow-y-auto sm:z-[996] sm:pt-12 sm:space-y-10 lg:bg-transparent  lg:static lg:h-auto lg:space-x-6 lg:space-y-0 lg:max-w-full lg:overflow-y-visible lg:pt-1 lg:nav-hidden lg:flex-row`}
          >
            {headerDataLinks.map((data, index) => {
              const isActive = pathname === `/${data.link}`;
              return (
                <Link
                  href={`/${data.link}`}
                  className={`hover:text-yellow-500 relative link ${
                    isActive
                      ? 'text-yellow-500 before:content-[""] before:absolute before:w-full before:h-[2] before:bg-yellow-500 before:-bottom-1 before:left-0'
                      : ''
                  }`}
                  aria-label={data.nameLink}
                  key={index}
                  onClick={isMobile <= 800 ? clickBurger : undefined}
                >
                  {data.nameLink}
                </Link>
              );
            })}
          </ul>
          <div className="items-center sm:space-x-4 flex sm:pr-16 lg:space-x-6 lg:pr-0">
            <ToggleThemeBtn
              lightIco={'/image/global/light-icon.svg'}
              darkIco={'/image/global/dark-icon.svg'}
            />

            {/* basket */}
            <button className="inline-block lg:hover:text-yellow-500 cursor-pointer">
              <svg
                aria-label="basket button"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </button>
            {/* search */}
            <button
              className="inline-block lg:hover:text-yellow-500 cursor-pointer"
              title="search"
            >
              <svg
                aria-label="search button"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            {/* / */}
          </div>

          <button
            aria-label="menu"
            className={`burger ${
              isActiveBurger ? 'active-burger' : ''
            } absolute right-0 z-[701] sm:block lg:hidden`}
            onClick={clickBurger}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
