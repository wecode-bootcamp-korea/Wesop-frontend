import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mockData from './PropertyData';
import './NavList.scss'


class NavList extends Component {
  constructor() {
    super();
    this.state = {
      propertyList : [], // [ { id: 1, categoryName: '', typeName: '', productName: '',}, { id: 2, categoryName: '', typeName: '', productName: '',} ]
      showTypeBox: false,
      showProductBox: false,
    };
  }

  componentDidMount() {
    this.setState({
      propertyList: mockData,
    })
    // fetch('address placeholder',
    //  { method: 'GET'})
    //  .then(res => res.json())
    //  .then(res => {
    //    this.setState({
    //     propertyList: res.data,
    //    });
    //  });
  }

  showTypeBoxToggle = () => this.setState({ showTypeBox: !this.state.showTypeBox });

  showProductBoxToggle = () => this.setState({ showProductBox: !this.state.showProductBox })

  render () {
    const { propertyList, showTypeBox, showProductBox } = this.state;
    return (
      <div className="NavList"> 

        <div> Category List 
          <ul>
            {propertyList.map((category) => {
              return (
                <li key={category.id}>
                  <button onMouseEnter={this.showTypeBoxToggle}>{category.categoryName}</button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className={ showTypeBox ? "show" : "hidden" }>
          <Link to="/category_list"> 모두 보기 </Link>
          <ul>
            {propertyList.map((type) => {
              return (
                <li key={type.id}>
                  <button onMouseEnter={this.showProductBoxToggle}>{type.typeName}</button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className={ showProductBox ? "show" : "hidden" }>
          {/* <span> 모두 보기 </span> */}
          <ul>
            {propertyList.map((product) => {
              return (
                <li key={product.id}>
                  <Link to="/product_detail"> {product.productName} </Link>
                </li>
              )
            })}
          </ul>            
        </div>

      </div>
    );
  }

}

export default NavList;