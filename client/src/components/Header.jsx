import React from 'react';

const Header = ({ username, setShowCustomizationModal }) => {
  return (
    <header>
      <div id='hero'>
        <p>Study With Me</p>
      </div>
      <div id='user'>
        <p>{username}</p>
        <img
          id='userphoto'
          src='https://cdn.donmai.us/original/11/3d/113df6ccf7a23bfc9bf47e850a229159.jpg'
          alt='PFA'
        />
        <span
          className='material-symbols-rounded'
          onClick={() => {
            setShowCustomizationModal(true);
          }}
        >
          settings
        </span>
      </div>
    </header>
  );
};

export default Header;
