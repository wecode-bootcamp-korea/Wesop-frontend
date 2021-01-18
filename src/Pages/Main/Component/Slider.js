import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import Products from './Products';
import './Slider.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

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
        products.map ( item => {
          return (
            <SwiperSlide key={item.key} >
            {<Products
            key={item.id}
            description={item.description}
            name={item.name}
            url={item.url}
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