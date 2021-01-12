import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  render () {
    return (
      <div>
        <div class="Login_modal"> 
         <h1>안녕하세요.</h1>
         <h3>유효한 이메일 주소를 입력하세요.</h3>
         <input type='text' placeholder='이메일 주소' />
         <button>계속</button>
         <span class="closebutton">X</span>


        </div>
      </div>
    );
  }
}

export default Login;