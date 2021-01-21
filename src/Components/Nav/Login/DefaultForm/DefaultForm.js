import React, { Component } from "react";
import './DefaultForm.scss' ;

class DefaultForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      isValid: true,
    }
  }

  // 사용자가 입력한 id값 저장 
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleContinueButton = () => {
    // if(!this.state.isValid) {
    //   alert('id, pw 확인 바랍니다');
    //   return;
    // } else {
      if(this.state.isValid) {
       fetch("http://10.58.4.30:8000/user/check", {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email,
        })
      })
      .then((response) => response.json())
      .then((response) => {this.props.handleCurrentView2(response.message);}) 
    }
  }

 // 이메일 유효성 확인
  checkEmailValid= () => {
    const { email } = this.state;
    const emailValid = email.includes("@") && email.length > 5;
    console.log("emailValid >>> ", emailValid)
    
    this.setState ({
      isValid: emailValid 
     }, () => this.handleContinueButton()
    )
  }

  render() {
    return (
      <div className= "Login">
        <div className="head">
            <span className="closeButton" onClick={this.props.handleLoginModal}>
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
              onChange={this.handleEmailChange}
            />
            <div className="warningWrap">
            <span className={this.state.isValid ? 'inactive' : 'active'}>유효한 이메일을 입력해주세요.</span>
            </div>            
          </div>
          <div className="BtnWrap">
            <button
              className="continueBt"
              type="button"
              onClick={this.checkEmailValid}
              // onClick={this.state.email.length && this.checkEmailValid}
            >
              계속
            </button>
          </div>
      </div>
    )
  }
  
}

export default DefaultForm;
