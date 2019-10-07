import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import Content from './Content';
import NoteApp from './NoteApp';

import './styles.scss';

function App() {
  return (
    <div>
      <div className="navbar">
        <DarkModeToggle />
      </div>
      <Content />
      <NoteApp />
    </div>
  );
}

export default App;
