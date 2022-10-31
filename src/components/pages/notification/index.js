import React, { useState } from 'react';

import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import NotificationBox from './NotificationBox';
import { NOTIF_FILTER, NOTIF_LIST } from './notificationList';
const Notification = () => {
  const [showTab, setShowTab] = useState(2);
  const activeTab = (i) => {
    setShowTab(i + 1);
  };

  return (
    <main className='main-wrap notification-page mb-xxl'>
      <div className='nav-wrap'>
        <Nav className='nav-tab2 nav-pills' id='pills-tab' role='tablist'>
          {NOTIF_FILTER.map((item, i) => (
            <NavItem>
              <NavLink key={i} className={showTab === i + 1 ? 'active' : ''} onClick={() => activeTab(i)}>
                {item}
              </NavLink>
            </NavItem>
          ))}
        </Nav>

        <button className='font-md font-theme'>
          <img src='assets/icons/svg/d-check.svg' alt='check' /> Mark all as read
        </button>
      </div>

      <section className='tab-content ratio2_1'>
        <TabContent activeTab={`${showTab}`}>
          {NOTIF_FILTER.map((_, i) => (
            <TabPane key={i} className={`fade ${showTab === i + 1 ? 'show' : ''}`} tabId={`${i + 1}`}>
              {NOTIF_LIST.map((item, i) => (
                <div className={`offer-wrap ${i !== 0 && 'section-p-t'}`} key={i}>
                  <h2 className='font-sm content-color'>{item.heading}</h2>
                  {item.item.map((item, i) => (
                    <NotificationBox data={item} key={item.id} />
                  ))}
                </div>
              ))}
            </TabPane>
          ))}
        </TabContent>
      </section>
    </main>
  );
};
export default Notification;
