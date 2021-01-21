import React, { Component } from 'react';
import './MainHeader.scss'

class MainHeader extends Component {
  render() { 
    return (
      <section className="mainSection-header">
        <div className="mainSection-header-leftSide">
          <span className="mainSection-header-leftSide-logo">Wesop</span>
          <div className="mainSection-header-leftSide-innerWrapper">
            <header>
              <h2>별빛이나 촛불을 통해</h2>
              <h1>아로마틱 캔들 트리오</h1>
            </header>
            <div className="mainSection-header-leftSide-innerWrapper-content">
              <p>세 가지 아로마 캔들이 이솝의 홈 레인지를 통해 새롭게 선보입니다. 고대 천문학자의 이름을 붙인 캔들은 고유한 매혹적인 향기를 전합니다.</p>
              <div className="mainSection-header-leftSide-innerWrapper-content-button">
                <span>레인지 살펴보기</span>
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="mainSection-header-rightSide">
          <img alt="new_product_promotion_img" src="https://images.unsplash.com/photo-1603117446700-91ada61a5006?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
        </div>
      </section>      
    );
  }
}

export default MainHeader;