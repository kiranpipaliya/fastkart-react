import React from 'react';
const AboutUs = () => {
  return (
    <>
      <main className='main-wrap about-us-page mb-xxl'>
        {/* <!-- Banner Section Start --> */}
        <div className='banner-box'>
          <div className='bg-shape'>
            <img src='assets/svg/about-us.svg' alt='about-us' />
          </div>
        </div>
        {/* <!-- Banner Section End --> */}

        {/* <!-- Who We Are? Section Start --> */}
        <section className='who-we-are'>
          <h2 className='title-color font-md'>Who We Are?</h2>
          <p className='content-color'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
          </p>
        </section>
        {/* <!-- Who We Are? Section End --> */}

        {/* <!-- How do I order? Section Start --> */}
        <section className='how-do-section pt-0'>
          <h3 className='title-color font-md'>How do I order?</h3>

          <div className='steps-wrap'>
            <div className='steps-box'>
              <span>1</span>
              <div className='content'>
                <h4 className='title-color font-sm'>Browse products using the search feature</h4>
                <p className='content-color'>Once the order is placed we will check that everything is correct</p>
              </div>
            </div>

            <div className='steps-box'>
              <span>2</span>
              <div className='content'>
                <h4 className='title-color font-sm'>Enter your name, address, telephone, etc.</h4>
                <p className='content-color'>. We want to make sure that we are exceeding expectations, not creating potential issues</p>
              </div>
            </div>

            <div className='steps-box'>
              <span>3</span>
              <div className='content'>
                <h4 className='title-color font-sm'>Select a delivery method. </h4>
                <p className='content-color'>We will check lead times, verify packaging of items, identify any delivery challenge.</p>
              </div>
            </div>

            <div className='steps-box'>
              <span>4</span>
              <div className='content'>
                <h4 className='title-color font-sm'>Choose your payment method. </h4>
                <p className='content-color'>check for potential cost savings in shipping, etc. If there are any issues or savings available.</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- How do I order? Section End --> */}

        {/* <!-- Team Section Start --> */}
        <section className='team-section pt-0'>
          <h5 className='title-color'>People who Build Fastkart</h5>

          <div className='row g-4'>
            <div className='col-6'>
              <div className='member'>
                <div className='bg-shape bg-theme-blue border-blue'>
                  <img src='assets/images/team/1.png' className='img-fluid' alt='member' />
                </div>
                <h6 className='title-color'>Maureen Biologist</h6>
                <ul className='social'>
                  <li>
                    <a target='_blank' href='https://www.facebook.com/' rel='noreferrer'>
                      <svg>
                        <use xlinkHref='assets/icons/svg/social/sprite.svg#social-facebook'></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href='https://www.linkedin.com/login' rel='noreferrer'>
                      <svg>
                        <use xlinkHref='assets/icons/svg/social/sprite.svg#social-linkedin'></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href='https://twitter.com/' rel='noreferrer'>
                      <svg>
                        <use xlinkHref='assets/icons/svg/social/sprite.svg#social-twitter'></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-6'>
              <div className='member'>
                <div className='bg-shape bg-theme-yellow border-yellow'>
                  <img src='assets/images/team/2.png' className='img-fluid' alt='member' />
                </div>
                <h6 className='title-color'>Glenn P. Mojica</h6>
                <ul className='social'>
                  <li>
                    <a target='_blank' href='https://www.facebook.com/' rel='noreferrer'>
                      <svg>
                        <use xlinkHref='assets/icons/svg/social/sprite.svg#social-facebook'></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href='https://www.linkedin.com/login' rel='noreferrer'>
                      <svg>
                        <use xlinkHref='assets/icons/svg/social/sprite.svg#social-linkedin'></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href='https://twitter.com/' rel='noreferrer'>
                      <svg>
                        <use xlinkHref='assets/icons/svg/social/sprite.svg#social-twitter'></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-6'>
              <div className='member'>
                <div className='bg-shape bg-theme-orange border-orange'>
                  <img src='assets/images/team/3.png' className='img-fluid' alt='member' />
                </div>
                <h6 className='title-color'>Patty O'Furniture</h6>
                <ul className='social'>
                  <li>
                    <a target='_blank' href='https://www.facebook.com/' rel='noreferrer'>
                      <svg>
                        <use xlinkHref='assets/icons/svg/social/sprite.svg#social-facebook'></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href='https://www.linkedin.com/login' rel='noreferrer'>
                      <svg>
                        <use xlinkHref='assets/icons/svg/social/sprite.svg#social-linkedin'></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href='https://twitter.com/' rel='noreferrer'>
                      <svg>
                        <use xlinkHref='assets/icons/svg/social/sprite.svg#social-twitter'></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-6'>
              <div className='member'>
                <div className='bg-shape bg-theme-pink border-pink'>
                  <img src='assets/images/team/4.png' className='img-fluid' alt='member' />
                </div>
                <h6 className='title-color'>Johnny M. Lopez</h6>
                <ul className='social'>
                  <li>
                    <a target='_blank' href='https://www.facebook.com/' rel='noreferrer'>
                      <svg>
                        <use xlinkHref='assets/icons/svg/social/sprite.svg#social-facebook'></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href='https://www.linkedin.com/login' rel='noreferrer'>
                      <svg>
                        <use xlinkHref='assets/icons/svg/social/sprite.svg#social-linkedin'></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href='https://twitter.com/' rel='noreferrer'>
                      <svg>
                        <use xlinkHref='assets/icons/svg/social/sprite.svg#social-twitter'></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Team Section End --> */}
      </main>
    </>
  );
};
export default AboutUs;
