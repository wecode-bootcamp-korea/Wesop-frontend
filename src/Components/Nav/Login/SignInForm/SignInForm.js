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

  // handleLoginButton = () => {
  //   fetch("http://10.58.2.232:8000/user/signin", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: this.state.email,
  //       password: this.state.password,
  //     }),    
  //   })
  //   .then((response) => response.json())
  //   .then((response) => {response.message(
  //     if (response.message === 'valid user') {
  //       // localStorage.setItem('token', response.token)
  //       this.props.history.push('/'),
  //     }
  //   )    
  // }
  
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
    const {isEmailValid, isPasswordValid} = this.state
    // console.log(this.props.emailData)
    return (
      <div className="Login">
        <div className="head">
          <span className="returnButton" onClick={this.props.goDefaultModal}>
          <i class="fas fa-arrow-left"></i>
          </span>
          <span className="closeButton" onClick={this.props.handleLoginModal}>
            <i class="fas fa-times"></i>
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
            value={this.props.emaildata}
            />
          <div className="warningWrap">
            <span class={isEmailValid ? "inactive" : "active"} >유효한 이메일을 입력해주세요.</span>
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
            <span className={isPasswordValid ? "inactive" : "active"}>유효한 패스워드가 필요합니다.</span>
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
