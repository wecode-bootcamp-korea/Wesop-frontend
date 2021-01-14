import React, { Component } from 'react';
import './Footer.scss'

class Footer extends Component {
  render () {
    const footerInquiry = [
      "문의하기",
      "FAQS",
      "배송 및 반품",
      "배송 확인",
      "이용 약관",
      "개인정보 정책"
    ]

    const footerBrand = [
      "브랜드 스토리",
      "채용",
      "마케팅 문의",
      "기업용 선물",
      "페이셜 어포인트먼트",
      "개인 정보 보호 정책"
    ]

    const footerSocial = [
      "Instagram",
      "Twitter",
      "LinkedIn",
      "Kakao Plus Friend",
      "Naver Post"
    ]

    return (
      <div className="Footer">
        <div className="Footer-main">
          <div className="Footer-main-subscription">
            <span className="Footer-main-subscription-title">구독하기</span>
            <div class="form">
              <input type="text" name="name" autoComplete="off" required/>
              <label for="name" className="label-name">
                <span className="Footer-main-subscription-input content-name">이메일 주소</span>
              </label>
            </div>
            <span className="Footer-main-subscription-description">제품, 스토어, 이벤트, 그리고 이솝이 고른 글들이 담긴 이솝 뉴스레터를 받고 싶습니다.</span>
          </div>
          <div className="Footer-main-link">
            <div className="Footer-main-link-introduction">
              <ul className="Footer-main-link-introduction-inquiry">
                <span>문의하기</span>
                {
                  footerInquiry.map((item) => {
                  return(
                    <li>{item}</li>
                    )
                  })
                }
              </ul>
              <ul className="Footer-main-link-introduction-brand">
                <span>브랜드 소개</span>
                {
                  footerBrand.map((item) => {
                  return(
                    <li>{item}</li>
                    )
                  })
                }
              </ul>
              <ul className="Footer-main-link-introduction-social">
                <span>소셜</span>
                {
                  footerSocial.map((item) => {
                  return(
                    <li>{item}<i class="fas fa-location-arrow fa-xs"></i></li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="Footer-main-link-compliance">
              <p>상호: 이솝코리아 유한회사 | 주소: 서울특별시 강남구 선릉로 162길 3 이솝코리아 3층 | 대표자: 마이클안토니오키프 | 대표전화: 1800-1987 | 대표 이메일: aesop@aesop.com | 호스팅 사업자: SAP Hybris | 사업자 등록 번호: 220-88-56014 | 통신판매업 신고번호: 2014-서울강남-02300</p>
            </div>
          </div>
        </div>
        <div className="Footer-copyright">
          <span>&copy;이솝</span>
          <span>대한민국</span>
        </div>
      </div>
    );
  }

}

export default Footer;