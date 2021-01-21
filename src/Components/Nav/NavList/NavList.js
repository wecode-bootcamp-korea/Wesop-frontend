import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavCategoryList from './NavCategoryList/NavCategoryList'
import NavProductList from './NavProductList/NavProductList';
import { categories } from './PropertyData';
import {CATEGORIES_API} from '../../../config';
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
      showMainImage: false,
    };
  }

  componentDidMount() {
    fetch(CATEGORIES_API)
     .then(res => res.json())
     .then(res => {
       this.setState({
        categories: res.categories,
       });
     });
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
      showMainImage: false,
    })
  };

  removeAllBox = () => {
    this.setState({
      isSubCategoryBoxVisible: false,
      isProductBoxVisible: false,
      showSubLength: false,
      showProductLength: false,
      showMainImage: false,
    })
  }

  removeProductBox = () => {
    this.setState({
      isProductBoxVisible: false,
      showProductLength: false,
      showMainImage: false,
    })
  }

  toggleShowAllBox = () => {
    this.setState({
      showMainImage: true,
      isProductBoxVisible: false,
      showProductLength: false,
    })
  }

  goToProductDetail = (id) => {
    this.props.handleNavListModal();
    this.props.history.push(`/product_detail/${id}`);
  }

  showAllLength = category => {
    let result = 0;
    for (let i = 0; i < category.subcategories.length; i++) {
      result += (category.subcategories[i].productList.length);
    }
    return result;
  }



  render () {
    const { categories, isSubCategoryBoxVisible, isProductBoxVisible, categoryIdx, subCategoryIdx, showSubLength, showProductLength, showMainImage } = this.state;
    const { toggleSubcategoryBox, toggleProductBox, removeAllBox, removeProductBox, toggleShowAllBox, showAllLength, goToProductDetail } = this;

    return (
      
      <div className="NavList" onMouseLeave={removeAllBox}> 

        <div onMouseEnter={removeProductBox}>
          <ul className="categories">
            {categories && categories.map((category, idx) => {
              return (
                <li key={category.id}>
                  <button className={(showSubLength === idx) ? "selected" : ""} onMouseOver={() => toggleSubcategoryBox(idx)}>
                    <Link to="/category_list">{category.type}</Link>
                  </button>
                  <span className={(showSubLength === idx) ? "length" : "hidden"}>{showAllLength(category)}</span>
                </li>
              )
            })}
          </ul>
        </div>

          <div className={isSubCategoryBoxVisible ? "" : "hidden"}>
            <ul className="subCategories">
              <NavCategoryList 
              subCategories={ categories.length && categories[categoryIdx].subcategories } 
              toggleProductBox={toggleProductBox}
              toggleSubcategoryBox={toggleSubcategoryBox} 
              showProductLength={showProductLength}
              toggleShowAllBox={toggleShowAllBox}
              />
            </ul>
          </div>

          <div className={isProductBoxVisible ? "lastChild" : "hidden"}>
            <ul className="products">
              <NavProductList
              productList={ categories.length && categories[categoryIdx].subcategories[subCategoryIdx].productList}
              toggleProductBox={toggleProductBox} 
              goToProductDetail={goToProductDetail}
              />
            </ul>            
          </div>

          <div className={showMainImage ? "lastChild" : "hidden"}>
            <img alt="testing" src="https://www.aesop.com/medias/Aesop-Shop-Navigation-SkinCare-960x1600px.jpg?context=bWFzdGVyfGltYWdlc3wyOTMwMzF8aW1hZ2UvanBlZ3xpbWFnZXMvaGEyL2g2ZS84ODA5OTU3NTg5MDIyLmpwZ3xkY2U4Y2Y0NDRlNTc3YzYwMzJjYjBlMjVjNDM3Njg4MTI2ZDZhYWE4MjM2YTJhZTViNmZhMGVjNTNhNzZhOTgw"></img>
          </div>

      </div>

    );
  }
}

export default withRouter(NavList);