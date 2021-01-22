import React, { Component } from 'react';
import './Products.scss';

class Products extends Component {
  
  render() {
    const { goToDetail, productId, name, url, description} = this.props;
    //즉시실행을 막기위해서 콜백함수
    return (
      <div className="mainSection-Slider-items-list" onClick={() => goToDetail(productId)}> 
        <div className="mainSection-Slider-items-line">
          <div className="mainSection-Slider-items">
            <img alt={name} src={url}/>
            <span className="mainSection-Slider-items-description">
              <span>{name}</span>
              <span>{description}</span>
            </span>
          </div>  
        </div>
      </div>
    );
  }
}

export default Products;