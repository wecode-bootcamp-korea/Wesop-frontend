import React, { Component } from 'react';
//import Slider from "react-slick";
import './MainSlider.scss'
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class MainSlider extends Component {
  constructor() {
    super();
    this.state = {
        mainSliderProducts: []
    }
  }
  
  componentDidMount = () => {
    fetch('data/MainSliderProducts.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          mainSliderProducts: data
          })
        } 
      )
    }

  render() {
    const { mainSliderProducts } = this.state

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1500 },
        items: 4,
        slidesToSlide: 1 
      },
      tablet: {
        breakpoint: { max: 1500, min: 700 },
        items: 2,
        slidesToSlide: 1
      },
      mobile: {
        breakpoint: { max: 700, min: 0 },
        items: 1,
        slidesToSlide: 1
      }
    };

    return (
        <section className="mainSection-Slider">
        <Carousel responsive={responsive} >
            {mainSliderProducts && 
             mainSliderProducts.map( item => {
                 return (
                  <div  key={item.id} className="mainSection-Slider-items-list">
                    <div className="mainSection-Slider-items">
                      <img alt={item.name} src={item.url} height="400px"/>
                      <span className="mainSection-Slider-items-description">
                          <span>{item.name}</span>
                          <span>{item.description}</span>
                      </span>
                    </div>   
                  </div>
                  )
              })}
        </Carousel>
        </section>
    );
  }

}

export default MainSlider;