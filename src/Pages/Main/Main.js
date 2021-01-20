import React, { Component } from 'react';
//import { PRODUCTS_API } from '../../config';
import MainHeader from './Component/MainHeader';
import NewProduct from './Component/NewProduct';
import Slider from './Component/Slider';
import Location from './Component/Location';
import Quote from './Component/Quote';
import Footer from '../../Components/Footer/Footer';
import './Main.scss'

class Main extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      firstFeed: false,
      secondFeed: false,
      thirdFeed: false,
      fourthFeed: false
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
    window.addEventListener("scroll", this.listenScrollEvent);
    }

  listenScrollEvent = () => {
    if (window.scrollY > 220) {
      this.setState({ firstFeed: true });
    }

    if (window.scrollY > 1000) {
      this.setState({ secondFeed: true });
    }

    if (window.scrollY > 1750) {
      this.setState({ thirdFeed: true });
    }

    if (window.scrollY > 2300) {
      this.setState({ fourthFeed: true });
    }
  };

  render() { 
    const { sliderProducts } = this.state;
    const { firstFeed, secondFeed, thirdFeed, fourthFeed } = this.state;

    return (
      <div className="main">
        <MainHeader />
        <Slider firstFeed={firstFeed} products={sliderProducts}/>
        <NewProduct secondFeed={secondFeed} />  
        <Slider products={sliderProducts}/>  
        <Location thirdFeed={thirdFeed} /> 
        <Quote fourthFeed={fourthFeed} />  
      </div>
    );
  }
}

export default Main;