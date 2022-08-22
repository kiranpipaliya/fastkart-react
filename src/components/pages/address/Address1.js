import React from 'react';
import { Link } from 'react-feather';
import { Truck, Crosshair, Send, MapPin } from 'react-feather';
import SearchBox from '../../general/SearchBox';
const Address1 = () => {
  return (
    <>
      {/* <!-- Main Start --> */}
      <main className='main-wrap address1-page'>
        {/* <!-- Map Start --> */}

        <div className='map-wrap'>
          <div className='top-address'>
            <Truck />
            <p>Delivery on 7th Aug, Slot: 7am to 9am</p>
          </div>
          <div className='map-section' id='map'></div>
          <span className='navgator'>
            <Crosshair />
          </span>
        </div>
        {/* <!-- Map End --> */}

        {/* <!-- Location Section Start --> */}
        <section className='location-section'>
          <SearchBox />

          <div className='current-box'>
            <div className='media'>
              <span>
                <Send />
              </span>
              <div className='media-body'>
                <h2 className='font-md title-color'>Use current location</h2>
              </div>
            </div>

            <div className='location'>
              <div className='location-box'>
                <h3 className='title-color font-sm'>
                  <MapPin />
                  Noah Hamilton
                </h3>
                <p className='content-color font-sm'>8857 Morris Rd. ,Charlottesville, VA 22901</p>
              </div>

              <div className='location-box'>
                <h3 className='title-color font-sm'>
                  <MapPin />
                  Noah Hamilton
                </h3>
                <p className='content-color font-sm'>8857 Morris Rd. ,Charlottesville, VA 22901</p>
              </div>
            </div>
          </div>
          <Link to={`${process.env.PUBLIC_URL}/payment`} className='btn-solid'>
            Confirm location & proceed
          </Link>
        </section>
        {/* <!-- Location Section End --> */}
      </main>
      {/* <!-- Main End --> */}
    </>
  );
};
export default Address1;
