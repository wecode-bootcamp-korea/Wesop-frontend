import React, { Component } from 'react';
import './ProductInfo.scss';


class ProductInfo extends Component {
  

  render () {
    const { product } = this.props;
    return (
      <div className="ProductInfo">
        <div className="nameDescriptionWrap">
          <div className="categoryBtn">
            <button> {product[0].category} </button>
            &
            <button> {product[0].subCategory} </button>
          </div>
          <p className="productName">{product[0].name}</p>
          <p className="productDescription"> {product[0].description} </p>
        </div>
        <div className="detailsWrap">
          <div>
            <p>피부타입</p>
            <p>내용</p>
          </div>
          <div>
            <p>사용감</p>
            <p>내용</p>
          </div>
          <div>
            <p>주요성분</p>
            <p>내용</p>
          </div>
        </div>
        <button className="addToCartBtn">카트에 추가 - product.price</button>
      </div>
    );
  }

}

export default ProductInfo;
