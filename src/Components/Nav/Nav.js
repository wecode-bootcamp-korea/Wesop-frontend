import React, { Component } from 'react';
import NavList from './NavList/NavList';
import Login from './Login/Login';


class Nav extends Component {
  render () {
    return (
      <div> Nav Bar
        <NavList />
        <Login />
      </div>
    );
  }

}

export default Nav;