import React, { Component } from 'react';
import { Link, reactRouter } from 'react-router-dom';
import { PRODUCTS_API } from '../../config';
import Nav from '../../Components/Nav/Nav';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductInstruction from './ProductInstruction/ProductInstruction';
import './ProductDetail.scss';

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
    let image = product.media?.[0]
    let video = product.media?.[1]
    let image_url = image?.substring(0, image.indexOf('::image_url'));
    let video_url = video?.substring(0, video.indexOf('::video_url'));

    return (
      <div className="ProductDetail">
        <Nav /> 
        <div className="detailHeader">
            <div>
              <Link to='/'>Wesop</Link>
            </div>
            <div>
              {/* <img alt="testing" src="https://www.aesop.com/medias/Aesop-Skin-Remove-60mL-large.png?context=bWFzdGVyfGltYWdlc3wzNTg0NDJ8aW1hZ2UvcG5nfGltYWdlcy9oMTIvaDQxLzg4MDUwNzIxNDIzNjYucG5nfDM2ODViMzA0ZWU1NGU0MzBkOGZjMGZlNjlhMTU2YjE2ZTQ0ZTY2NjY5MjBhZDRiN2NhNDU4NzgyYmE2NGNkMGE"></img> */}
              <img alt={product.name} src={image_url}></img>
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
          <ProductInstruction product = {product} video_url = {video_url} />
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


