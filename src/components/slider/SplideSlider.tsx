"use client";
import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './SplideSlider.scss';
import { Options } from '@splidejs/splide';

interface SplideSliderProps {
  options: Options;  
  slides: React.ReactNode[]; 
}

const SplideSlider: React.FC<SplideSliderProps> = ({ options, slides }) => {
  const splideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const splide = new Splide(splideRef.current!, options);
    splide.mount();

    return () => {
      splide.destroy();
    };
  }, [options]);

  return (
    <div className="splide" ref={splideRef}>
      <div className="splide__track">
        <ul className="splide__list">
          {slides.map((slide, index) => (
            <li className="splide__slide" key={index}>
              {slide}
            </li>
          ))}
        </ul>
      </div>
      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev text-white hover:text-gray-700" aria-label="prev slide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
        <button className="splide__arrow splide__arrow--next text-white hover:text-gray-700" aria-label="next slide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SplideSlider;
