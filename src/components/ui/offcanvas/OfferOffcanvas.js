import React from 'react';
import { Offcanvas, OffcanvasBody } from 'reactstrap';
const OfferOffcanvas = (props) => {
  const hideOffcanvas = (e) => {
    const code = e.target.closest('.code').querySelector('strong').innerText;
    navigator.clipboard.writeText(code);
    props.onHide(props.onShow);
  };
  return (
    <>
      <Offcanvas isOpen={props.onShow} toggle={hideOffcanvas} direction='bottom' className='offcanvas offer-offcanvas offcanvas-bottom'>
        <div className='offcanvas-header w-full'>
          <h5 className='offcanvas-title font-lg d-block' id='offer-1Label'>
            Flat {props.data.disc}% off
          </h5>
          <span className='font-sm'>{props.data.subTitle}</span>
          <div className='code' onClick={hideOffcanvas}>
            <span className='font-sm'>
              Code: <strong> {props.data.code}</strong>
            </span>
            <button className='btn-outline' data-bs-dismiss='offcanvas' aria-label='Close'>
              Copy Code
            </button>
          </div>
        </div>
        <OffcanvasBody className='offcanvas-body small'>
          <h6 className='font-md content-color'>Terms & conditions</h6>
          <ol>
            <li className='font-sm content-color'>
              Information on how to participate forms part of these Terms & Conditions. By participating, claimants agree to be bound by these Terms & Conditions. Claimants must comply with these
              Terms & Conditions for a coupon to be valid.
            </li>
            <li className='font-sm content-color'>
              Each claimant is entitled to one coupon per accommodation establishment. Coupons are not transferable and are not redeemable for cash and cannot be combined with any other coupons or any
              other offer or discounts or promotions offered by Quovai.
            </li>
          </ol>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};
export default OfferOffcanvas;
