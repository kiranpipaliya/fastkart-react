import React from 'react';
import { MENUITEMS } from './menu';
import { Link } from 'react-router-dom';
import { ActiveNavLinkUrl } from '../../helper/activeNavUr';
// import { Iconly } from 'react-iconly';
import { ChevronRight } from 'react-feather';

const Sidebar = () => {
  return (
    <>
      {/* <!-- Sidebar Start --> */}
      <a href='#' className='overlay-sidebar '></a>
      <aside className='header-sidebar '>
        <div className='wrap'>
          <div className='user-panel'>
            <div className='media'>
              <a href='account.html'>
                {' '}
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
                        {/* <Iconly name={item.icon}></Iconly> */}
                        <span>{item.title}</span>
                      </Link>
                      <span>
                        <ChevronRight />
                      </span>
                    </>
                  )}
                  {item.type === 'modal' && (
                    <>
                      <Link to='#' className='nav-link title-color font-sm'>
                        <img src={`assets/icons/png/${item.icon}`} alt='flag' />
                        <span>{item.title}</span>
                      </Link>
                      <span>
                        <ChevronRight />
                      </span>
                    </>
                  )}
                  {item.type === 'settingBtn' && (
                    <>
                      <a href='#' className='nav-link title-color font-sm'>
                        {/* <Iconly name={item.icon}></Iconly> */}
                        <span>{item.title}</span>
                      </a>

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
          <a href='#' className='btn-solid'>
            {' '}
            Contact Us{' '}
          </a>
        </div>
      </aside>
      {/* <!-- Sidebar End --> */}
    </>
  );
};

export default Sidebar;
