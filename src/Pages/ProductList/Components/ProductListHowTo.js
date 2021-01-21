import React, { Component } from 'react';
import './ProductListHowTo.scss';

class ProductListHowTo extends Component {
  render () {
    return (
      <div className="ProductListHowTo">
				<div className="ProductListHowTo-intro">
					<div className="ProductListHowTo-intro-innerwrapper">
						<span>피부를 세정하는 방법</span>
						<p>섬세하면서도 탄력있는 피부를 위해 규칙적으로 부드럽게 클렌징해야 합니다. 건강한 피부를 위한 스킨 케어 루틴에서 클렌징과 그 기본적인 역할을 보다 잘 이해할 수 있도록 계속 읽어보시기를 권합니다.</p>
						<div className="ProductListHowTo-intro-button">
							클렌징 보기<i class="fas fa-arrow-right"></i>
						</div>
					</div>
				</div>
				<div className="ProductListHowTo-picture">
					<img src="https://www.aesop.com/u1nb1km7t5q7/1iiKSDIrkiig0T034BqQlI/bdb5109bd1f301407bdf53b9758800ab/Aesop-Generic-Images-Skin-Care-Workshop-1-Mid-Desktop-1690x950px.jpg" alt="intro" />
				</div>
      </div>
    )
  }
}

export default ProductListHowTo;