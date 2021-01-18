import React, { Component } from "react";
import "./Login.scss";
import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import DefaultForm from "./DefaultForm/DefaultForm";

const nextMapper = {
  signIn: <SignInForm />,
  signUp: <SignUpForm />,
  default: <DefaultForm />,
}

class Login extends Component {
  constructor() {
    super();
    this.state = {
      currentView: "default",
    };
  }
  
  // componentDidMount() {
  //   this.setState({
  //     currentView: 'default',
  //   })
  // }

  handleCurrentView = (value) => {
    // if (value === 'INVALID_EMAIL') {
    //   value = 'default';
    // }
    this.setState({
      currentView: value,
    })
  };

 render() {
   console.log(this.state.currentView)
    return (
      <div className="Login">
        <div className="LoginModal">
          {this.state.currentView === "default" ? 
          <DefaultForm handleCurrentView={this.handleCurrentView}/> : this.state.currentView === "signIn" ? nextMapper["signIn"] : nextMapper["signUp"]}
        </div>
      </div>
    );
  }
}

export default Login;
