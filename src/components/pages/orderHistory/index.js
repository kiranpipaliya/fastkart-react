import React, { useState, useEffect } from 'react';
import SearchBox from '../../general/SearchBox';
import { ORDER_TAB } from './orderTabsList';
import { Nav, NavItem, TabContent, NavLink, TabPane } from 'reactstrap';
import { ORDER_LIST } from './orderList';
import OrderBox from './OrderBox';
import useShowClass from '../../../hook/showAnimation';

const OrderHistory = () => {
  const [showNavContent, setShowNavContent] = useState(0);
  const [show, setShow] = useShowClass('show');

  const navActiveHandler = (i) => {
    setShowNavContent(i);
    setShow('');
  };

  return (
    <main className='main-wrap mb-xxl order-history'>
      <Nav className='nav nav-tab nav-pills custom-scroll-hidden'>
        {ORDER_TAB.map((item, i) => (
          <NavItem key={`navItem${i}`}>
            <NavLink onClick={() => navActiveHandler(i)} className={`${showNavContent === i ? 'active' : ''}`}>
              {item.title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <SearchBox />
      <section>
        {/* <!-- Catagories Content Start --> */}
        <TabContent className=' ratio2_1' activeTab={`${showNavContent}`}>
          {ORDER_TAB.map((_, i) => (
            <TabPane key={`tabPan${i}`} className={`fade ${showNavContent === i && show}`} tabId={`${i}`}>
              {ORDER_LIST.map((item, i) => (
                <OrderBox item={item} key={`orderBox${i}`} />
              ))}
            </TabPane>
          ))}
        </TabContent>
        {/* <!-- Catagories Content End --> */}
      </section>
    </main>
  );
};
export default React.memo(OrderHistory);
