import React, { Component } from "react";
import "./Login.scss";
import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import DefaultForm from "./DefaultForm/DefaultForm";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      currentView: "default",
    };
  }
  
  handleCurrentView = (value) => {
    this.setState({
      currentView: value,
    })
  };
  
 render() {
  const {handleLoginModal} = this.props
  const nextMapper = {
    signIn: <SignInForm handleLoginModal={handleLoginModal}/>,
    signUp: <SignUpForm handleLoginModal={handleLoginModal}/>,
    default: <DefaultForm handleLoginModal={handleLoginModal} handleCurrentView={this.handleCurrentView} />,
  }

  return (
    <div className="Login">
      <div className="LoginModal">
        {nextMapper[this.state.currentView]}
      </div>
    </div>
  );
  }
}

export default Login;
