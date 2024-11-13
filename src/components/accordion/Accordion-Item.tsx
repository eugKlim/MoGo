import React from 'react';
import Image from 'next/image';

type SN = string | number;

interface IAccordion {
  title: SN;
  content: SN;
  image: string;
  imageSize: number[];
  imageFormat?: SN;
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const AccordionItem: React.FC<IAccordion> = ({
  title,
  content,
  image,
  imageSize,
  isActive,
  onClick,
}) => (
  <div className="my-4 max-w-[600px]  border border-gray-300">
    <div
      className="uppercase flex items-center justify-between span border-b-[1px] p-4 cursor-pointer"
      onClick={onClick}
      aria-label="open accordion"
    >
      <span className="flex items-center">
        <Image
          alt="arrow"
          src={image}
          width={imageSize[0]}
          height={imageSize[1]}
          className="mr-4"
        />
        {title}
      </span>
      <span
        className={`transition duration-500 transform ${
          isActive ? 'rotate-180' : ''
        }`}
      >
        <Image
          alt="arrow"
          src="./image/global/arrow-down.png"
          width={22}
          height={12}
        />
      </span>
    </div>
    {isActive && (
      <div className="p-5 text-gray-500 font-RobotoLightItalic overflow-y-auto h-[146px] dark:text-white">
        {content}
      </div>
    )}
  </div>
);

export default AccordionItem;
