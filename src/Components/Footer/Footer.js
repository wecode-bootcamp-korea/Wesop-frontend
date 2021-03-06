import React, { Component } from 'react';
import './Footer.scss'

const FOOTER_INQUIRY = [
  {
    id: 1,
    content:"문의하기"
  },
  {
    id: 2,
    content:"FAQS"
  },
  {
    id:3,
    content:"배송 및 반품"
  },
  {
    id:4,
    content:"배송확인"
  },
  {
    id:5,
    content:"이용 약관"
  },
  {
    id:6,
    content:"개인정보 정책"
  }
]

const FOOTER_BRAND = [
  {
    id: 1,
    content:"브랜드 스토리"
  },
  {
    id: 2,
    content:"채용"
  },
  {
    id:3,
    content:"마케팅 문의"
  },
  {
    id:4,
    content:"기업용 선물"
  },
  {
    id:5,
    content:"페이셜 어포인트먼트"
  },
  {
    id:6,
    content:"개인 정보 보호 정책"
  }
]

const FOOTER_SOCIAL = [
  {
    id: 1,
    content:"Instagram",
    url: "https://www.instagram.com/aesopskincare/"
  },
  {
    id: 2,
    content:"Twitter",
    url: "https://twitter.com/aesopskincare"
  },
  {
    id:3,
    content:"LinkedIn",
    url: "https://au.linkedin.com/company/aesop"
  },
  {
    id:4,
    content:"Kakao Plus Friend",
    url: "https://pf.kakao.com/_BxdYjT"
  },
  {
    id:5,
    content:"Naver Post",
    url:"https://post.naver.com/aesopskincare"
  }
]

class Footer extends Component {
  render () {
    return (
      <div className="Footer">
        <div className="Footer-main">
          <div className="Footer-main-subscription">
            <span className="Footer-main-subscription-title">구독하기</span>
            <div className="form">
              <input type="text" name="name" autoComplete="off" required/>
              <label htmlFor="name" className="label-name">
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
                  FOOTER_INQUIRY.map((linkName) => {
                  return(
                    <li key={linkName.id}>{linkName.content}</li>
                    )
                  })
                }
              </ul>
              <ul className="Footer-main-link-introduction-brand">
                <span>브랜드 소개</span>
                {
                  FOOTER_BRAND.map((linkName) => {
                  return(
                    <li key={linkName.id}>{linkName.content}</li>
                    )
                  })
                }
              </ul>
              <ul className="Footer-main-link-introduction-social">
                <span>소셜</span>
                {
                  FOOTER_SOCIAL.map((linkName) => {
                  return(
                    <li key={linkName.id}><a href={linkName.url} target="_blank">{linkName.content}</a><i className="fas fa-location-arrow fa-xs"></i></li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="Footer-main-link-compliance">
              <p>상호: 위솝코리아 | 주소: 서울특별시 강남구 위솝코리아 | 대표전화: 0000-0000 | 대표 이메일: Wesop@Wesop.com | 호스팅 사업자: Wesop  </p>
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