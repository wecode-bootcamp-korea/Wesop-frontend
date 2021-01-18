import React, { Component } from 'react';
import './ProductInfo.scss';

const NUMBER_FORMAT_REGEXP = /\B(?=(\d{3})+(?!\d))/g;

class ProductInfo extends Component {
  

  render () {
    const { product } = this.props;
    // console.log(product)
    
    return (
      <div className="ProductInfo">
        <div className="nameDescriptionWrap">
          <div className="categoryBtns">
            <ul>
              <li><button> {product.category} </button></li>
              <li><button> {product.subcategories?.join(', ')} </button></li>
            </ul>
          </div>
          <p className="productName">{product.name}</p>
          <p className="productDescription"> {product.description} </p>
        </div>
        <div className="detailsWrap">
          <div>
            <p>피부 타입</p>
            <p>{product.skin_types && product.skin_types.join(', ')}</p>
            {/* <p>{product.skin_types.join(', ')}</p> */}
          </div>
          <div>
            <p>사용감</p>
            <p>{product.feels && product.feels.join(', ')}</p>
          </div>
          <div>
            <p>주요성분</p>
            <p>{product.ingredients && product.ingredients.join(', ')}</p>
          </div>
        </div>
        <button className="addToCartBtn"> 카트에 추가 - ₩{Math.floor(product.price).toString().replace(NUMBER_FORMAT_REGEXP, ",")} </button>
      </div>
    );
  }

}

export default ProductInfo;
