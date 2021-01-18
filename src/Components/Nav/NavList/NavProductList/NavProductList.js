import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './NavProductList.scss'


class NavProductList extends Component {
  // redirectToDetail = e => {
  //   e.preventDefault();
  //   this.props.history.push('/product_detail');
  // }

  render () {
    const { productList } = this.props; // product list with certain category id ? 

    return (
      <>
        <Link to="/product_list"><button className="showAll">모두 보기</button></Link> 
        {productList && productList.map((product) => {
          return (
            <li key={product.id}>
              <button onClick={this.redirectToDetail}>
                <Link to={`/product_detail/${product.id}`}>{product.name}</Link>
              </button>
            </li>
          )
        })}
      </>
      

    );
  }

}

export default NavProductList;