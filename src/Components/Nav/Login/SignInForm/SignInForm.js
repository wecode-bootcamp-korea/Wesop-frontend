import React, { Component } from 'react';
import './SignInForm.scss';


class SignInForm extends Component {

  render () {
    return (
        <>
          <div className="head">
              <span className="returnButton">Back</span>
              <span className="closeButton" onClick={this.props.handleLoginModal}>X</span>
          </div> 
          <div className="LoginNotice">
            <h2 className="LoginTitle">이솝에 다시 오신 것을 환영합니다.</h2>
            <p className="LoginSubtitle">패스워드를 확인하십시오.</p>
          </div>
          <div className="LoginEmail">
              <input type="text" placeholder="이메일 주소"  onChange={this.handleChange} />
              <div class="emailErrorMessage"></div>
          </div>
          <div class="LoginPassword">
            <input type="password" placeholder="패스워드" onChange={this.hanndleChange} />
            <button className="resetPassword" >패스워드 재설정하기</button>
          </div>
          <div className="BtnWrap">
              <button className="loginBt" type="button" onClick={this.handleContinueButton}>로그인</button>
          </div>

    </>
    )
}
}

export default SignInForm;


