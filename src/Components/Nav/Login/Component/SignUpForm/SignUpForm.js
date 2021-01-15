import React, { Component } from 'react';
import './SignUpForm.scss';

class SignUpForm extends Component {
  
  render() {
     
    return (
      <div>
      <div className="passwordWrap">
        <input name="password" placeholder="패스워드" />
        <input name="confirmPassword" placeholder= "패스워드 확인" />
      </div>

      <div className="nameWrap">
        <input type="text" placeholder="성" />
        <input type="text" placeholder="이름" />
      </div>
      </div>
      
    )
   }

}

export default SignUpForm;