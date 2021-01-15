import React, { Component } from 'react';
import './Login.scss';
import SignInForm from './SignInForm/SignIn';
import SignUpForm from './Component/SignUpForm/SignUpForm';
import SignInNoticeForm from './Component/SignInNotice/SignInNotice';
import SignUpNoticeForm from './Component/SignUpNotice/SignUpNotice';


class Login extends Component {

  render () {

    return (
      <div className="Login">
          <div className="LoginModal">
            <header>
              <span className="returnButton">Back</span>
              <span className="closeButton" onClick={this.props.handleLoginModal}>X</span>
            </header> 

            <div className="LoginNotice">
              <h2 className="LoginTitle">안녕하세요</h2>
              <p className="LoginSubtitle">유효한 이메일 주소를 입력하세요</p>
            </div>
            
            {/* /이메일 확인 시 ? 패스워드 입력창 : 회원가입창  */}
            <div>
              <SignInNoticeForm />
            </div>

            <div>
              <SignUpNoticeForm />
            </div>

            <div className="LoginEmail">
              <input type="text" placeholder="이메일 주소" value={this.state.Email} />
            </div>

            <div>
              <SignInForm />
            </div>

            <div>
              <SignUpForm />
            </div>

            <div className="BtnWrap">
              <button className="continueBt" type="button" onClick={this.handleState}>계속</button>
            </div>
            

          </div>
      </div>



    );
  }

}

export default Login;