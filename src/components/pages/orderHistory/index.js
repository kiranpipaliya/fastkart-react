import React, { useState, useEffect } from 'react';
import SearchBox from '../../general/SearchBox';
import { ORDER_TAB } from './orderTabsList';
import { Nav, NavItem, TabContent, NavLink, TabPane } from 'reactstrap';
import { ORDER_LIST } from './orderList';
import OrderBox from './OrderBox';

const OrderHistory = () => {
  const [showNavContent, setShowNavContent] = useState(0);
  const [show, setShow] = useState('');

  useEffect(() => {
    const timeout = setTimeout((i) => {
      setShow('show');
    }, 200);

    return () => clearTimeout(timeout);
  }, [show]);
  const navActiveHandler = (i) => {
    setShowNavContent(i);
    setShow('');
  };

  return (
    <main className='main-wrap mb-xxl order-history'>
      <Nav className='nav nav-tab nav-pills custom-scroll-hidden' tabs>
        {ORDER_TAB.map((item, i) => (
          <NavItem key={i}>
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
            <TabPane className={`fade ${showNavContent === i && show}`} tabId={`${i}`} key={i}>
              {ORDER_LIST.map((item, i) => (
                <OrderBox item={item} key={i} />
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
