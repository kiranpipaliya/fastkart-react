import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import Img from '../../../utils/Img';
import { SHOP_BY_CATEGORIES } from './shopByCategoriesList';

const ShopByCategories = () => {
  return (
    <>
      {/* <!-- Shop By Category Start --> */}
      <section className='category pt-0'>
        <h3 className='font-md'>
          <span>Shop By Category </span>
          <span className='line'></span>
        </h3>
        <Row className='gy-sm-4 gy-2'>
          {SHOP_BY_CATEGORIES.map((item, i) => (
            <Col className='col-3' key={i}>
              <div className='category-wrap'>
                <div className={`bg-shape ${item.bgColor}`}></div>
                <Link to={item.path}>
                  <Img className='category img-fluid' src={item.image} alt={item.alt} />
                </Link>
                <span className='title-color'>{item.title}</span>
              </div>
            </Col>
          ))}
        </Row>
      </section>
      {/* <!-- Shop By Category End --> */}
    </>
  );
};

export default ShopByCategories;
