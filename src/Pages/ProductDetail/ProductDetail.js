import React, { Component } from 'react';
import { Link, reactRouter } from 'react-router-dom';
import { PRODUCTS_API } from '../../config';
import Nav from '../../Components/Nav/Nav';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductInstruction from './ProductInstruction/ProductInstruction';
import './ProductDetail.scss';

const regex = /::/;

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    // fetch(PRODUCTS_API+`/${this.props.match.params.id}`,
    fetch(PRODUCTS_API+`/1`, // test case
     { method: 'GET'})
     .then(res => res.json())
     .then(res => {
       this.setState({
        product: res.product,
       });
     });
  }

  render () {
    const { product } = this.state;
    // let image_url = product.media["url_0"];
    // let video_url = Object.values(product.media[1]);
    // let idx = image_url.match(regex).index;
    // let vidx = video_url.match(regex).index;
    // let image = image_url.slice(0, idx);
    // let video = video_url.slice(0, vidx);
    return (
      <div className="ProductDetail">
        <Nav /> 
        <div className="detailHeader">
            <div>
              <Link to='/'>Wesop</Link>
            </div>
            <div>
              <img alt="testing" src="https://www.aesop.com/medias/Aesop-Skin-Remove-60mL-large.png?context=bWFzdGVyfGltYWdlc3wzNTg0NDJ8aW1hZ2UvcG5nfGltYWdlcy9oMTIvaDQxLzg4MDUwNzIxNDIzNjYucG5nfDM2ODViMzA0ZWU1NGU0MzBkOGZjMGZlNjlhMTU2YjE2ZTQ0ZTY2NjY5MjBhZDRiN2NhNDU4NzgyYmE2NGNkMGE"></img>
              {/* <img alt={product.name} src={image}></img> */}
            </div>
          <div className="productInfo">
            { <ProductInfo product = { product }/> }
            {/* { product ? <ProductInfo product = {product}/> : null } */}
          </div>

        </div>

        <div className="offerTextBox">
          <p>무료 선물 포장 서비스</p>
          <p style={{color: "gray"}}>주문하신 모든 제품에 대해 선물 포장 서비스를 제공해 드립니다</p>
        </div>

        <div className="instructionBox">
          {/* <ProductInstruction product = {product} video = { video } /> */}
          {product ? <ProductInstruction product = {product}/> : null}
        </div>

        <div className="testing">
          slider 섹션
        </div>


        {/* <Footer /> will come in when everything is merged and all */}
      </div>

    );
  }

}

export default ProductDetail;


