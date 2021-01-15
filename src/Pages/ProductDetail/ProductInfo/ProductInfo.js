import React, { Component } from 'react';
import './ProductInfo.scss';


class ProductInfo extends Component {
  render () {
    return (
      <div className="ProductInfo">
        <button>Category Button</button>
        <button>Subcategory Button</button>
        <h3>product.name</h3>
        <span> product.description </span>
        <div className="detailsWrap">
          <div>
            피부타입

          </div>
          <div>
            사용감

          </div>
          <div>
            주요성분

          </div>
        </div>
        <button>카트에 추가 - product.price</button>
      </div>
    );
  }

}

export default ProductInfo;