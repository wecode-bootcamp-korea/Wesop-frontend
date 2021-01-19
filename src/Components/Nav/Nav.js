import React, { Component } from 'react';
import NavList from './NavList/NavList';
import Login from './Login/Login';
import './Nav.scss';

class Nav extends Component {
  constructor () {
    super();
    this.state= {
      isLoginShown: false,
      isNavListShown: false,
      // isCategoryBoxVisible: false,
    }
  }

  handleLoginModal = () => {
    this.setState({
      isLoginShown: !this.state.isLoginShown,
    })
  }

  handleNavListModal = () => {
    this.setState({
      isNavListShown: !this.state.isNavListShown,
    })
  }

  


  render () {
    const { isLoginShown, isNavListShown, isCategoryBoxVisible } = this.state;
    return (
      <nav className='Nav'>
        <div className="NavLeftWrap">
          <ul className="NavLeftBtns">
            <span onClick={this.handleNavListModal} >제품보기</span>
            <span>읽기</span>
            <span>스토어</span>
            <span>검색</span>
          </ul>
        </div>

        <div>

        </div>

        <div className='NavRightWrap'>
          <ul className='NavRightBtns'>
            <span onClick={this.handleLoginModal}>로그인</span>
            <span>카트</span>
          </ul>
         </div>
         
        <div className={isLoginShown ?'show' : 'hide'}>
            <Login />
        </div>
        <div className={isNavListShown ? 'showNavList' : 'hideNavList'}>
            <NavList isCategoryBoxVisible={isCategoryBoxVisible} /> 
        </div>
      </nav>
    );
  }
}
export default Nav;