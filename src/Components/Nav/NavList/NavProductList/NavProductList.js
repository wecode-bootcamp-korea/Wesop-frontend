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
        <Link to="/category_list"><button>모두 보기</button></Link> 
        {productList && productList.map((product) => {
          return (
            <li key={product.id}>
              <button onClick={this.redirectToDetail}>{product.name}</button>
            </li>
          )
        })}
      </>
      

    );
  }

}

export default withRouter(NavProductList);