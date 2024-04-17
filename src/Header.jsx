import React from 'react';

const Header = ({ onPlusClick }) => {
  return (
    <header className="header">
      <h1 className="header-title">NotesApp</h1>
      <button className="header-plus-button" onClick={onPlusClick}>
        +
      </button>
    </header>
  );
};

export default Header;
