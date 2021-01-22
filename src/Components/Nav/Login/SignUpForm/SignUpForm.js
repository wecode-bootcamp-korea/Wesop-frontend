import React, { Component } from 'react';
import './SignUpForm.scss';


class SignUpForm extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      rePassword: '',
      name: '',
      isEmailValid: true,
      isPwValid: true,
      isRePwValid: true,
      isNameValid: true,
    }
  }
 
  handleInputChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value,
    })
  }

  componentDidMount () {
    this.setState ({
      email: this.props.emailData
    })

  }

  handleJoinButton = () => {
    fetch("http://10.58.2.232:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),    
    })
      .then((response) => response.json())
      .then((response) => {
        // localStorage.setItem('token', response.token
      this.props.handleLoginModal();
    })
  }


  checkInputValid = () => {
    const {email, password, rePassword, name} = this.state;
    const isEmailValid = email.includes("@") && email.length > 5;
    const isPwValid = password.length > 5;
    const isRePwValid = password; 
    const isNameValid = name.length>2;

    this.setState ({
      isEmailValid, isPwValid, isRePwValid, isNameValid}
      , () => this.handleJoinButton
    )}


  
  
  
  render () {
    const { isEmailValid, isPwValid, isRePwValid, isNameValid } = this.state ;
    return (
      <div className= "Login">
        <div className="head">
          <span className="returnButton">
            <i class="fas fa-arrow-left"></i>
          </span>
          <span className="closeButton" onClick={this.props.handleLoginModal}>
            <i class="fas fa-times"></i>
          </span>
        </div> 
        <div className="LoginNotice">
          <h2 className="LoginTitle">처음 만나 뵙게 되네요. 이솝에 오신 것을 환영합니다.</h2>
          <p className="LoginSubtitle">계정을 만들려면 아래에 세부 정보를 입력하십시오.</p>
        </div>
        <div className="LoginEmail">
          <input 
            type="email" 
            placeholder="이메일 주소" 
            onChange={this.handleInputChange} 
            name="email"
            value={this.props.emailData}
          />
          <div className="warningWrap">
            <span className={isEmailValid ? 'inactive' : 'active'}>유효한 이메일을 입력해주세요. </span>
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
            <span className={isPwValid ? 'inactive' : 'active'}>유효한 비밀번호를 입력해주세요. </span>
          </div>
          <input 
          type="password" 
          placeholder="패스워드 확인" 
          onChange={this.inputChange} 
          name="rePassword"
          />
          <div className="warningWrap">
            <span className={isRePwValid ? 'inactive' : 'active'}>이전에 사용했던 패스워드를 입력해주세요. </span>
          </div>
        </div>
        <div className="LoginName">
          <input 
          type="text" 
          placeholder="이름"
          onChange={this.inputChange} 
          name="name"
          />
          <div className="warningWrap">
            <span className={isNameValid ? 'inactive' : 'active' }>이름을 입력하세요.</span>
          </div>
        </div>
        <div className="BtnWrap">
          <button className="continueBt" 
          type="button" 
          onClick={this.checkInputValid}
          >
          등록
          </button>
        </div>         
      </div>
     )
  }
  
}



export default SignUpForm;