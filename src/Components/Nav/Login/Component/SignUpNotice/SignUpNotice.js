import React, { Component } from 'react';
import './SignUpNotice.scss';


class SignUpNotice extends Component {

  render () {
    // 스테이트 / 셋스테이트를 써서 불린값으로 표출하게 하기

    return (
      <div className="Login">
          <div className="LoginModal">
            <div className="LoginNotice">
              <h2 className="LoginTitle">처음 만나 뵙게 되네요. 이솝에 오신 것을 환영합니다.</h2>
              <p className="LoginSubtitle">계정을 만들려면 아래에 세부 정보를 입력하십시오.</p>
            </div>
          </div>
      </div>    
    )
  }
}

export default SignUpNotice;