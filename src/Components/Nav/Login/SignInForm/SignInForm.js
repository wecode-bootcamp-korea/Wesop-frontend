import React, { Component } from 'react';
import './SignInForm.scss';


class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isEmailValid: true,
      isPasswordValid: true,
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState ({
      [name]: value,
    })
  }

  handleLoginButton = () => {
    fetch("백엔드주소", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.passwrod,
      }),    
    })
    .then((response) => response.json())
    .then((response) => {})
  }


  // 이메일,패스워드 유효성 확인
  checkInputValid= () => {
    const { email, password } = this.state;
    const isEmailValid = email.includes("@") && email.length > 5;
    const isPasswordValid = password.length > 5;

    this.setState({
      isEmailValid, isPasswordValid
    }
    , () => this.handleLoginButton()
    )
  }
  
  render() {
    return (
      <div className="Login">
        <div className="head">
          <span className="returnButton">
            Back
          </span>
          <span className="closeButton" onClick={this.props.handleLoginModal}>
            X
          </span>
        </div> 
        <div className="LoginNotice">
          <h2 className="LoginTitle">
            이솝에 다시 오신 것을 환영합니다.
          </h2>
          <p className="LoginSubtitle">패스워드를 확인하십시오.</p>
        </div>
        <div className="LoginEmail">
          <input 
            type="email"
            placeholder="이메일 주소" 
            onChange={this.handleInputChange} 
            name="email"
            />
          <div className="warningWrap">
            <span class={this.state.isEmailValid ? "inactive" : "active"} >유효한 이메일을 입력해주세요.</span>
          </div>
        </div>
        <div className="LoginPassword">
          <input 
            type="password" 
            placeholder="패스워드" 
            onChange={this.handleInputChange} 
            name="password"
          />
          <div className="warningWrap">
            <span className={this.state.isPasswordValid ? "inactive" : "active"}>유효한 패스워드가 필요합니다.</span>
          </div>
          <p className="resetPassword" >패스워드 재설정하기</p>
        </div>
        <div className="BtnWrap">
          <button 
            className="loginBt"
            type="button" 
            onClick={this.checkInputValid}>
            로그인</button>
        </div>
      </div>
    )
  } 
}



export default SignInForm;
