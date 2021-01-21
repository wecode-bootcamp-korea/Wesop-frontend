import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './Location.scss'

class Location extends Component {
  render() { 
    SwiperCore.use([Navigation, Autoplay]);
    return (       
      <div className="mainSection-location">
        <div className="mainSection-location-leftside">
          <div className="mainSection-location-leftSide-innerWrapper">
            <header>  
              <h1>스토어 로케이터</h1>
            </header>
            <div className="mainSection-location-leftSide-innerWrapper-content">
              <p>매장에서는 이솝 컨설턴트가 고객 여러분을 따뜻하게 맞이하고 기프트 구매를 위한 맞춤형 컨설팅을 제공해드립니다.</p>
              <div className="mainSection-location-leftSide-innerWrapper-content-button">
                <span>가까운 스토어 찾기</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mainSection-location-rightSide">
          <Swiper
            autoplay={true} 
            autoplayTimeout={1000}
            slidesPerView={1}
            navigation
            >
            <SwiperSlide>
              <img alt="롯데월드몰" src="https://images.unsplash.com/photo-1562317335-0e9573a5d330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" />
            </SwiperSlide>  
            <SwiperSlide>
              <img alt="삼청점" src="https://images.unsplash.com/photo-1562731789-8324cbe28333?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
            </SwiperSlide>  
        </Swiper>
        </div>
      </div>
    );
  }
}

export default Location;