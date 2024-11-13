import React, { useState, useEffect } from 'react';

const ToggleThemeBtn = () => {
  const [isToggled, setToggled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem('dark');
      setToggled(savedState ? JSON.parse(savedState) : false);
    }
  }, []);

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
      if (typeof window !== 'undefined') {
        localStorage.setItem('dark', JSON.stringify(newState));
      }
      return newState;
    });
  };

  return (
    <div
      className="relative w-[47px] h-[27px] rounded-full cursor-pointer transition-colors select-none bg-gray-300"
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
        {isToggled ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.9 4.9 1.4 1.4" />
            <path d="m17.7 17.7 1.4 1.4" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.3 17.7-1.4 1.4" />
            <path d="m19.1 4.9-1.4 1.4" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#000"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default ToggleThemeBtn;
