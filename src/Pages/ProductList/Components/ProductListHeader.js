import React, { Component } from 'react';
import './ProductListHeader.scss';

class ProductListHeader extends Component {
  render () {
    return (
      <header className="ProductList">
        <span>Wesop</span>
        <span>클렌저</span>
      </header>
    )
  }
}

export default ProductListHeader;