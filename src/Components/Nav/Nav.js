import React, { Component } from 'react';
// import CategoryMenu from './CategoryMenu/CategoryMenu';
import Login from './Login/Login';
// import NavList from './NavList/NavList'; // 성현님 컴포넌트 
import './Nav.scss';

class Nav extends Component {
  constructor () {
    super();
    this.state= {
      isLoginShown: false,
      isNavListShown: false,
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
    const { isLoginShown, isNavListShown } = this.state;
    return (
      <nav className="Nav">  
    
        <div>
          <ul>
            <span onClick={this.handleNavListModal} >제품보기</span>
            
            <span>읽기</span>
            <span>스토어</span>
            <span>검색</span>
          </ul>
        </div>
        <div>

        </div>
        <div>
          <ul>
            <span onClick={this.handleLoginModal}>로그인</span>
            <span>카트</span>
          </ul>
         </div>

         <div className={isLoginShown ?"show" : "hide"}>
            <Login />
         </div>
         
         <div className={isNavListShown ? "show" : "hide"}>
            {/* <NavList /> // 컴포넌트 import 하기 전  */}
         </div>
      </nav>
    );
  }
}

export default Nav;