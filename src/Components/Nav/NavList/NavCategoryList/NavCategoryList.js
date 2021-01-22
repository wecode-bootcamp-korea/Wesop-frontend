import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './NavCategoryList.scss'


class NavCategoryList extends Component {



  render () {
    const { subCategories, toggleProductBox, showProductLength, removeProductBox, isProductBoxVisible} = this.props; 
  
    return (
      <>
        <Link to="/product_list"><button className="showAll" onMouseOver={isProductBoxVisible === 1 && removeProductBox}>모두 보기</button></Link>
        {subCategories && subCategories.map((subCategory, idx) => {
          return (
            <li key={subCategory.id}>
              <button className={(showProductLength === idx) ? "selected" : ""} onMouseOver={() => toggleProductBox(idx)}>
                <Link to="/product_list">{subCategory.name}</Link>
              </button>
              <span className={(showProductLength === idx) ? "length" : "hideNumber"}>{subCategory.productList.length}</span>
            </li>
          )
        })}
      </>
    );
  }

}

export default withRouter(NavCategoryList);