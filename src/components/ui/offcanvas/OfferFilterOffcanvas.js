import React, { useState, useContext } from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import OfferContext from '../../../context/offerContext/offerContext';
export default function OfferFilterOffcanvas(props) {
  const filterArray = ['All', 50, 30, 25, 15, 10];
  const offerCtx = useContext(OfferContext);
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState('');
  const hideOffcanvas = () => {
    props.onHide(props.onShow);
  };

  const activeHandler = (i, filter) => {
    setActive(i);
    setFilter(filter);
  };
  const applyFilter = () => {
    props.onHide(props.onShow);
    offerCtx.filterOffer(filter);
  };

  return (
    <Offcanvas isOpen={props.onShow} toggle={hideOffcanvas} direction='bottom' className='shop-fillter offer-filter offcanvas'>
      <OffcanvasHeader className='offcanvas-header font-md'>Filter</OffcanvasHeader>
      <OffcanvasBody className='small'>
        <div className='pack-size mt-0'>
          <div className='row g-3'>
            {filterArray.map((item, i) => (
              <div className='col-6' key={i}>
                <div onClick={() => activeHandler(i, item)} className={`size ${i === active && 'active'}`}>
                  {item == 'All' && <span className='font-xs'>{item}</span>}
                  {item !== 'All' && <span className='font-xs'>More Than {item}%</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </OffcanvasBody>
      <div className='offcanvas-footer'>
        <div className='btn-box'>
          <button className='btn-outline font-md' data-bs-dismiss='offcanvas' aria-label='Close'>
            Close
          </button>
          <button onClick={applyFilter} className='btn-solid font-md' data-bs-dismiss='offcanvas' aria-label='Close'>
            Apply
          </button>
        </div>
      </div>
    </Offcanvas>
  );
}
