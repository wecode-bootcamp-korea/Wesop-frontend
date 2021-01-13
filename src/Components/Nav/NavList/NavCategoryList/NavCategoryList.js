import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavCategoryList.scss'


class NavCategoryList extends Component {



  render () {
    const { subCategories, toggleProductBox } = this.props; // categoryList => category array with certain categoryType id?
  
    return (
      <>
        <Link to="/category_list"><button>모두 보기</button></Link>
        {subCategories && subCategories.map((subCategory) => {
          return (
            <li key={subCategory.id}>
              <button onMouseOver={() => toggleProductBox(subCategory.id)}>{subCategory.name}</button>
            </li>
          )
        })}
      </>
    );
  }

}

export default NavCategoryList;