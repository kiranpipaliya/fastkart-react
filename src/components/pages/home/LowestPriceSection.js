import React from 'react';
import ProductSlider from '../../general/ProductSlider';
import TopTitle from '../../general/TopTitle';
import ProductCard from '../../productCard/ProductCard';
const ProductSliderSection = (props) => {
  return (
    <>
      {/* <!-- Lowest Price Start --> */}
      <section className={`${props.titleData.sectionClass} pt-0`}>
        <TopTitle title={props.titleData.title} subTitle={props.titleData.subTitle} link={props.titleData.link} path={props.titleData.path} />
        <ProductSlider>
          {props.data.map((item, i) => (
            <div key={i}>
              <ProductCard data={item} />
            </div>
          ))}
        </ProductSlider>
      </section>
      {/* <!-- Lowest Price End - */}
    </>
  );
};
export default ProductSliderSection;
