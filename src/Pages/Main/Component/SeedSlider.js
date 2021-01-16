import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import './CandleSlider.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

class SeedSlider extends Component {
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
          mainSliderProducts: data.MainSeedProducts
          })
        } 
      )
    }

  render() {
    const { mainSliderProducts } = this.state

    SwiperCore.use([Navigation, Pagination, Scrollbar]);

    return (
      <section className="mainSection-Slider">
        <Swiper
          slidesPerView={4}
          navigation
          scrollbar>
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

export default SeedSlider;