import { useState } from 'react';

interface IUseHoverMobile {
  dataItems: any[];
}

const useHoverMobile = ({ dataItems }: IUseHoverMobile) => {
  const [hoverMobileState, setHoverMobileState] = useState<boolean[]>(
    dataItems.map(() => false)
  );

  const openOrHiddenHover = (index: number) => {
    setHoverMobileState((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return { openOrHiddenHover, hoverMobileState };
};

export default useHoverMobile;
