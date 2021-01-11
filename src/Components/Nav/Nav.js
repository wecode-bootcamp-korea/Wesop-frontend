import React, { Component } from 'react';
import CategoryMenu from './CategoryMenu/CategoryMenu';
import Login from './Login/Login';


class Nav extends Component {
  render () {
    return (
      <div> Nav Bar
        <CategoryMenu />
        <Login />
      </div>
    );
  }

}

export default Nav;