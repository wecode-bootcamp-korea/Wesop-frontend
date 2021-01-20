import React, { Component } from 'react';
//import { PRODUCTS_API } from '../../config';
import MainHeader from './Component/MainHeader';
import NewProduct from './Component/NewProduct';
import Slider from './Component/Slider';
import Location from './Component/Location';
import Quote from './Component/Quote';
import './Main.scss'

class Main extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount = () => {
    fetch("http://10.58.4.30:8000/products/product")
      .then(res => res.json())
      .then((data) => {
        this.setState({
          sliderProducts: data.products
          })
        } 
      )
    }

  render() { 
    const { sliderProducts } = this.state;

    return (
      <div className="main">
        <MainHeader />
        <Slider products={sliderProducts}/>
        <NewProduct />  
        <Slider products={sliderProducts}/>  
        <Location /> 
        <Quote />  
      </div>
    );
  }
}

export default Main;