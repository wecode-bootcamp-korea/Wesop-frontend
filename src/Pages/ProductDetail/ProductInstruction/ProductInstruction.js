import React, { Component } from 'react';
import './ProductInstruction.scss';


class ProductInstruction extends Component {
  render () {
    const { product, video } = this.props;
    return (
      <>
        <div className="imgWrapper">
          <img alt="testing" src="https://www.aesop.com/u1nb1km7t5q7/7KFtsfQPvlTOq50iOgsVYQ/9865d72cfac7f1c06a5a57aa07abb5fd/Aesop-Skin-Remove-Hybris-Secondary-Texture-50-50-Desktop-1440x1500px.jpg"></img>
          {/* <img alt="" src={video}></img> */}
        </div>
        <div className="instruction">
          <div className="instructionWrapper">
            <p>사용법</p>
            <p className="content"> {product.manual}</p>
          </div>
          <div className="detailWrapper">
            <div>
              <p>사용량</p>
              <p>{product.dosage} </p>
            </div>
            <div>
              <p>텍스처</p>
              <p>{Object.values(product.textures)}</p>
            </div>
            <div>
              <p>향</p>
              <p>{Object.values(product.aromas)}</p>
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default ProductInstruction;