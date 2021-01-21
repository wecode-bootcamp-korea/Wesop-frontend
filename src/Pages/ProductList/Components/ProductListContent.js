import React, { Component } from 'react';
//import { PRODUCT_API } from '../../../config';
import './ProductListContent.scss';

const NUMBER_FORMAT_REGEXP = /\B(?=(\d{3})+(?!\d))/g;

class ProductListContent extends Component {
  constructor() {
    super();
    this.state = {
        products: [],
        isHovering:''
    }
  }
  
  componentDidMount = () => {
    fetch('http://10.58.7.216:8000/products/category')
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data.categories[0].subcategories[0].productList
          })
        } 
      )
    }

  handleMouseHover = (productID) => {
    this.setState(() => (
      { isHovering: productID})
    );
  }
  
  render () {
    const { products } = this.state;
    return (
      <div 
        className="ProductListContent"
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
        >
        <div 
          className="ProductListContent-intro" 
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
          >
          <span className="ProductListContent-intro-title" >
            처음의 시작
          </span>
          <p>
          각질, 불필요한 유분 그리고 기타 잔여물을 말끔히 씻어내어 피부를 깨끗하게 하는 것은 인텔리전트 스킨케어의 기초입니다.
          </p>
        </div>
        {products &&
        products.map(product => {
          const productID = product.id;
          return (
            <div 
              onMouseEnter={() => this.handleMouseHover(productID)}
              onMouseLeave={() => this.handleMouseHover(productID)}
              className="ProductListContent-item">
            <div className="ProductListContent-detail">
              <div className="ProductListContent-detail-image">
                <img width="400px"src={product.media[0].url} alt={product.name} />
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
              <div className="ProductListContent-detail-type">
                <div className="ProductListContent-detail-type-skintype">
                  <span>피부 타입</span>
                  <span>{(product.skin_types).join(', ')} 피부</span>
                </div>
                <div className="ProductListContent-detail-type-texture">
                  <span>사용감</span>
                  <span>{(product.feels).join(', ')}</span>
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

export default ProductListContent;