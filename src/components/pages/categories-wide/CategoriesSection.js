import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Img from '../../../utils/Img';
import { FILTER_LIST } from './filterList';
import { PRODUCT_LIST } from './productList';
import { Row, Col, Nav, TabContent, TabPane, NavLink, NavItem } from 'reactstrap';
import SimpleProduct from '../../productCard/SimpleProduct';

const CategoriesSection = () => {
  const [navActive, setNanActive] = useState(0);
  const [show, setShow] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow('show');
    }, 200);

    return () => clearTimeout(timeout);
  }, [show]);

  const navShowHandler = (i) => {
    setNanActive(i);
    setShow('');
  };
  return (
    <section className='pb-0'>
      <div className='catagories-wrap'>
        {/* <!-- Catagories Filter Start --> */}
        <Nav tabs id='catagories-tab'>
          {FILTER_LIST.map((item, i) => (
            <NavItem key={`filter${i}`}>
              <NavLink className={navActive === i ? 'active' : ''} onClick={() => navShowHandler(i)}>
                <div className='content'>
                  <img src={item.image} alt={item.alt} />
                  <span className='font-xs title-color'>{item.title}</span>
                </div>
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        {/* <!-- Catagories Filter End --> */}

        {/* <!-- Catagories Content Start --> */}
        <TabContent className='ratio2_1' activeTab={`${navActive}`}>
          {FILTER_LIST.map((item, i) => (
            <TabPane className={`fade ${navActive === i && show}`} tabId={`${i}`} key={`tab-${i}`}>
              <div className='banner-box'>
                <Img src={item.banner.image} alt={item.banner.alt} className='bg-img' />
                <div className='content-box'>
                  <h1 className='title-color heading'>{item.banner.title}</h1>
                  <p className='content-color font-sm'>{item.banner.offer}</p>
                  <Link to={item.banner.path} className='btn-solid'>
                    {item.banner.btnText}
                  </Link>
                </div>
              </div>

              <Row className='row g-3'>
                {PRODUCT_LIST.map((item, i) => (
                  <Col sm='4' key={`product-${i}`}>
                    <Link to={item.path}>
                      <SimpleProduct image={item.image} alt={item.alt} title={item.title} />
                    </Link>
                  </Col>
                ))}
              </Row>
            </TabPane>
          ))}
        </TabContent>
        {/* <!-- Catagories Content End --> */}
      </div>
    </section>
  );
};
export default CategoriesSection;
