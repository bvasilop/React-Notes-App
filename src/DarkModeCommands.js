import React from 'react';

// import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';

const DarkModeCommands = () => {
  const darkMode = useDarkMode(false);

  return (
    <span>
      Use slider above or button to switch to{' '}
      <button onClick={darkMode.toggle} type="button">
        {darkMode.value ? 'Light Mode' : 'Dark Mode'}
      </button>
      .
    </span>
  );
};

export default DarkModeCommands;
