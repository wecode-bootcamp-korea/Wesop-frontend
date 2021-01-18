import React, { Component } from 'react';
import { Link, reactRouter } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import ProductsInfo from './ProductsInfo/ProductsInfo';
import ProductsInstruction from './ProductsInstruction/ProductsInstruction';
import './ProductsDetail.scss';


class ProductsDetail extends Component {
  constructor() {
    super();
    this.state = {
      products: [{
        id: 1,
        name: "아이 리무버",
        img: "../../images/example.png",
        category: "스킨",
        subCategory: "립 & 아이",
        description: "눈 주위의 민감한 피부를 달래고 진정시켜주는 마트리카리아가 포함된 부드러운 오일 제형의 아이 메이크업 리무브",
        
      },
      {

      },
      ]
    };
  }

  componentDidMount() {
    fetch('address placeholder',
     { method: 'GET'})
     .then(res => res.json())
     .then(res => {
       this.setState({
        products: res.products,
       });
     });
  }

  render () {
    const { products } = this.state;
    return (
      <div className="ProductsDetail">
        <Nav /> 
        <div className="detailHeader">
            <div>
              <Link to='/'>Wesop</Link>
            </div>
            <div>
              <img alt="testing" src="https://www.aesop.com/medias/Aesop-Skin-Remove-60mL-large.png?context=bWFzdGVyfGltYWdlc3wzNTg0NDJ8aW1hZ2UvcG5nfGltYWdlcy9oMTIvaDQxLzg4MDUwNzIxNDIzNjYucG5nfDM2ODViMzA0ZWU1NGU0MzBkOGZjMGZlNjlhMTU2YjE2ZTQ0ZTY2NjY5MjBhZDRiN2NhNDU4NzgyYmE2NGNkMGE"></img>
              {/* <img alt={products[0].name} src={products[0].img}></img> */}
              {/* selected products data's image file */}
            </div>
          <div className="productsInfo">
            <ProductsInfo products = {products} />
          </div>

        </div>

        <div className="offerTextBox">
          <p>무료 선물 포장 서비스</p>
          <p style={{color: "gray"}}>주문하신 모든 제품에 대해 선물 포장 서비스를 제공해 드립니다</p>
        </div>

        <div className="instructionBox">
          <ProductsInstruction />

        </div>

        <div className="testing">
          slider 섹션
        </div>


        {/* <Footer /> will come in when everything is merged and all */}
      </div>

    );
  }

}

export default ProductsDetail;


