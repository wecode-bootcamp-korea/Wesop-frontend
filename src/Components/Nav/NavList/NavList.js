import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavCategoryList from './NavCategoryList/NavCategoryList'
import NavProductList from './NavProductList/NavProductList';
import {CATEGORIES_API} from '../../../config';
import {categories} from './PropertyData';
import './NavList.scss'



class NavList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    console.log(categories);
    console.log(this.state.categories);
    this.setState({
      categories: categories,
    })
    // fetch(CATEGORIES_API)
    //  .then(res => res.json())
    //  .then(res => {
    //    this.setState({
    //     categories: res.categories,
    //    });
    //  });
  }

  goToProductDetail = (id) => {
    this.props.handleNavListModal();
    this.props.history.push(`/product_detail/${id}`);
  }

  render () {
    const {categories} = this.state;
    const {isSubCategoryBoxVisible, isProductBoxVisible, categoryIdx, subCategoryIdx, showSubLength, showProductLength } = this.props;
    const { goToProductDetail } = this;
    const { toggleSubcategoryBox, toggleProductBox, removeAllBox, removeProductBox, toggleShowAllBox, showAllLength } = this.props;
    
    return (
      
      <div className="NavList" onMouseLeave={isProductBoxVisible !== 0 &&removeAllBox}> 

        <div className="categoriesWrapper" onMouseEnter={isProductBoxVisible !== 0 && removeProductBox}>
          <ul className="categories">
            {categories && categories.map((category, idx) => {
              return (
                <li key={category.id}>
                  <button className={(showSubLength === idx) ? "selected" : ""} onMouseOver={() => toggleSubcategoryBox(idx)}>
                    <Link to="/category_list">{category.type}</Link>
                  </button>
                  <span className={(showSubLength === idx) ? "length" : "hideNumber"}>{showAllLength(category)}</span>
                </li>
              )
            })}
          </ul>
        </div>

          <div className={isSubCategoryBoxVisible === 0 ? "hide" :  isSubCategoryBoxVisible === 1 ? "showUp second" : "hidden"}>
            <ul className="subCategories">
              <NavCategoryList 
              subCategories={ categories && categories[categoryIdx]?.subcategories } 
              toggleProductBox={toggleProductBox}
              toggleSubcategoryBox={toggleSubcategoryBox} 
              showProductLength={showProductLength}
              toggleShowAllBox={toggleShowAllBox}
              removeProductBox={removeProductBox}
              isProductBoxVisible={isProductBoxVisible}
              />
            </ul>
          </div>

          <div className={isProductBoxVisible === 0 ? "hide" :  isProductBoxVisible === 1 ? "showUp third" : "hidden"}>
            <ul className="products">
              <NavProductList
              productList={ categories?.length && categories[categoryIdx].subcategories[subCategoryIdx].productList}
              toggleProductBox={toggleProductBox} 
              goToProductDetail={goToProductDetail}
              />
            </ul>            
          </div>
      </div>
    );
  }
}

export default withRouter(NavList);