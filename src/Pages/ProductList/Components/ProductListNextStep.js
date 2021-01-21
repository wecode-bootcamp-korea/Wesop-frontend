import React, { Component } from 'react';
import './ProductListNextStep.scss';

class ProductListNextStep extends Component {
  render () {
    return (
      <div className="ProductListNextStep">
        <div className="ProductListNextStep-image">
          <img src="https://images.unsplash.com/photo-1564020426549-fabfb8c467ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="각질제거" />
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