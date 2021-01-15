import React, { Component } from 'react';
import { Link, reactRouter } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import ProductInfo from './ProductInfo/ProductInfo';
import './ProductDetail.scss';


class ProductDetail extends Component {
  render () {
    return (
      <div className="ProductDetail">
        <Nav />
        <div className="testing">
          <div>
            Wesop
            {/* img tag [onClick Link to redirect to Main page] */}
          </div>
          <div>
            Main Product Image
            {/* selected product data's image file */}
          </div>
          <div>
            Product Detail Box with add to cart button (component)
            <ProductInfo />
          </div>

        </div>

        <div className="testing">

          Text stating free shipping service

        </div>

        <div className="testing">
          <div>
            img || video
          </div>
          <div>
            product related info
          </div>
        </div>

        <div className="testing">
          related product Slider component
        </div>

      </div>

    );
  }

}

export default ProductDetail;