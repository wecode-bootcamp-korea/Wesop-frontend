import React, { Component } from 'react';
import 'SignInForm.scss';

class SignInForm extends Component {

  render () {
    // 스테이트 / 셋스테이트를 써서 불린값으로 표출하게 하기

    return (
      <div className="BtnWrap">
        <button className="resetBt">패스워드 재설정하기</button>
        <button className="continueBt" type="button" >로그인</button>
      </div>
    )
  }
}

export default SignInForm;