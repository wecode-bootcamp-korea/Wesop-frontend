import React, { Component } from 'react';
import { Link, reactRouter } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductInstruction from './ProductInstruction/ProductInstruction';
import './ProductDetail.scss';


class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: {
        id: 1,
        name: "클렌저",
        img: "../../images/example.png"

      },
    };
  }

  // componentDidMount() {
  //   fetch('address placeholder',
  //    { method: 'GET'})
  //    .then(res => res.json())
  //    .then(res => {
  //      this.setState({
  //       product: res.data,
  //      });
  //    });
  // }

  render () {
    const { product } = this.state;
    return (
      <div className="ProductDetail">
        <Nav />
        <div className="testing">
          <div>
            Wesop
            {/* img tag [onClick link to redirect to Main page] */}
          </div>
          <div>
            <img alt={product.name} src={product.img}></img>
            {/* selected product data's image file */}
          </div>
          <div>
            <ProductInfo product = {product} />
          </div>

        </div>

        <div className="ph">
          <span>무료 선물 포장 서비스</span>
          <span>주문하신 모든 제품에 대해 선물 포장 서비스를 제공해 드립니다</span>
        </div>

        <div className="ph">
          <ProductInstruction />

        </div>

        <div className="testing">
          related product Slider component // unclear if we will implement the slider in this page
        </div>


        {/* <Footer /> will come in when everything is merged and all */}
      </div>

    );
  }

}

export default ProductDetail;


