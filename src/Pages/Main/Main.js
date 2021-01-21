import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
      products: [],
      products2: []
    }
  }

  componentDidMount = () => {
    fetch("http://10.58.7.216:8000/products/category")
      .then(res => res.json())
      .then((data) => {
        this.setState({
          products: data.categories[0].subcategories[0].productList,
          products2:data.categories[1].subcategories[0].productList,
          })
        } 
      )
    }

  goToDetail = (id) => {
    this.props.history.push(`/product_detail/${id}`)
  }

  render() { 
    const { products, products2 } = this.state;
    return (
      <div className="main">
        <MainHeader />
        <Slider products={products} goToDetail={this.goToDetail}/>
        <NewProduct />  
        <Slider products={products2}/>
        <Location /> 
        <Quote />  
      </div>
    );
  }
}

export default withRouter(Main);