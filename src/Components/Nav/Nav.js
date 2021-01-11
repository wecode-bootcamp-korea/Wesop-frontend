import React, { Component } from 'react';
// import CategoryMenu from './CategoryMenu/CategoryMenu';
// import Login from './Login/Login';
import './Nav.scss';


class Nav extends Component {
  render () {
    return (
      <nav className="Nav">  
        {/* <CategoryMenu />
        <Login /> */}
        <div>
          <ul>
            <li>제품보기</li>
            <li>읽기</li>
            <li>스토어</li>
            <li>검색</li>
          </ul>
        </div>
        <div>


        </div>
        <div>
          <ul>
            <li>로그인</li>
            <li>카트</li>
          </ul>
        </div>

      </nav>
    );
  }

}

export default Nav;