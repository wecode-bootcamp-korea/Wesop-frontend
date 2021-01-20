import React, { Component } from 'react';
import './NewProduct.scss'

class NewProduct extends Component {
  render() { 
    return (
      <div className="mainSection-newproduct">
        <div className="mainSection-newproduct-leftside">
          <div className="mainSection-newproduct-leftSide-innerWrapper">
            <header>
              <h2>파슬리 씨드 스킨 케어</h2>
              <h1>파슬리 씨드 스킨 케어</h1>
            </header>
            <div className="mainSection-newproduct-leftSide-innerWrapper-content">
              <p>각종 오염, 난방기의 사용, 도시 생활에서 오는 스트레스로 인해 피부는 주변 환경에 민감하게 반응할 수 있습니다. 1) 항산화 성분을 풍부하게 함유한 파슬리 씨드 제품은 피부를 탄탄하게 강화시켜 줍니다.</p>
              <div className="mainSection-newproduct-leftSide-innerWrapper-content-button">
                <span>서늘한 환경에서의 피부 관리법</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mainSection-newproduct-rightSide">
          <img alt="seed_skincare_img" src="https://www.aesop.com/u1nb1km7t5q7/5Uchgf3EITLPDvmZgf3Cj2/2c648d927c44ac2c844e6e5cce10cba9/Aesop-Parsley-Seed-Performance-Campaign-2020-Hybris-Homepage-Secondary-3-Mid-Desktop-1690x1150px.jpg" />
        </div>
      </div>
    );
  }
}

export default NewProduct;