import React, { Component } from 'react';
import NavCategoryList from './NavCategoryList/NavCategoryList'
import NavProductList from './NavProductList/NavProductList';
import { categories } from './PropertyData'
import './NavList.scss'



class NavList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoryIdx: 0,
      subCategoryIdx: 0,
      showSubLength: false,
      showProductLength: false,
      isSubCategoryBoxVisible: false,
      isProductBoxVisible: false,
    };
  }

  componentDidMount() {
    this.setState({
      categories : categories,
    })
    // fetch('address placeholder',
    //  { method: 'GET'})
    //  .then(res => res.json())
    //  .then(res => {
    //    this.setState({
    //     categories: res,data,
    //    });
    //  });
  }

  toggleSubcategoryBox = (idx) => {
    this.setState({
      isSubCategoryBoxVisible: true,
      isProductBoxVisible: false,
      categoryIdx: idx,
      showSubLength: idx,
    })
  };

  toggleProductBox = (idx) => {
    this.setState({
      isProductBoxVisible: true,
      subCategoryIdx: idx,
      showProductLength: idx,
    })
  };

  removeAllBox = () => {
    this.setState({
      isSubCategoryBoxVisible: false,
      isProductBoxVisible: false,
      showSubLength: false,
      showProductLength: false,
    })
  }

  removeProductBox = () => {
    this.setState({
      isProductBoxVisible: false,
      showProductLength: false,
    })
  }

  render () {
    const { categories, isSubCategoryBoxVisible, isProductBoxVisible, categoryIdx, subCategoryIdx, showSubLength, showProductLength } = this.state;
    const { toggleSubcategoryBox, toggleProductBox, removeAllBox,removeProductBox } = this;
    
    return (
      <div className="NavList" onMouseLeave={removeAllBox}> 

        <div onMouseEnter={removeProductBox}>
          <ul className="categories">
            {categories && categories.map((category, idx) => {
              return (
                <li key={category.id}>
                  <button className={(showSubLength === idx) ? "selected" : ""} onMouseOver={() => toggleSubcategoryBox(idx)}>{category.type}</button>
                  <span className={(showSubLength === idx) ? "length" : "hidden"}>{category.subCategories.length}</span>
                </li>
              )
            })}
          </ul>
        </div>

          <div className={isSubCategoryBoxVisible ? "" : "hidden"}>
            <ul className="subCategories">
              <NavCategoryList 
              subCategories={ categories.length && categories[categoryIdx].subCategories } 
              toggleProductBox={toggleProductBox}
              toggleSubcategoryBox={toggleSubcategoryBox} 
              showProductLength={showProductLength}
              />
            </ul>
          </div>

          <div className={isProductBoxVisible ? "" : "hidden"}>
            <ul className="products">
              <NavProductList
              productList={ categories.length && categories[categoryIdx].subCategories[subCategoryIdx].productList}
              toggleProductBox={toggleProductBox} />
            </ul>            
          </div>

      </div>

    );
  }
}

export default NavList;