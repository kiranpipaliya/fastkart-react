import React, { useCallback } from 'react';
import { Grid, MapPin } from 'react-feather';
import { Link } from 'react-router-dom';
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
          <Link to=''>
            <img className='logo' src='assets/images/logo/Fastkart.png' alt='logo' />
          </Link>
        </div>
        <div className='avatar-wrap'>
          <span className='font-sm'>
            <MapPin />
            Los Angeles
          </span>
          <Link to='account'>
            <img className='avatar' src='assets/images/avatar/avatar.jpg' alt='avatar' />
          </Link>
        </div>
      </header>
      {/* <!-- Header End -->; */}
    </>
  );
};

export default Header;
