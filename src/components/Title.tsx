import React from 'react';

interface ITitle {
  uptitle: string;
  title: string;
  text?: string;
}

const Title: React.FC<ITitle> = ({ uptitle, title, text }) => {
  return (
    <div className="pt-24 mb-20">
      <h2 className="text-slate-900 font-KaushanScripts text-3xl text-center mb-2 dark:text-white">
        {uptitle}
      </h2>
      <h3 className="text-slate-900 font-MontserratBold text-3xl text-center uppercase title-line dark:text-white">
        {title}
      </h3>
      <p className="line dark:text-teal-500">{text}</p>
    </div>
  );
};

export default Title;
