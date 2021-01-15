import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './Slider.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

class Slider extends Component {
  constructor() {
    super();
    this.state = {
        mainSliderProducts: []
    }
  }
  
  componentDidMount = () => {
    fetch('data/MainSliderProducts.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          mainSliderProducts: data
          })
        } 
      )
    }

  render() {
    const { mainSliderProducts } = this.state

    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

    return (
      <section className="mainSection-Slider">
        <Swiper
          slidesPerView={4}
          navigation
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          
            {mainSliderProducts && 
             mainSliderProducts.map( item => {
                return (
                <SwiperSlide key={item.id} className="mainSection-Slider-items-list">
                  <div className="mainSection-Slider-items-line">
                    <div className="mainSection-Slider-items">
                      <img alt={item.name} src={item.url}/>
                      <span className="mainSection-Slider-items-description">
                        <span>{item.name}</span>
                        <span>{item.description}</span>
                      </span>
                    </div>  
                  </div>
                </SwiperSlide>
                )
              })}    
        </Swiper>
      </section>
    );
  }
}

export default Slider;