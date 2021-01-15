import React, { Component } from 'react';
import CategoryMenu from './CategoryMenu/CategoryMenu';
import Login from './Login/Login';
import './Nav.scss';


class Nav extends Component {
  constructor() {
    super()
    this.state= {
      isLoginShown: false
    }
  }

  handleLoginModal = () => {
    this.setState({
      isLoginShown : !this.state.isLoginShown,
    })
  }

  render () {
    const {isLoginShown} = this.state
    return (
      <nav className="Nav">
        <div className="NavLeftWrap">
          <ul className="NavLeftBtns">
            <span>제품보기</span>
            <span>읽기</span>
            <span>스토어</span>
            <span>검색</span>
          </ul>
        </div>
        <div>
        </div>
        <div className="NavRightWrap">
          <ul className="NavRightBtns">
            <span onClick={this.handleLoginModal}>로그인</span>
            <span>카트</span>
          </ul>
        </div>
        <div className={isLoginShown ? "show" : "hide"}>
          <Login handleLoginModal={this.handleLoginModal} />
        </div>
      
      
      </nav>

      
    );
  }

}

export default Nav;