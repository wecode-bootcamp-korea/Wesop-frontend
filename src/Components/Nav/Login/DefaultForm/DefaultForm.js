import React, { Component } from "react";
import './DefaultForm.scss' ;

class DefaultForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      isValid: false,
      isError: false,
    }
  }

  // 사용자가 입력한 id값 저장 >>> state
  handleEmailValue = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  
  handleContinueButton = () => {   
    fetch("http://10.58.5.188:8000/user/check", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
      })
    })
    .then((response) => response.json())
    .then((response) => {this.props.handleCurrentView(response.message); 
    })  
    }
  
  checkEmailState = () => {
    const { email } = this.state;
    const isValid = (email.includes("@") && email.length > 5);
    this.setState ({
      isValid
    });
  //   // if (this.state.isvalid === false) {
  //   //   this.setState({
  //   //     isError: true
  //   //   })   
  //   }
  //   // this.state.isValid && this.handleContinueButton();
   }




  render() {
    return (
      <>
        <div className="head">
            <span className="closeButton" onClick={this.handleButton}>
              X
            </span>
          </div>
          <div className="LoginNotice">
            <h2 className="LoginTitle">안녕하세요</h2>
            <p className="LoginSubtitle">유효한 이메일 주소를 입력하세요</p>
          </div>
          <div className="LoginEmail">
            <input
              type="email"
              placeholder="이메일 주소"
              onChange={this.handleEmailValue}
            />
            <div className={this.state.isError ?  'active' : 'inactive'}>유효한 이메일을 입력해주세요.</div>
            
          </div>
          <div className="BtnWrap">
            <button
              className="continueBt"
              type="button"
              onClick={this.checkEmailState}
              >
              계속
            </button>
          </div>
      </>
    )
  }
}

export default DefaultForm;
