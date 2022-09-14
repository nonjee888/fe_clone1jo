import React from "react";
import Headerbar from "./Headerbar";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { _logout } from "../../redux/modules/user";

const Headers = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const userlogin = useSelector((state) => state.user);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    console.log("작동");
    window.location.reload();
  };
  return (
    <>
      <Adbox>
        <img src="https://adimg.cgv.co.kr/images/202208/PrincessAya/980x80.jpg"></img>
      </Adbox>
      <Container>
        <Content>
          <Logo>
            <a href="/">
              <img src="https://ifh.cc/g/masvLt.png" />
            </a>
          </Logo>
          <Ul1>
            <Li>
              <Img src="https://img.cgv.co.kr/WingBanner/2022/0303/16462658373950.png"></Img>
            </Li>
            <li>
              {userlogin.is_Login !== true ? (
                <div>
                  <a href="/login">
                    <Img2 src="https://ifh.cc/g/RMVRhn.png"></Img2>
                  </a>
                </div>
              ) : (
                <div onClick={logoutHandler}>
                  {/* <a href="/"> */}
                  <ImgLogout src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FUrbGJ%2FbtrL80fjIkg%2FWWyuHWPlUKH4kFFUD1srQk%2Fimg.png"></ImgLogout>
                  {/* </a> */}
                </div>
              )}
            </li>
            <li>
              <Img2 src="https://ifh.cc/g/jrsKHZ.png"></Img2>
            </li>
            <li>
              <a href="/movielist">
                <Img2 src="https://ifh.cc/g/SaLz0J.png"></Img2>
              </a>
            </li>
            <li>
              <Img2 src="https://ifh.cc/g/ZjnStG.png"></Img2>
            </li>
          </Ul1>
        </Content>
      </Container>
      <Headerbar />
    </>
  );
};

export default Headers;

const Adbox = styled.div`
  width: 100%;
  height: 80px;
  background-color: #5ec1e8;
  text-align: center;
  img {
    object-fit: cover;
    height: 80px;
  }
`;
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1040px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  margin-top: 15px;
`;
const Logo = styled.div`
  img {
    width: 333px;
    height: 90px;
  }
`;
const Ul1 = styled.ul`
  display: flex;
  li {
    display: block;
    width: 80px;
  }
`;
const Img = styled.img`
  margin-top: 10px;
`;
const Img2 = styled.img`
  width: 65px;
  height: 70px;
`;
const Li = styled.li`
  margin-right: 80px;
`;

const ImgLogout = styled.img`
  margin-top: 11px;
  margin-left: 10px;
`;
