import React, { useContext, useState } from 'react';
import AddressBox from './AddressBox';
import AddressContext from '../../../context/addressContext/addressContext';
import AddAddressOffCanvas from '../../ui/offcanvas/AddAddressOffCanvas';
const DeliveryAddress = () => {
  const [addressModalShow, setAddressModalShow] = useState(false);
  const addressCtx = useContext(AddressContext);
  const addressModalHandler = () => {
    setAddressModalShow(!addressModalShow);
  };
  const addressModalHideHandler = (hide) => {
    setAddressModalShow(!addressModalShow);
  };
  return (
    <main className='main-wrap address2-page mb-xxl'>
      {/* <!-- Address Section Start --> */}
      <section className='pt-0'>
        <button onClick={addressModalHandler} className='d-block btn-outline-grey'>
          + Add New Address
        </button>

        <div className='address-wrap'>
          {addressCtx.address.map((item, i) => (
            <AddressBox data={item} key={i} />
          ))}
        </div>
      </section>
      {/* <!-- Address Section End --> */}
      <AddAddressOffCanvas onHide={addressModalHideHandler} onOpen={addressModalShow} />
    </main>
  );
};
export default DeliveryAddress;
