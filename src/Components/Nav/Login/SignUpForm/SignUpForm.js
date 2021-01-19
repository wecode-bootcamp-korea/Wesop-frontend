import React, { Component } from 'react';
import './SignUpForm.scss';


class SignUpForm extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      checkPassword: '',
      name: '',
    }
  }

  // 꼭 활용 잘 해야 할 함수!
  inputChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value,
    })
  }
  
  

  render () {
    return (
      <>
        <div className="head">
          <span className="returnButton">Back</span>
          <span className="closeButton" onClick={this.props.handleLoginModal}>X</span>
        </div> 
        <div className="LoginNotice">
          <h2 className="LoginTitle">처음 만나 뵙게 되네요. 이솝에 오신 것을 환영합니다.</h2>
          <p className="LoginSubtitle">계정을 만들려면 아래에 세부 정보를 입력하십시오.</p>
        </div>
        <div className="LoginEmail">
          <input 
            type="email" 
            placeholder="이메일 주소" 
            onChange={this.inputChange} 
            name="email"
          />
          <div class="emailErrorMessage"></div>
        </div>
        <div class="LoginPassword">
          <input 
          type="password" 
          placeholder="패스워드" 
          onChange={this.inputChange} 
          name="password"
          />
          <input 
          type="password" 
          placeholder="패스워드 확인" 
          onChange={this.inputChange} 
          name="checkPassword"
          />
        </div>
        <div className="nameWrap">
          <input 
          type="text" 
          placeholder="이름"
          onChange={this.inputChange} 
          name="name"
          />
        </div>
        <div className="BtnWrap">
          <button className="continueBt" type="button" onClick={this.handleContinueButton}>계속</button>
        </div>         
     </>
    )
  }
}



export default SignUpForm;