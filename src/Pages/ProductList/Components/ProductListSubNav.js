import React, { Component } from 'react';
import './ProductListSubNav.scss';

class ProductListSubNav extends Component {
  render () {
    return (
      <nav className="ProductListSubNav">
        <ul>
          <li>모든 스킨 |</li>
          <li>클렌저</li>
          <li>각질 제거</li>
          <li>트리트먼트 & 마스크</li>
          <li>토너</li>
          <li>하이드레이터</li>
          <li>립 & 아이</li>
          <li>쉐이빙</li>
          <li>선 케어 / SPF</li>
          <li>키트</li>
          <li>스킨케어 세트 추천</li>
        </ul>
        <div className="ProductListSubNav-filter-box">
          <span>필터</span><i className="fas fa-sort-down"></i>
        </div>
      </nav>
    )
  }
}

export default ProductListSubNav;