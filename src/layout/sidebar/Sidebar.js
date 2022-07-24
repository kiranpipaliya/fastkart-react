import React from 'react';

const Sidebar = () => {
  return (
    <>
      <a href='#javascript' className='overlay-sidebar' />
      <aside className='header-sidebar'>
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

          <nav className='navigation'>
            <ul>
              <li className='active'>
                <a
                  href='index.html'
                  className='nav-link title-color font-sm'
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('hello i am click');
                  }}>
                  <i className='iconly-Home icli'></i>
                  <span>Home</span>
                </a>
                <span>
                  <i data-feather='chevron-right'></i>
                </span>
              </li>

              <li>
                <a href='category-wide.html' className='nav-link title-color font-sm'>
                  <i className='iconly-Category icli'></i>
                  <span>Shop by Category</span>
                </a>
                <span>
                  <i data-feather='chevron-right'></i>
                </span>
              </li>

              <li>
                <a href='order-history.html' className='nav-link title-color font-sm'>
                  <i className='iconly-Document icli'></i>
                  <span>Orders</span>
                </a>
                <span>
                  <i data-feather='chevron-right'></i>
                </span>
              </li>

              <li>
                <a href='wishlist.html' className='nav-link title-color font-sm'>
                  <i className='iconly-Heart icli'></i>
                  <span>Your Wishlist</span>
                </a>
                <span>
                  <i data-feather='chevron-right'></i>
                </span>
              </li>

              <li>
                <a href='/' data-bs-toggle='offcanvas' data-bs-target='#language' aria-controls='language' className='nav-link title-color font-sm'>
                  <img src='assets/icons/png/flags.png' alt='flag' />
                  <span>Langauge</span>
                </a>
                <span>
                  <i data-feather='chevron-right'></i>
                </span>
              </li>

              <li>
                <a href='account.html' className='nav-link title-color font-sm'>
                  <i className='iconly-Add-User icli'></i>
                  <span>Your Account</span>
                </a>
                <span>
                  <i data-feather='chevron-right'></i>
                </span>
              </li>

              <li>
                <a href='notification.html' className='nav-link title-color font-sm'>
                  <i className='iconly-Notification icli'></i>
                  <span>Notification</span>
                </a>
                <span>
                  <i data-feather='chevron-right'></i>
                </span>
              </li>

              <li>
                <a href='setting.html' className='nav-link title-color font-sm'>
                  <i className='iconly-Setting icli'></i>
                  <span>Settings</span>
                </a>
                <span>
                  <i data-feather='chevron-right'></i>
                </span>
              </li>

              <li>
                <a href='/' className='nav-link title-color font-sm'>
                  <i className='iconly-Graph icli'></i>
                  <span>Dark</span>
                </a>

                <div className='dark-switch'>
                  <input id='darkButton' type='checkbox' />
                  <span></span>
                </div>
              </li>

              <li>
                <a href='/' className='nav-link title-color font-sm'>
                  <i className='iconly-Filter icli'></i>
                  <span>RTL</span>
                </a>

                <div className='dark-switch'>
                  <input id='rtlButton' type='checkbox' />
                  <span className='before-none'></span>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div className='contact-us'>
          <span className='font-xs title-color'>Contact Support</span>
          <p className='content-color font-xs'>If you have any problem,queries or questions feel free to reach out</p>
          <a href='/' className='btn-solid'>
            {' '}
            Contact Us{' '}
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
