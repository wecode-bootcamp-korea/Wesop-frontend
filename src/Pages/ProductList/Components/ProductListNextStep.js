import React, { Component } from 'react';
import './ProductListNextStep.scss';

class ProductListNextStep extends Component {
  render () {
    return (
      <div className="ProductListNextStep">
        <div className="ProductListNextStep-image">
          <img src="https://www.aesop.com/medias/Aesop-Skin-Purifying-Facial-Exfoliant-Paste-75mL-large.png?context=bWFzdGVyfGltYWdlc3w1MjE5NDl8aW1hZ2UvcG5nfGltYWdlcy9oOWMvaGZhLzg3OTc0MzkxMzE2NzgucG5nfGIzZTRkMWFmZTIzYjYzYjdkZjU3OTAwNmFkNDMwYzk3NmY1N2NmMWE1YWJjYzMzNDA2NjczMTcxOGVkZGZkYTI" alt="각질제거" />
        </div>
        <div className="ProductListNextStep-move">
          <span>다음 단계</span>
          <span>마찰로 만드는 아름다움</span>
          <div className="ProductListNextStep-move-button">
            각질제거<i class="fas fa-arrow-right"></i>           
          </div>
        </div>
      </div>
    )
  }
}

export default ProductListNextStep;