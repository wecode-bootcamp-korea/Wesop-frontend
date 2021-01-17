import React, { Component } from 'react';

import './ProductListContent.scss';

class ProductListContent extends Component {
  constructor() {
    super();
    this.state = {
        Products: [],
        isHovering: false
    }
  }
  
  componentDidMount = () => {
    fetch('http://192.168.200.114:8000/products')
      .then(res => res.json())
      .then(res => {
        this.setState({
          Products: res.products
          })
        } 
      )
    }

  handleMouseHover = () => {
    console.log("마우스오버");
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render () {
    console.log(this.state.Products);
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
        {this.state.Products &&
        this.state.Products.map(item => {
          const image = Object.values(item.media)[0];
          const regex = /::/;
          const idx = image.match(regex).index;
          return (
            <div 
              onMouseEnter={this.handleMouseHover}
              onMouseLeave={this.handleMouseHover}
              className="ProductListContent-item">
            <div className="ProductListContent-detail">
              <div className="ProductListContent-detail-image">
                <img width="400px"src={image.slice(0, idx)} alt={item.name} />
              </div>
              <div className="ProductListContent-detail-info">
                <div className="ProductListContent-detail-info-name">
                  <span>{item.name}</span>
                </div>
                <div className="ProductListContent-detail-info-price">
                  <span>{item.size}</span>
                  <span>/</span>
                  <span>₩{Math.floor(item.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                </div>
              </div>
              <div className="ProductListContent-detail-type">
                <div className="ProductListContent-detail-type-kindof">
                  <span>피부 타입</span>
                  <span>{Object.values(item.skin_types).join(', ')}</span>
                </div>
                <div className="ProductListContent-detail-type-texture">
                  <span>사용감</span>
                  <span>{Object.values(item.feels).join(', ')}</span>
                </div>
              </div>
            </div>
            { this.state.isHovering &&
            <div className="ProductListContent-addcart">
              <span>카트에 추가</span><span>-</span><span>₩{Math.floor(item.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            </div> }
          </div>
          )
        })}
     </div>
    )
  }
}

export default ProductListContent;