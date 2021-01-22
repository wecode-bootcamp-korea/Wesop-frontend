import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { PRODUCTS_API } from '../../config';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductInstruction from './ProductInstruction/ProductInstruction';
import './ProductDetail.scss';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      product_url: [],
    };
  }

  componentDidMount() {
    fetch(PRODUCTS_API+`/${this.props.match.params.id}`,
     { method: 'GET'})
     .then(res => res.json())
     .then(res => {
       this.setState({
        product: res.product,
        product_url : this.seperateMedia(res.product.media),
       });
     });
  }

  componentDidUpdate(prevProps, _) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetch(PRODUCTS_API+`/${this.props.match.params.id}`,
      { method: 'GET'})
      .then(res => res.json())
      .then(res => {
        this.setState({
          product: res.product,
          product_url : this.seperateMedia(res.product.media),
        });
      });
    }
    window.scrollTo(0, 0);
  }

  seperateMedia(arr) {
    let image = {};
    let video = {};
    for (let i = 0; i < arr.length; i++) {
      arr[i]["type"] === "image" ? image['image'] = arr[i]["url"] : video['video'] = arr[i]["url"];
    }

    return [image, video];
  }

  render () {
    const { product, product_url } = this.state;

    return (
      <div className="ProductDetail">
        <div className="detailHeader">
            <div>
              <Link to='/'>Wesop</Link>
            </div>
            <div className="imgBox">
              <img alt={product.name} src={product_url[0]?.image}></img>
            </div>
          <div className="productInfo">
            { <ProductInfo product = { product }/> }
          </div>

        </div>

        <div className="offerTextBox">
          <p>무료 선물 포장 서비스</p>
          <p style={{color: "gray"}}>주문하신 모든 제품에 대해 선물 포장 서비스를 제공해 드립니다</p>
        </div>

        <div className="instructionBox">
          <ProductInstruction product = {product} video_url = {product_url[1]?.video} />
        </div>

        <div className="slider">

        </div>

      </div>

    );
  }

}

export default ProductDetail;


