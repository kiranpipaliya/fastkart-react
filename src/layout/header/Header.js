import React from 'react';
import { Iconly } from 'react-iconly';
const Header = () => {
  return (
    <>
      {/* <!-- Header Start --> */}
      <header className='header'>
        <div className='logo-wrap'>
          <Iconly name='Category' className='nav-bar' />
          <a href='index.html'>
            <img className='logo' src='assets/images/logo/Fastkart.png' alt='logo' />
          </a>
        </div>
        <div className='avatar-wrap'>
          <span className='font-sm'>
            <Iconly name='Location' className='font-xl' />
            Los Angeles
          </span>
          <a href='account.html'>
            <img className='avatar' src='assets/images/avatar/avatar.jpg' alt='avatar' />
          </a>
        </div>
      </header>
      {/* <!-- Header End -->; */}
    </>
  );
};

export default Header;
