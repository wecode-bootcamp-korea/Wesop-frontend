import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavCategoryList.scss'


class NavCategoryList extends Component {



  render () {
    const { categoryList, showProductBoxToggle } = this.props; // categoryList => category array with certain categoryType id?
  
    return (
      <>
        <Link to="/category_list"> 모두 보기 </Link>
        {categoryList.map((category) => {
          return (
            <li key={category.id}>
              <button onMouseEnter={showProductBoxToggle}>{category.categoryName}</button>
            </li>
          )
        })}
      </>
    );
  }

}

export default NavCategoryList;