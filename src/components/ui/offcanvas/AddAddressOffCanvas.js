import React from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import AddressForm from '../../form/AddressForm';
const AddAddressOffCanvas = (props) => {
  const toggleFun = () => {
    props.onHide(props.onOpen);
  };

  return (
    <>
      <Offcanvas isOpen={props.onOpen} toggle={toggleFun} className='add-address' direction='bottom'>
        <div className='offcanvas-header'>
          <h5 className='title-color font-md fw-600'>Add Address</h5>
        </div>
        <OffcanvasBody className='offcanvas-body small'>
          <AddressForm toggleFun={toggleFun} />
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};
export default AddAddressOffCanvas;
