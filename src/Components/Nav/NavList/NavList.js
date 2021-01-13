import React, { Component } from 'react';
import NavCategoryList from './NavCategoryList/NavCategoryList'
import NavProductList from './NavProductList/NavProductList';
import { categories } from './PropertyData'
import './NavList.scss'



class NavList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      subCategories: [],
      productList: [],
      currentSubId: 1,
      currentProductId: 1,
      isCategoryBoxVisible: false,
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
    //     categoryTypeList: res.data,
    //     categoryList: res,data,
    //    });
    //  });
  }

  toggleSubcategoryBox = (subId) => {
    this.setState({
      isCategoryBoxVisible: !this.state.isCategoryBoxVisible,
      isProductBoxVisible: false,
      subCategories: categories[(subId-1)].subCategories,
      currentSubId: subId,

    })
  };

  toggleProductBox = (productId) => {
    this.setState({
      isProductBoxVisible: !this.state.isProductBoxVisible,
      productList: categories[(this.state.currentSubId-1)].subCategories[productId-1].productList,
      currentProductId: productId,
    })
  };

  render () {
    const { categories, isCategoryBoxVisible, isProductBoxVisible, currentSubId, currentProductId } = this.state;

    return (
      <div className={this.props.isHidden ? "hidden" : "NavList"} > 

        <div>
          <ul className="categories">
            {categories && categories.map((category) => {
              return (
                <li key={category.id}>
                  <button onMouseOver={() => this.toggleSubcategoryBox(category.id)}>{category.type}</button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className={isCategoryBoxVisible ? "" : "hidden"}>
          <ul className="subCategories">
            <NavCategoryList 
            // subCategories={ categories ? [] : categories[(currentSubId-1)].subCategories } // 이거 안돼요
            subCategories={this.state.subCategories}
            toggleProductBox={this.toggleProductBox}/>
          </ul>
        </div>

        <div className={isProductBoxVisible ? "" : "hidden"}>
          <ul className="products">
            <NavProductList
            // productList={ categories ? [] : categories[(currentSubId-1)].subCategories[currentProductId-1].productList} /> // 같이 안돼요
            productList={ this.state.productList } />
          </ul>            
        </div>

      </div>
    );
  }

}

export default NavList;