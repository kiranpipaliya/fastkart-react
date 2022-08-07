import React from 'react';
import { Link } from 'react-router-dom';
import { LANGUAGE_LIST } from './languageModalList';
import { Offcanvas } from 'reactstrap';
import { OffcanvasBody } from 'reactstrap';
const LanguageModal = (props) => {
  const handleClose = () => {
    props.modalHide(props.modalShow);
  };
  return (
    <>
      {/* <!-- Action Language Start --> */}
      <Offcanvas isOpen={props.modalShow} direction='bottom' toggle={handleClose} className={`action action-language offcanvas offcanvas-bottom `}>
        <OffcanvasBody className='offcanvas-body small'>
          <h2 className='m-b-title1 font-md'>Select Language</h2>
          <ul className='list'>
            {LANGUAGE_LIST.map((item, i) => (
              <li key={i}>
                <Link to='#' data-bs-dismiss='offcanvas' aria-label='Close'>
                  <img src={item.image} alt={item.alt} />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </OffcanvasBody>
      </Offcanvas>
      {/* <!-- Action Language End --> */}
    </>
  );
};
export default LanguageModal;
