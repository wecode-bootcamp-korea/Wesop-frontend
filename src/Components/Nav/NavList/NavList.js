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
      isProductBoxVisible: false,
      isCategoryBoxVisible: false,
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
    //     categoryTypeList: res.data,
    //     categoryList: res,data,
    //    });
    //  });
  }

  toggleSubcategoryBox = (idx) => {
    this.setState({
      isCategoryBoxVisible: true,
      isProductBoxVisible: false,
      categoryIdx: idx,
    })
  };

  toggleProductBox = (idx) => {
    this.setState({
      isProductBoxVisible: true,
      subCategoryIdx: idx,
    })
  };

  removeAllBox = () => {
    this.setState({
      isCategoryBoxVisible: false,
      isProductBoxVisible: false,
    })
  }

  removeProductBox = () => {
    this.setState({
      isProductBoxVisible: false,
    })
  }

  render () {
    const { categories, isCategoryBoxVisible, isProductBoxVisible, categoryIdx, subCategoryIdx } = this.state;
    const { toggleSubcategoryBox, toggleProductBox, removeAllBox,removeProductBox } = this;
    
    return (
      <div className="NavList" onMouseLeave={removeAllBox}> 

        <div onMouseEnter={removeProductBox}>
          <ul className="categories">
            {categories && categories.map((category, idx) => {
              return (
                <li key={category.id}>
                  <button onMouseOver={() => toggleSubcategoryBox(idx)}>{category.type}</button>
                </li>
              )
            })}
          </ul>
        </div>

          <div className={isCategoryBoxVisible ? "" : "hidden"}>
            <ul className="subCategories">
              <NavCategoryList 
              subCategories={ categories.length && categories[categoryIdx].subCategories } 
              toggleProductBox={toggleProductBox}
              toggleSubcategoryBox={toggleSubcategoryBox}/>
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