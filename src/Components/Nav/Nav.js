import React, { Component } from 'react';
import NavList from './NavList/NavList';
import Login from './Login/Login';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isHidden : true,
    }
  }

  handleNavList = e => {
    e.preventDefault();
    this.setState({
      isHidden : !this.state.isHidden,
    })
    console.log(this.state.isHidden)
  }

  render () {
    const { isHidden } = this.state;
    return (
      <div className="Nav">
        <button onClick={this.handleNavList}>제품 정보</button>
        <NavList isHidden={this.state.isHidden}/>
        <Login />
      </div>
    );
  }

}

export default Nav;