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
              <img alt="롯데월드몰" width="1100px" src="https://www.aesop.com/u1nb1km7t5q7/78lSsJHoVvtMYVyynstu3e/cc94bae54e56d636857ab94f2017b0be/Aesop-KR-Lotte-World-Tower-Mall-Hero-Bleed-Desktop-2880x1620px.jpg" />
              <span>이솝 롯데월드몰</span>
            </SwiperSlide>  
            <SwiperSlide>
              <img alt="삼청점" width="1100px" src="https://www.aesop.com/u1nb1km7t5q7/1Ej0vXgx5eD9wZ15S03LO4/3c8083d6f26f08d595a672150989eb98/Aesop-KR-Samcheong-Hero-Desktop-2880x1620.jpg" />
              <span>이솝 삼청점</span>
            </SwiperSlide>  
        </Swiper>
        </div>
      </div>
    );
  }
}

export default Location;