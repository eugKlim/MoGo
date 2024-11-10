import React from 'react';
import Intro from '@/components/Intro';
import Facts from '@/components/Facts';
import Service from '@/components/Service';
import Feature from '@/components/Feature';
import What from '@/components/What';

const intro = () => {
  return (
    <div>
      <Intro />
      <Facts />
      <Service />
      <Feature />
      <What />
    </div>
  );
};

export default intro;
