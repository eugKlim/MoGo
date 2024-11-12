import { useEffect, useState } from 'react';

const useScreenWidth = () => {
  const [isMobile, setIsMobile] = useState(0);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth);
    };

    updateIsMobile();

    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  return isMobile;
};

export default useScreenWidth;
