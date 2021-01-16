import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import MainHeader from './Component/MainHeader';
import CandleSlider from './Component/CandleSlider';
import NewProduct from './Component/NewProduct';
import Location from './Component/Location';
import Quote from './Component/Quote';
import './Main.scss'

class Main extends Component {
  render() { 
    return (
      <div className="main">
        <Nav />
        <MainHeader />
        <CandleSlider />
        <NewProduct />        
        <Location />
        <Quote /> 
      </div>
    );
  }
}

export default Main;