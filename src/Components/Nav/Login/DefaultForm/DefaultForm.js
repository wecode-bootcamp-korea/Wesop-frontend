import React, { Component } from "react";

class DefaultForm extends Component {
  constructor() {
    super();
    this.state = {
      isError: false,
      email: '',
    }
  }

  handleContinueButton = () => {
        
    fetch("http://192.168.200.139:8000/user/check", {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email,
        }),
      })
  
      // Backend response 처리
      .then((response) => response.json())
      .then((response) => {
        // response 메세지에 따른 로직처리
        console.log(response.message);
        this.props.handleCurrentView(response.message);
      })  
  }

  // // 사용자가 입력한 id값 저장 >>> state
  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };


  render() {
    return (
      <>
        <div className="head">
            <span className="closeButton" onClick={this.props.handleLoginModal}>
              X
            </span>
          </div>
          <div className="LoginNotice">
            <h2 className="LoginTitle">안녕하세요</h2>
            <p className="LoginSubtitle">유효한 이메일 주소를 입력하세요</p>
          </div>
          <div className="LoginEmail">
            <input
              type="text"
              placeholder="이메일 주소"
              // value={this.state.email}
              onChange={this.handleChange}
              className={this.state.isError ? 'alert' : ''}
            />
            {this.state.isError ? <div>msg</div> : null}
          </div>
          <div className="BtnWrap">
            <button
              className="continueBt"
              type="button"
              onClick={() => {
                this.handleContinueButton();

              }}
            >
              계속
            </button>
          </div>
      </>
    )
  }
}

export default DefaultForm;
