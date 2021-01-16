import React, { Component } from 'react';
import './ProductInstruction.scss';


class ProductInstruction extends Component {
  render () {
    return (
      <>
        <div className="imgWrapper">
          <img alt="testing" src="https://www.aesop.com/u1nb1km7t5q7/7KFtsfQPvlTOq50iOgsVYQ/9865d72cfac7f1c06a5a57aa07abb5fd/Aesop-Skin-Remove-Hybris-Secondary-Texture-50-50-Desktop-1440x1500px.jpg"></img>
        </div>
        <div className="instruction">
          <div className="instructionWrapper">
            <p>사용법</p>
            <p className="content"> 젖은 화장솜에 덜어 아이 메이크업 제품이 용해될 때까지 기다렸다 닦아냅니다</p>
          </div>
          <div className="detailWrapper">
            <div>
              <p>사용량</p>
              <p>내용 </p>
            </div>
            <div>
              <p>텍스처</p>
              <p>내용</p>
            </div>
            <div>
              <p>향</p>
              <p>내용</p>
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default ProductInstruction;