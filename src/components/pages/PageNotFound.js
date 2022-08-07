import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../shell/Main';
const PageNotFound = () => {
  return (
    <>
      <Main className='error-404 '>
        {/* <!-- Banner Start --> */}
        <div className='banner-box'>
          <img src='assets/images/banner/404.png' className='img-fluid' alt='404' />
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Error Section Start --> */}
        <section className='error mb-large'>
          <h2 className='font-lg'>PAGE NOT FOUND</h2>
          <p className='content-color font-md'>We are sorry but the page you are looking for doesn't exist or has been removed. Please check back later or search again.</p>
          <Link to='/' className='btn-solid'>
            Back to Home
          </Link>
        </section>
      </Main>
      {/* <!-- Main End --> */}
    </>
  );
};
export default PageNotFound;
