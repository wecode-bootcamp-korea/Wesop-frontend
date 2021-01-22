import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import Products from './Products';
import './Slider.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

class Slider extends Component {
  render() {
    const { products, goToDetail } = this.props;
    
    SwiperCore.use([Navigation, Pagination, Scrollbar]);

    return (
      <section className="mainSection-Slider">
        <Swiper
          slidesPerView={4}
          navigation
          scrollbar>
        {products && 
        products.map ( product => {
          return (
            <SwiperSlide productId={product.id} >
            {<Products
            goToDetail={goToDetail}
            productId={product.id}
            description={product.description}
            name={product.name}
            url={product.media[0]?.url}
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

export default Slider;