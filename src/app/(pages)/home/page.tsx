import React from 'react';
import Intro from '@/components/Intro';
import Facts from '@/components/Facts';
import Service from '@/components/Service';
import Feature from '@/components/Feature';
import What from '@/components/What';
import Quote from '@/components/Quote';
import Logos from '@/components/Logos';
import Testimonial from '@/components/Testimonial';

const intro = () => {
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
    </div>
  );
};

export default intro;
