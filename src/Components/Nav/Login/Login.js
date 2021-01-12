import React, { Component } from 'react';
import './Login.scss';


class Login extends Component {
  render () {
    return (
      <div> 
        <div class="modal_login">
            <h2>안녕하세요</h2>
            <h4>유효한 이메일 주소를 입력하세요</h4>
            <input type="text" placeholder="이메일 주소" />
            <button>계속</button>
            <span class='modal-close'>X</span>
        </div>
        
      </div>
    );
  }

}

export default Login;