import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import MainSlider from './MainSlider';
import './Main.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Main extends Component {
  render() { 
    return (
      <div className="main">
        <Nav />
        <section className="mainSection-1">
          <div className="mainSection-1-leftSide">
            <span>Wesop</span>
            <div className="mainSection-1-leftSide-innerWrapper">
              <header>
                <h2>별빛이나 촛불을 통해</h2>
                <h1>아로마틱 캔들 트리오</h1>
              </header>
              <div className="mainSection-1-leftSide-innerWrapper-content">
                <p>세 가지 아로마 캔들이 이솝의 홈 레인지를 통해 새롭게 선보입니다. 고대 천문학자의 이름을 붙인 캔들은 고유한 매혹적인 향기를 전합니다.</p>
                <div className="mainSection-1-leftSide-innerWrapper-content-button">
                  <span><a href="#">레인지 살펴보기</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className="mainSection-1-rightSide">
            <img alt="이미지" src="https://www.aesop.com/u1nb1km7t5q7/2lcsVIwzcf7YupCndczysa/4e8755959b13dac77f0749dab5a89ba4/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Split_02_960x540px.gif" />
          </div>
        </section>      
        <MainSlider />
        <section className="mainSection-3">씨드스킨케어</section>
        <section className="mainSection-carouselSlider-2">씨드_슬라이더 이미지</section>
        <section className="mainSection-5">스토어 로케이터</section>
        <section className="mainSection-6">Quote</section>  
      </div>

    );
  }

}

export default Main;