import React, { Component } from 'react';
import './ProductInfo.scss';


class ProductInfo extends Component {
  

  render () {
    const { product } = this.props;
    return (
      <div className="ProductInfo">
        <div className="nameDescriptionWrap">
          <div className="categoryBtns">
            <ul>
              <li><button> {product.category} </button></li>
              <li><button> {Object.values(product.subcategories).join(' ')} </button></li>
            </ul>
          </div>
          <p className="productName">{product.name}</p>
          <p className="productDescription"> {product.description} </p>
        </div>
        <div className="detailsWrap">
          <div>
            <p>피부 타입</p>
            <p>{Object.values(product.skin_types).join(' ')}</p>
          </div>
          <div>
            <p>사용감</p>
            <p>{Object.values(product.fees).join(' ')}</p>
          </div>
          <div>
            <p>주요성분</p>
            <p>{Object.values(product.ingredients).join(' ')}</p>
          </div>
        </div>
        <button className="addToCartBtn"> 카트에 추가 - {product.price} </button>
      </div>
    );
  }

}

export default ProductInfo;
