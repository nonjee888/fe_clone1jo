import React from "react";
import styled from "styled-components";
import { KAKAO_AUTH_URL } from "../../shared/OAuth";

const Login = () => {
  return (
    <>
      <Logincontainer>
        <Loginheader>
          <Div>로그인</Div>
          <Div2>비회원 예매</Div2>
          <Div2>예매 확인</Div2>
        </Loginheader>
        <Loginbody>
          <Loginnaver>
            <a href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=43KVChnXUmyM5z9u7el8&redirect_uri=http://eunjiroh.shop.s3-website.ap-northeast-2.amazonaws.com/loading&state=123">
              <img src="https://img.cgv.co.kr/image_gt/login/btn_loginNaver.jpg"></img>
            </a>
          </Loginnaver>
          <LoginKakao>
            <a href={KAKAO_AUTH_URL}>
              <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile28.uf.tistory.com%2Fimage%2F99BEE8465C3D7D12140EAC"></img>
            </a>
          </LoginKakao>
        </Loginbody>
      </Logincontainer>
    </>
  );
};

export default Login;

const Logincontainer = styled.div`
  width: 100%;
  width: 1040px; //헤더랑 통일
  margin: 40px auto; //헤더랑 콘텐트 띄우기겸
`;
const Loginheader = styled.div`
  width: 541px;
  margin: 0 auto;
  display: flex;
  div {
    font-size: 13px;
    text-align: center;
    line-height: 37px;
    width: 110px;
    height: 37px;
    margin-right: 3px;
    border-radius: 5px 5px 0 0;
    color: white;
    font-weight: 800;
  }
`;
const Div = styled.div`
  background-color: #fb4357;
`;
const Div2 = styled.div`
  background: #898987;
`;
const Loginbody = styled.div`
  margin: 0 auto 50px auto;
  width: 541px;
  height: 200px;
  border-bottom: 2px solid #898987;
  border-top: 2px solid #898987;
`;
const Loginnaver = styled.div`
  width: 270px;
  margin: 10px auto;
  img {
    width: 100%;
    border-radius: 6px;
    border: 1px solid gray;
  }
  margin-top: 30px;
`;
const LoginKakao = styled.div`
  width: 300px;
  margin: 20px auto;
  img {
    width: 100%;
    background-size: cover;
  }
  margin-top: 5px;
`;
