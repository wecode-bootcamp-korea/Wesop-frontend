import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import MainHeader from './Component/MainHeader';
import CandleSlider from './Component/CandleSlider';
import NewProduct from './Component/NewProduct';
import SeedSlider from './Component/SeedSlider';
import Location from './Component/Location';
import Quote from './Component/Quote';
//import Footer from '../../Components/Footer/Footer';
import './Main.scss'


class Main extends Component {
  constructor() {
    super();
    this.state = {
      seedProducts: []
    }
  }

  componentDidMount = () => {
    fetch('data/MainSliderProducts.json')
      .then(res => res.json())
      .then((data) => {
        console.log(data.MainSeedProducts);
        this.setState({
          seedProducts: data.MainSeedProducts
          })
        } 
      )
    }

  render() { 
    const { seedProducts } = this.state;

    return (
      <div className="main">
        <Nav />
        <MainHeader />
        <CandleSlider />
        <NewProduct /> 
        <SeedSlider products={seedProducts}/>       
        <Location />
        <Quote /> 
        {/*<Footer />*/}
      </div>
    );
  }
}

export default Main;