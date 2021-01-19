import React, { Component } from 'react';
import './SignInForm.scss';


class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
  }
  
  loginButton = () => {
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
  
  
   handlePwValue = (e) => {
    this.setState({
      password: e.target.value,
      
    })
  }



  render() {
    console.log("handlePwValue!")
    return (
      <>
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
            onChange={this.handleEmailValue} 
            />
          <div class="emailErrorMessage"></div>
        </div>
        <div class="LoginPassword">
          <input 
            type="password" 
            placeholder="패스워드" 
            onChange={this.handlePwValue} 
          />
          <button className="resetPassword" >패스워드 재설정하기</button>
        </div>
        <div className="BtnWrap">
          <button 
            className="loginBt"
            type="button" 
            onClick={this.loginButton}>
            로그인</button>
        </div>
      </>
    )
  } 
}



export default SignInForm;
