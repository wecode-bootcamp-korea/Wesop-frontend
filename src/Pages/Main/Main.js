import React, { Component } from 'react';
//import Nav from '../../Components/Nav/Nav';
import MainHeader from './Component/MainHeader';
import NewProduct from './Component/NewProduct';
import Slider from './Component/Slider';
import Location from './Component/Location';
import Quote from './Component/Quote';
//import Footer from '../../Components/Footer/Footer';
import './Main.scss'


class Main extends Component {
  constructor() {
    super();
    this.state = {
      candleProducts : [],
      seedProducts: []
    }
  }

  componentDidMount = () => {
    fetch('data/MainSliderProducts.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          candleProducts: data.MainCandleProducts,
          seedProducts: data.MainSeedProducts
          })
        } 
      )
    }

  render() { 
    const { candleProducts, seedProducts } = this.state;

    return (
      <div className="main">
        {/*<Nav />*/}
        <MainHeader />
        <Slider products={candleProducts}/>
        <NewProduct /> 
        <Slider products={seedProducts}/>       
        <Location />
        <Quote /> 
        {/*<Footer />*/}
      </div>
    );
  }
}

export default Main;