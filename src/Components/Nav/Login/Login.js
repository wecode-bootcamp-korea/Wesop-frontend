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
      email: ""
    };
  }
  
  handleCurrentView = (value, email) => {
    // console.log("value >>> ", value, "email >>> ", email)
    this.setState({
      currentView: value,
      email
    })
  };

  goDefaultModal = () => {
    <default />
  }
    
render() {
  const {handleLoginModal, goToMain, goDefaultModal } = this.props
  const nextMapper = {
    signIn: <SignInForm handleLoginModal={handleLoginModal} emailData={this.state.email} goDefaultModal={goDefaultModal} />,
    signUp: <SignUpForm handleLoginModal={handleLoginModal}
    emailData={this.state.email} goDefaultModal={goDefaultModal} />,
    default: <DefaultForm handleLoginModal={handleLoginModal} handleCurrentView={this.handleCurrentView} />,
  }

  return (
    <div className="Login">
      <div className="LoginModal">
        {nextMapper[this.state.currentView]}
        {/* <SignUpForm /> */}
        {/* <SignInForm /> */}
        {/* <DefaultForm /> */}

      </div>
    </div>
  );
  }
}

export default Login;
