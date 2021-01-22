import React, { Component } from 'react';
import ProductListHeader from './Components/ProductListHeader';
import ProductListSubNav from './Components/ProductListSubNav';
import ProductListContent from './Components/ProductListContent';
import ProductListNextStep from './Components/ProductListNextStep';
import ProductListHowTo from './Components/ProductListHowTo';
import './ProductList.scss';

class ProductList extends Component {
  render () {
    return (
      <div className="bg">
        <ProductListHeader />
        <ProductListSubNav />
        <ProductListContent/>
        <ProductListNextStep />
        <ProductListHowTo />
      </div>

    );
  }

}

export default ProductList;