import React, { Component } from 'react';
import Login from './Login/Login';
import NavList from './NavList/NavList';
import './Nav.scss';

class Nav extends Component {
  constructor () {
    super();
    this.state= {
      isLoginShown: false,
      isNavListShown: false,

      categoryIdx: 0,
      subCategoryIdx: 0,
      showSubLength: false,
      showProductLength: false,
      isSubCategoryBoxVisible: 0,
      isProductBoxVisible: 0,
    }
  }

  handleLoginModal = () => {
    this.setState({
      isLoginShown: !this.state.isLoginShown,
    })
  }

  handleNavListModal = () => {
    this.setState({
      isSubCategoryBoxVisible: 0,
      isProductBoxVisible: 0,
      isNavListShown: !this.state.isNavListShown,
    })
  }

  toggleSubcategoryBox = (idx) => {
    this.setState({
      isSubCategoryBoxVisible: 1,
      categoryIdx: idx,
      showSubLength: idx,
    })
    this.state.isProductBoxVisible !== 0 && this.setState({isProductBoxVisible: 2})
  };

  toggleProductBox = (idx) => {
    this.setState({
      isProductBoxVisible: 1,
      subCategoryIdx: idx,
      showProductLength: idx,
    })
  };

  removeAllBox = () => {
    this.setState({
      isSubCategoryBoxVisible: 2,
      isProductBoxVisible: 2,
      showSubLength: false,
      showProductLength: false,
    })
  }

  removeProductBox = () => {
    this.setState({
      isProductBoxVisible: 2,
      showProductLength: false,
    })
  }

  toggleShowAllBox = () => {
    this.setState({
      isProductBoxVisible: 2,
      showProductLength: false,
    })
  }

  goToProductDetail = (id) => {
    this.handleNavListModal();
    this.props.history.push(`/product_detail/${id}`);
  }

  showAllLength = category => {
    let result = 0;
    for (let i = 0; i < category.subcategories.length; i++) {
      result += (category.subcategories[i].productList.length);
    }
    return result;
  }

  

  render () {
    const { isLoginShown, isNavListShown, isCategoryBoxVisible } = this.state;
    const {handleNavListModal, toggleSubcategoryBox, toggleProductBox, removeAllBox, removeProductBox, toggleShowAllBox, showAllLength } = this;
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
            <Login handleLoginModal={this.handleLoginModal}/>
        </div>
        <div className={isNavListShown ? 'showNavList' : 'hideNavList'}>
            <NavList
            isCategoryBoxVisible={isCategoryBoxVisible}
            handleNavListModal={handleNavListModal}
            toggleSubcategoryBox={toggleSubcategoryBox}
            toggleProductBox={toggleProductBox}
            removeAllBox={removeAllBox}
            removeProductBox={removeProductBox}
            toggleShowAllBox={toggleShowAllBox}
            showAllLength={showAllLength}
            categoryIdx={this.state.categoryIdx}
            subCategoryIdx={this.state.subCategoryIdx}
            showSubLength={this.state.showSubLength}
            showProductLength={this.state.showProductLength}
            isSubCategoryBoxVisible={this.state.isSubCategoryBoxVisible}
            isProductBoxVisible={this.state.isProductBoxVisible}
            /> 
        </div>
      </nav>
    );
  }
}
export default Nav;