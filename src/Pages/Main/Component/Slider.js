import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import Products from './Products';
import './Slider.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

//const IMAGE_DIVIDER_REGEXP = /::/;

class SeedSlider extends Component {
  render() {
    const { products } = this.props;
    
    SwiperCore.use([Navigation, Pagination, Scrollbar]);

    return (
      <section className="mainSection-Slider">
        <Swiper
          slidesPerView={4}
          navigation
          scrollbar>
        {products && 
        products.map ( product => {
          //const [ image ] = Object.values(product.media);
          //const { index } = image.match(IMAGE_DIVIDER_REGEXP);
          return (
            <SwiperSlide key={product.key} >
            {<Products
            key={product.id}
            description={product.description}
            name={product.name}
            url={console.log(product.media[Object.keys(product.media)[0]])}
          />}
            </SwiperSlide>
            )
          }
        )}
        </Swiper>
      </section>
    );
  }
}

export default SeedSlider;