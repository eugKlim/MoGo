import React, { useState, useEffect } from 'react';

type ToggleThemeBtnProps = {
  lightIco: string;
  darkIco: string;
};

const ToggleThemeBtn: React.FC<ToggleThemeBtnProps> = ({
  lightIco,
  darkIco,
}) => {
  const [isToggled, setToggled] = useState<boolean>(() => {
    const savedState = localStorage.getItem('dark');
    return savedState ? JSON.parse(savedState) : false;
  });

  useEffect(() => {
    if (isToggled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isToggled]);

  const handleToggle = () => {
    setToggled((prevState) => {
      const newState = !prevState;
      localStorage.setItem('dark', JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <div
      className={`relative w-[47] h-[27] rounded-full cursor-pointer transition-colors select-none  bg-gray-300`}
      onClick={handleToggle}
      aria-label="Toggle theme button"
    >
      <div
        className={`absolute top-1 w-5 h-5 flex items-center justify-center rounded-full transition-transform ${
          isToggled
            ? 'translate-x-6 bg-slate-900 left-0'
            : 'left-1 translate-x-0 bg-white'
        }`}
      >
        <img
          src={isToggled ? lightIco : darkIco}
          alt="Icon mode"
          className="w-3.5 h-3.5"
        />
      </div>
    </div>
  );
};

export default ToggleThemeBtn;
