import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import './CandleSlider.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Products from './Products';

class SeedSlider extends Component {

  render() {
    const { products } = this.props;

    const sliderItem = (item) => {
      return (
        item.products &&
        item.products.map( item => (
          <Products
            key={item.id}
            description={item.description}
            name={item.name}
            url={item.url}
          />
        ))
      );
    };

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
            <SwiperSlide className="mainSection-Slider-items-list">
            {sliderItem(item)}
            </SwiperSlide>
            )
          }
        )}
        </Swiper>
      </section>
    );
  }
}

export default withRouter(SeedSlider);