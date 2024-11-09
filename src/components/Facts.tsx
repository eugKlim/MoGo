import React from 'react';

const Facts = () => {
  const factsData = [
    {
      number: '42',
      text: 'WEB DESIGN PROJECTS',
    },
    {
      number: '123',
      text: 'HAPPY CLIENT',
    },
    {
      number: '15',
      text: 'AWARD WINNER',
    },
    {
      number: '99',
      text: 'CUP OF COFFEE',
    },
    {
      number: '24',
      text: 'MEMBERS',
    },
  ];
  return (
    <section className="flex flex-wrap justify-center bg-cyan-600 text-white p-4 dark:bg-cyan-900">
      {factsData.map((data, index) => {
        return (
          <div
            className="text-center font-MontserratBold border-2 border-cyan-200 py-10 sm:w-6/12 xl:w-1/5 "
            key={index}
          >
            <p className="font-MontserratRegular text-7xl">{data.number}</p>
            <p className="uppercase text-sm">{data.text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Facts;
