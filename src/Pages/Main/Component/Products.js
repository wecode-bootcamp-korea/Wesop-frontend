import React, { Component } from 'react';
import './Products.scss';

class Products extends Component {
  
  render() {
    const { name, url, description} = this.props;
    return (
      <div className="mainSection-Slider-items-line">
        <div className="mainSection-Slider-items">
          <img alt={name} src={url}/>
          <span className="mainSection-Slider-items-description">
            <span>{name}</span>
            <span>{description}</span>
          </span>
        </div>  
      </div>
    );
  }
}

export default Products;