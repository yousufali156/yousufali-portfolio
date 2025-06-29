// src/Components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="swap swap-rotate cursor-pointer">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
      {/* Sun Icon */}
      <svg className="swap-off w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="..." />
      </svg>
      {/* Moon Icon */}
      <svg className="swap-on w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="..." />
      </svg>
    </label>
  );
};

export default ThemeToggle;
