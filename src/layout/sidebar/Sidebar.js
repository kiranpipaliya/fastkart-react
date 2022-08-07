import React, { useCallback, useState } from 'react';

import { MENUITEMS } from './menu';
import { Link } from 'react-router-dom';
import { ActiveNavLinkUrl } from '../../helper/activeNavUr';
import { ChevronRight } from 'react-feather';
import LanguageModal from '../../components/ui/LangaugeModal';

const Sidebar = (props) => {
  const sidebarShow = props.sideBarShow;
  const [modalTrue, setModalTrue] = useState(false);
  const hideSidebarHandler = useCallback(
    (event) => {
      event.preventDefault();
      props.sideBarHide(sidebarShow);
    },
    [sidebarShow],
  );
  const modalHandler = () => {
    setModalTrue(!modalTrue);
    console.log(modalTrue);
  };
  const modalHideHandler = () => {
    setModalTrue(!modalTrue);
  };
  return (
    <React.Fragment>
      {/* Language Modal */}
      <LanguageModal modalHide={modalHideHandler} modalShow={modalTrue} />
      {/* <!-- Sidebar Start --> */}
      <a href='#' onClick={hideSidebarHandler} className={`overlay-sidebar ${sidebarShow ? 'show' : ''}`}></a>
      <aside className={`header-sidebar  ${sidebarShow ? 'show' : ''}`}>
        <div className='wrap'>
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
          <nav className='navigation'>
            <ul>
              {MENUITEMS.map((item, i) => (
                <li className={ActiveNavLinkUrl(item.path, 'active')} key={i}>
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
                      <Link to='#' className='arrow'>
                        <ChevronRight />
                      </Link>
                    </>
                  )}
                  {item.type === 'settingBtn' && (
                    <>
                      <Link to='#' className='nav-link title-color font-sm'>
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
          </nav>
          {/* <!-- Navigation End --> */}
        </div>

        <div className='contact-us'>
          <span className='font-xs title-color'>Contact Support</span>
          <p className='content-color font-xs'>If you have any problem,queries or questions feel free to reach out</p>
          <Link to='#' className='btn-solid'>
            Contact Us
          </Link>
        </div>
      </aside>
      {/* <!-- Sidebar End --> */}
    </React.Fragment>
  );
};

export default Sidebar;
