import React, { Component } from 'react';
import './SignInNotice.scss';


class SignInNotice extends Component {

  render () {
    // 스테이트 / 셋스테이트를 써서 불린값으로 표출하게 하기

    return (
      <div className="Login">
          <div className="LoginModal">
            <div className="LoginNoice">
              <h2 className="LoginTitle">이솝에 다시 오신 것을 환영합니다.</h2>
              <p className="LoginSubtitle">패스워드를 확인하십시오.</p>
            </div>
          </div>
      </div>    
    )
  }
}

export default SignInNotice;