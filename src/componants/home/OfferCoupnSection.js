import TopTitle from '../general/TopTitle';
import { OFFER_COUPN } from './offerCoupnSectionList';

const OfferCouponSection = () => {
  return (
    <>
      {/* <!-- Coupons For You Start --> */}
      <section className=' coupons-section pt-0'>
        <div className=' coupon-wrap'>
          <TopTitle title='Coupens For You' path={`${process.env.PUBLIC_URL}/offer`} link='See all' subTitle='Popular Offers of the Day' />
          <div className='coupon-box'>
            {OFFER_COUPN.map((item, i) => (
              <div className={`cupon ${item.bgColor}`} key={i}>
                <span className=' circle-shape-wrap left'>
                  <span className=' circle-shape'></span>
                </span>
                <span className='circle-shape-wrap right'>
                  <span className='circle-shape'></span>
                </span>
                <div className='img-wrap'>
                  <img src={item.image} alt={item.alt} />
                </div>
                <div className='content-wrap'>
                  <h5 className='title-color'>{item.offer}</h5>
                  <span className='content-color'>{item.save}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- Coupens For You End --> */}
    </>
  );
};
export default OfferCouponSection;
