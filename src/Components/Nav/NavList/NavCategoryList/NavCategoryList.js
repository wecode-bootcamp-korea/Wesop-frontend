import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavCategoryList.scss'


class NavCategoryList extends Component {



  render () {
    const { subCategories, toggleProductBox, showProductLength, toggleShowAllBox } = this.props; 
  
    return (
      <>
        <Link to="/category_list"><button className="showAll" onMouseOver={toggleShowAllBox}>모두 보기</button></Link>
        {subCategories && subCategories.map((subCategory, idx) => {
          return (
            <li key={subCategory.id}>
              <button className={(showProductLength === idx) ? "selected" : ""} onMouseOver={() => toggleProductBox(idx)}>
                <Link to="/product_list">{subCategory.name}</Link>
              </button>
              <span className={(showProductLength === idx) ? "length" : "hidden"}>{subCategory.productList.length}</span>
            </li>
          )
        })}
      </>
    );
  }

}

export default NavCategoryList;