import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ACCOUNT_OPTION } from './accountOption';
import { ChevronRight } from 'react-feather';
import LanguageModal from '../../ui/LangaugeModal';
const Account = () => {
  const [modalTrue, setModalTrue] = useState(false);

  const modalHandler = () => {
    setModalTrue(!modalTrue);
  };
  const modalHideHandler = () => {
    setModalTrue(!modalTrue);
  };
  return (
    <>
      <main class='main-wrap account-page mb-xxl'>
        <div class='account-wrap section-b-t'> 
          <div className='user-panel'>
            <div className='media'>
              <a href='account.html'>
                <img src='assets/images/avatar/avatar.jpg' alt='avatar' />
              </a>
              <div className='media-body'>
                <a href='account.html' className='title-color font-sm'>
                  Andrea Joanne
                  <span className='content-color font-xs'>andreajoanne@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Navigation Start --> */}
          <ul className='navigation'>
            {ACCOUNT_OPTION.map((item, i) => (
              <li key={i}>
                {item.type === 'link' && (
                  <>
                    <Link to={item.path} className='nav-link title-color font-sm'>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                    <Link to={item.path} className='arrow'>
                      <ChevronRight />
                    </Link>
                  </>
                )}
                {item.type === 'modal' && (
                  <>
                    <Link onClick={modalHandler} to='#' className='nav-link title-color font-sm'>
                      <img src={`assets/icons/png/${item.icon}`} alt='flag' />
                      <span>{item.title}</span>
                    </Link>
                    <Link onClick={(event) => event.preventDefault()} to='#' className='arrow'>
                      <ChevronRight />
                    </Link>
                  </>
                )}
                {item.type === 'settingBtn' && (
                  <>
                    <Link onClick={(event) => event.preventDefault()} to='#' className='nav-link title-color font-sm'>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                    <div className='dark-switch'>
                      <input id='rtlButton' type='checkbox' />
                      <span className='before-none'></span>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* <!-- Navigation End --> */}
        </div>
      </main>
      <LanguageModal modalHide={modalHideHandler} modalShow={modalTrue} />
    </>
  );
};
export default Account;
