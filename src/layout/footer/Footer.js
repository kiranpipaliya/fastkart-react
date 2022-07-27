import React from 'react';
import { ActiveNavLinkUrl } from '../../helper/activeNavUr';
import { FOOTER_MENU } from './footerMenu';
import { Link } from 'react-router-dom';
import { Iconly } from 'react-iconly';
import { loadAnimation } from 'lottie-web';
import { defineLordIconElement } from 'lord-icon-element';
const Footer = () => {
  defineLordIconElement(loadAnimation);

  return (
    <>
      {/* <!-- Footer Start --> */}
      <footer className='footer-wrap'>
        <ul className='footer'>
          {FOOTER_MENU.map((item, i) => (
            <li className={`footer-item ${ActiveNavLinkUrl(item.path, 'active')}`} key={i}>
              <Link to={item.path} className='footer-link'>
                {!item.loardIcon && <Iconly name={item.icon} />}
                {item.loardIcon && <lord-icon className='icons' src={item.icon} trigger='loop' stroke='70' colors='primary:#ffffff,secondary:#ffffff'></lord-icon>}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </footer>
      {/* <!-- Footer End --> */}
    </>
  );
};
export default Footer;
