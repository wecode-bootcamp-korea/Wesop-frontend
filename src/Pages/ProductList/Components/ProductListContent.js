import React, { Component } from 'react';
import './ProductListContent.scss';

class ProductListContent extends Component {
  render () {
    return (
      <div className="ProductListContent">
        <div className="ProductListContent-detail">
          <div className="ProductListContent-detail-image">
            <img width="400px"src="https://www.aesop.com/medias/Aesop-Skin-Remove-60mL-large.png?context=bWFzdGVyfGltYWdlc3wzNTg0NDJ8aW1hZ2UvcG5nfGltYWdlcy9oMTIvaDQxLzg4MDUwNzIxNDIzNjYucG5nfDM2ODViMzA0ZWU1NGU0MzBkOGZjMGZlNjlhMTU2YjE2ZTQ0ZTY2NjY5MjBhZDRiN2NhNDU4NzgyYmE2NGNkMGE" alt="remover" />
          </div>
          <div className="ProductListContent-detail-info">
            <div className="ProductListContent-detail-info-name">
              <span>아이 리무버</span>
            </div>
            <div className="ProductListContent-detail-info-price">
              <span>60ml</span>
              <span>/</span>
              <span>30,000</span>
            </div>
          </div>
          <div className="ProductListContent-detail-type">
            <div className="ProductListContent-detail-type-kindof">
              <span>피부 타입</span>
              <span>모든 피부, 메이크업을 한 피부</span>
            </div>
            <div className="ProductListContent-detail-type-texture">
              <span>사용감</span>
              <span>진정된, 생기있는</span>
            </div>
          </div>
        </div>
        <div className="ProductListContent-addcart">
          <span>카트에 추가</span><span>-</span><span>₩30,000</span>
        </div>
      </div>
    )
  }
}

export default ProductListContent;