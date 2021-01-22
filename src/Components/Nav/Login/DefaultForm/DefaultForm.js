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
      if(this.state.isValid) {
       fetch("http://10.58.2.232:8000/user/check", {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email,

        })
      })
      .then((response) => response.json())
      .then((response) => {this.props.handleCurrentView(response.message,
        this.state.email);}) 
    }
  }


  checkEmailValid= () => {
    const { email } = this.state;
    const emailValid = email.includes("@") && email.length > 5;
    
    this.setState ({
      isValid: emailValid 
     }, () => this.handleContinueButton()
    )
  }

  render() {
    const {isValid} = this.state;
    return (
      <div className= "Login">
        <div className="head">
            <span className="closeButton" onClick={this.props.handleLoginModal}>
              <i class="fas fa-times"></i>
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
            <span className={isValid ? 'inactive' : 'active'}>유효한 이메일을 입력해주세요.</span>
            </div>            
          </div>
          <div className="BtnWrap">
            <button
              className="continueBt"
              type="button"
              onClick={this.checkEmailValid}
            >
              계속
            </button>
          </div>
      </div>
    )
  }
}

export default DefaultForm;
