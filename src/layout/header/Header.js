import React, { useCallback } from 'react';
import { Grid, MapPin } from 'react-feather';
const Header = (props) => {
  const sidebarVisible = props.sideBar;
  const passShowSideBar = useCallback(() => {
    props.onSideBar(sidebarVisible);
  }, [sidebarVisible]);

  return (
    <>
      {/* <!-- Header Start --> */}
      <header className='header'>
        <div className='logo-wrap'>
          <Grid onClick={passShowSideBar} />
          <a href='index.html'>
            <img className='logo' src='assets/images/logo/Fastkart.png' alt='logo' />
          </a>
        </div>
        <div className='avatar-wrap'>
          <span className='font-sm'>
            <MapPin />
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
