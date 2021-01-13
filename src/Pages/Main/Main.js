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
                  <span>레인지 살펴보기</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mainSection-1-rightSide">
            <img alt="new_product_promotion_img" src="https://www.aesop.com/u1nb1km7t5q7/2lcsVIwzcf7YupCndczysa/4e8755959b13dac77f0749dab5a89ba4/Aesop_Poured_Candles_2020_Hybris_Homepage_Secondary_Split_02_960x540px.gif" />
          </div>
        </section>      
        <MainSlider />
        <div className="mainSection-3">
          <div className="mainSection-3-leftside">
            <div className="mainSection-3-leftSide-innerWrapper">
              <header>
                <h2>파슬리 씨드 스킨 케어</h2>
                <h1>파슬리 씨드 스킨 케어</h1>
              </header>
              <div className="mainSection-3-leftSide-innerWrapper-content">
                <p>각종 오염, 난방기의 사용, 도시 생활에서 오는 스트레스로 인해 피부는 주변 환경에 민감하게 반응할 수 있습니다. 1) 항산화 성분을 풍부하게 함유한 파슬리 씨드 제품은 피부를 탄탄하게 강화시켜 줍니다.</p>
                <div className="mainSection-3-leftSide-innerWrapper-content-button">
                  <span>서늘한 환경에서의 피부 관리법</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mainSection-3-rightSide">
            <img alt="seed_skincare_img" width="1110px" src="https://www.aesop.com/u1nb1km7t5q7/5Uchgf3EITLPDvmZgf3Cj2/2c648d927c44ac2c844e6e5cce10cba9/Aesop-Parsley-Seed-Performance-Campaign-2020-Hybris-Homepage-Secondary-3-Mid-Desktop-1690x1150px.jpg" />
          </div>
        </div>
        <MainSlider />
        <div className="mainSection-3">
          <div className="mainSection-3-leftside">
            <div className="mainSection-3-leftSide-innerWrapper">
              <header>  
                <h1>스토어 로케이터</h1>
              </header>
              <div className="mainSection-3-leftSide-innerWrapper-content">
                <p>매장에서는 이솝 컨설턴트가 고객 여러분을 따뜻하게 맞이하고 기프트 구매를 위한 맞춤형 컨설팅을 제공해드립니다.</p>
                <div className="mainSection-3-leftSide-innerWrapper-content-button">
                  <span>가까운 스토어 찾기</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mainSection-3-rightSide">
            <img alt="seed_skincare_img" width="1110px" src="https://www.aesop.com/u1nb1km7t5q7/78lSsJHoVvtMYVyynstu3e/cc94bae54e56d636857ab94f2017b0be/Aesop-KR-Lotte-World-Tower-Mall-Hero-Bleed-Desktop-2880x1620px.jpg" />
          </div>
        </div>
        <section className="mainSection-6">
          <div className="mainSection-6-quote">
            <div className="mainSection-6-quote-title">‘It is high time to rekindle the stars.’</div>
            <div className="mainSection-6-quote-writer">Guillaume Apollinaire</div>
          </div>
        </section>  
      </div>

    );
  }

}

export default Main;