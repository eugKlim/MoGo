'use client';
import React, { useState } from 'react';
import AccordionItem from './Accordion-Item';

interface IAccordionItemData {
  title: string;
  image: string;
  content: string;
  imageSize: number[];
}

interface IAccordionProps {
  items: IAccordionItemData[];
}

const Accordion: React.FC<IAccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div>
      {items.map((item, index: number) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          image={item.image}
          imageSize={item.imageSize}
          isActive={activeIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
