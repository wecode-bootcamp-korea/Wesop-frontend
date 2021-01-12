import React, { Component } from 'react';
import NavCategoryList from './NavCategoryList/NavCategoryList'
import NavProductList from './NavProductList/NavProductList';
import './NavList.scss'



class NavList extends Component {
  constructor() {
    super();
    this.state = {
      categoryTypeList : [{}, {}, {}], // [ { id: 1, typeName : '스킨', categoryList: [스킨케어, 클렌저, ...] }];
      categoryList : [{}, {}, {}], // [ { id: 1, categoryType id : ?,  categoryName: '스킨케어', productList: [아이리무버, 퓨리파잉 클렌저, ...]}];
      productList : [{}, {}, {}], // [ { id: 1, categoryid?: 1, productName: '아이리무버' }]
      showCategoryBox: false,
      showProductBox: false,
    };
  }

  // componentDidMount() {
    // this.setState({
    //   propertyList: mockData,
    // })
    // fetch('address placeholder',
    //  { method: 'GET'})
    //  .then(res => res.json())
    //  .then(res => {
    //    this.setState({
    //     categoryTypeList: res.data,
    //     categoryList: res,data,
    //    });
    //  });
  // }

  showCategoryBoxToggle = () => this.setState({ showCategoryBox: !this.state.showCategoryBox });

  showProductBoxToggle = () => this.setState({ showProductBox: !this.state.showProductBox });

  render () {
    const { categoryTypeList, categoryList, productList, showCategoryBox, showProductBox } = this.state;
    return (
      <div className={this.props.isHidden ? "hidden" : "NavList"}> 

        <div> 카테고리 리스트
          <ul>
            {categoryTypeList.map((categoryType) => {
              return (
                <li key={categoryType.id}>
                  <button onMouseEnter={this.showCategoryBoxToggle}>{categoryType.typeName}</button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className={ showCategoryBox ? "show" : "hidden" }>
          <ul>
            <NavCategoryList categoryList={categoryList} showProductBoxToggle={this.showProductBoxToggle}/>
          </ul>
        </div>

        <div className={ showProductBox ? "show" : "hidden" }> 제품
          <ul>
            <NavProductList productList={productList} />
          </ul>            
        </div>

      </div>
    );
  }

}

export default NavList;