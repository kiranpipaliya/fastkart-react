import React from 'react';
import { Home } from 'react-iconly';
import { Iconly } from 'react-iconly';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
const Notification = () => {
  return (
    <main className='main-wrap notification-page mb-xxl'>
      <div className='nav-wrap'>
        <Nav className=' nav-tab2 nav-pills' id='pills-tab' role='tablist'>
          <NavItem>
            <NavLink>Alerts</NavLink>
          </NavItem>

          <NavItem>
            <NavLink className='active'>Offers</NavLink>
          </NavItem>
        </Nav>

        <button className='font-md font-theme'>
          <img src='assets/icons/svg/d-check.svg' alt='check' /> Mark all as read
        </button>
      </div>

      <section className='tab-content ratio2_1'>
        <TabContent activeTab='1'>
          <TabPane className='fade show' tabId='1'>
            <div className='offer-wrap'>
              <h2 className='font-sm content-color'>Yesterday</h2>
              <div className='offer-box'>
                <div className='media'>
                  <div className='icon-wrap bg-theme-blue'>
                    <i className='iconly-Discount icli'></i>
                  </div>
                  <div className='media-body'>
                    <h3 className='font-sm title-color'>UPTO 40% OFF, Sales Ends</h3>
                    <span className='font-xs content-color'>3.00pm, 10 July, 2021</span>
                  </div>
                  <span className='badges bg-theme-theme-light font-theme'>offer</span>
                </div>
              </div>

              <div className='offer-box'>
                <div className='media'>
                  <div className='icon-wrap bg-theme-yellow-light'>
                    <Iconly name='Discount' set='bulk' primaryColor='blueviolet' size='xlarge'></Iconly> <i className='iconly-Ticket icli'></i>
                  </div>
                  <div className='media-body'>
                    <h3 className='font-sm title-color'>FLAT 30% OFF, Sales Ends</h3>
                    <span className='font-xs content-color'>5.00pm, 10 July, 2021</span>
                  </div>
                  <span className='badges bg-theme-theme-light font-theme'>offer</span>
                </div>
              </div>
            </div>

            <div className='offer-wrap section-p-t'>
              <h2 className='font-sm content-color'>Last 7 Days</h2>

              <div className='offer-box'>
                <div className='media'>
                  <div className='icon-wrap bg-theme-orange-light'>
                    <i className='iconly-Password icli'></i>
                  </div>
                  <div className='media-body'>
                    <h3 className='font-sm title-color'>Password Successfully Changed</h3>
                    <span className='font-xs content-color'>8.00am, 15 Jan, 2021</span>
                  </div>
                  <span className='badges bg-theme-theme-light font-theme'>Signin</span>
                </div>
              </div>

              <div className='offer-box'>
                <div className='media'>
                  <div className='icon-wrap bg-theme-purple'>
                    <i className='iconly-Ticket-Star icli'></i>
                  </div>
                  <div className='media-body'>
                    <h3 className='font-sm title-color'>$200 top up successfully</h3>
                    <span className='font-xs content-color'>9.00am, 10 Jan, 2021</span>
                  </div>
                  <span className='badges bg-theme-theme-light font-theme'>Topup</span>
                </div>
              </div>

              <div className='offer-box'>
                <div className='media'>
                  <div className='icon-wrap bg-theme-blue'>
                    <i className='iconly-Discount icli'></i>
                  </div>
                  <div className='media-body'>
                    <h3 className='font-sm title-color'>UPTO 40% OFF, Sales Ends</h3>
                    <span className='font-xs content-color'>3.00pm, 10 July, 2021</span>
                  </div>
                  <span className='badges bg-theme-theme-light font-theme'>offer</span>
                </div>
              </div>

              <div className='offer-box'>
                <div className='media'>
                  <div className='icon-wrap bg-theme-yellow-light'>
                    <i className='iconly-Ticket icli'></i>
                  </div>
                  <div className='media-body'>
                    <h3 className='font-sm title-color'>FLAT 30% OFF, Sales Ends</h3>
                    <span className='font-xs content-color'>5.00pm, 05 July, 2021</span>
                  </div>
                  <span className='badges bg-theme-theme-light font-theme'>offer</span>
                </div>
              </div>

              <div className='offer-box'>
                <div className='media'>
                  <div className='icon-wrap bg-theme-orange-light'>
                    <i className='iconly-Password icli'></i>
                  </div>
                  <div className='media-body'>
                    <h3 className='font-sm title-color'>Password Successfully Changed</h3>
                    <span className='font-xs content-color'>3.00pm, 10 July, 2021</span>
                  </div>
                  <span className='badges bg-theme-theme-light font-theme'>Signin</span>
                </div>
              </div>

              <div className='offer-box'>
                <div className='media'>
                  <div className='icon-wrap bg-theme-purple'>
                    <i className='iconly-Ticket-Star icli'></i>
                  </div>
                  <div className='media-body'>
                    <h3 className='font-sm title-color'>$200 top up successfully</h3>
                    <span className='font-xs content-color'>9.00am, 10 Jan, 2021</span>
                  </div>
                  <span className='badges bg-theme-theme-light font-theme'>Topup</span>
                </div>
              </div>

              <div className='offer-box'>
                <div className='media'>
                  <div className='icon-wrap bg-theme-blue'>
                    <i className='iconly-Discount icli'></i>
                  </div>
                  <div className='media-body'>
                    <h3 className='font-sm title-color'>UPTO 40% OFF, Sales Ends</h3>
                    <span className='font-xs content-color'>3.00pm, 10 July, 2021</span>
                  </div>
                  <span className='badges bg-theme-theme-light font-theme'>offer</span>
                </div>
              </div>
            </div>
          </TabPane>
        </TabContent>
      </section>
    </main>
  );
};
export default Notification;
