import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './NavProductList.scss'


class NavProductList extends Component {

  render () {
    const { productList } = this.props; // product list with certain category id ? 

    return (
      <>
        <Link to="/product_list"><button className="showAll">모두 보기</button></Link> 
        {productList && productList.map((product) => {
          return (
            <li key={product.id}>
              <button onClick={() => this.props.goToProductDetail(product.id)}>
                {product.name}
              </button>
            </li>
          )
        })}
      </>
      

    );
  }

}

export default withRouter(NavProductList);