import React, { Component } from 'react';
import Slider from "react-slick";
import './MainSlider.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MainSlider extends Component {
  constructor() {
    super();
    this.state = {
        mainSliderData: []
    }
  }
  
  componentDidMount = () => {
      fetch('data/MainSliderData.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                mainSliderData: data.mainSliderData
            })
        })
  }

  render() {
    const settings = {
      className: "slider variable-width",
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
      draggable: true,
      infinite: false
    }

    return (
        <section className="mainSection-carouselSlider-1">
        <Slider {...settings}>
            {this.state.mainSliderData && 
             this.state.mainSliderData.map( element => {
                 return (
                    <div key={element.id}>
                    <img alt={element.productName} src={element.url} height="400px"/>
                    <span>
                        <p>{element.productName}</p>
                        <p>{element.productDescription}</p>
                    </span>
                    </div>
                 )
             })}
        </Slider>
        </section>
    );
  }

}

export default MainSlider;