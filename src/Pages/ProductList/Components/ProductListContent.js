import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { PRODUCT_API } from '../../../config';
import './ProductListContent.scss';

const IMAGE_DIVIDER_REGEXP = /::/;
const NUMBER_FORMAT_REGEXP = /\B(?=(\d{3})+(?!\d))/g;

class ProductListContent extends Component {
  constructor() {
    super();
    this.state = {
        products: [],
        //isHovering: false
        isHovering:''
    }
  }
  
  componentDidMount = () => {
    fetch( PRODUCT_API )
      .then(res => res.json())
      .then(res => {
        this.setState({
          products: res.products
          })
        } 
      )
    }

  handleMouseHover = (productID) => {
    console.log('productId', productID);
    this.setState(() => (
      { isHovering: productID})
    );
  }

  goToProductDetail = (id) => {
    this.props.history.push(`/product_detail/${id}`)
  }
  
  render () {
    const { products } = this.state;
    return (
      <div className="ProductListContent">
        <div className="ProductListContent-intro">
          <span className="ProductListContent-intro-title">
            처음의 시작
          </span>
          <p>
          각질, 불필요한 유분 그리고 기타 잔여물을 말끔히 씻어내어 피부를 깨끗하게 하는 것은 인텔리전트 스킨케어의 기초입니다.
          </p>
        </div>
        {products &&
        products.map(product => {
          const [ image ] = Object.values(product.media);
          const { index } = image.match(IMAGE_DIVIDER_REGEXP);
          const productID = product.id;
          return (
          <div 
              onMouseEnter={() => this.handleMouseHover(productID)}
              onMouseLeave={() => this.handleMouseHover(productID)}
              className="ProductListContent-item"
              >
            <div className="ProductListContent-detail">
              <div className="ProductListContent-detail-upperBox" onClick={() => this.goToProductDetail(productID)}>
                <div className="ProductListContent-detail-image" >
                  <img width="400px"src={image.slice(0, index)} alt={product.name} />
                </div>
                <div className="ProductListContent-detail-info">
                  <div className="ProductListContent-detail-info-name">
                    <span>{product.name}</span>
                  </div>
                  <div className="ProductListContent-detail-info-price">
                    <span>{product.size}</span>
                    <span>/</span>
                    <span>₩{Math.floor(product.price).toString().replace(NUMBER_FORMAT_REGEXP, ",")}</span>
                  </div>
                </div>
              </div>
              <div className="ProductListContent-detail-type">
                <div className="ProductListContent-detail-type-skintype">
                  <span>피부 타입</span>
                  <span>{Object.values(product.skin_types).join(', ')}</span>
                </div>
                <div className="ProductListContent-detail-type-texture">
                  <span>사용감</span>
                  <span>{Object.values(product.feels).join(', ')}</span>
                </div>
              </div>
            </div>
            { this.state.isHovering === productID &&
            <div className="ProductListContent-addcart">
              <span>카트에 추가</span><span>-</span><span>₩{Math.floor(product.price).toString().replace(NUMBER_FORMAT_REGEXP, ",")}</span>
            </div> }
          </div>
          )
        })}
     </div>
    )
  }
}

export default withRouter(ProductListContent);