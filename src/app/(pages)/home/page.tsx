import React from 'react';
import Intro from '@/components/Intro';
import Facts from '@/components/Facts';
import Service from '@/components/Service';
import Feature from '@/components/Feature';
import What from '@/components/What';
import Quote from '@/components/Quote';
import Logos from '@/components/Logos';
import Testimonial from '@/components/Testimonial';
import Say from '@/components/Say';
import Blog from '@/components/Blog';
import Map from '@/components/Map';
import Info from '@/components/Info';

const home = () => {
  return (
    <div>
      <Intro />
      <Facts />
      <Service />
      <Feature />
      <What />
      <Quote />
      <Logos />
      <Testimonial />
      <Say />
      <Blog />
      <Map />
      <Info />
    </div>
  );
};

export default home;
