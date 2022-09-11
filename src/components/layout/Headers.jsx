import React from 'react'
import Headerbar from './Headerbar'
import styled from 'styled-components'

const Headers = () => {
  return (
    <>
    <Adbox>
        <img src="https://adimg.cgv.co.kr/images/202208/PrincessAya/980x80.jpg"></img>
    </Adbox>
    <Container>
        <Content>
            <Logo>
                <a href="/"><img src="https://ifh.cc/g/masvLt.png"/></a>
            </Logo>
            <Ul1>
                <Li><Img src="https://img.cgv.co.kr/WingBanner/2022/0303/16462658373950.png"></Img></Li>
                <li><a href="/login"><Img2 src="https://ifh.cc/g/RMVRhn.png"></Img2></a></li>
                <li><Img2 src="https://ifh.cc/g/jrsKHZ.png"></Img2></li>
                <li><a href="/movielist"><Img2 src="https://ifh.cc/g/SaLz0J.png"></Img2></a></li>
                <li><Img2 src="https://ifh.cc/g/ZjnStG.png"></Img2></li>
            </Ul1>
        </Content>
    </Container>
    <Headerbar/>
    </>
    )
}

export default Headers

const Adbox = styled.div`
    width: 100%;
    height: 80px;
    background-color: #5EC1E8;
    text-align: center;
    img{
        object-fit:cover;
        height: 80px;
        }
`
const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 1040px;
`
const Content = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    margin-top: 15px;
`
const Logo = styled.div`
    img{ 
    width: 333px;
    height: 90px;
    }
`
const Ul1 = styled.ul`
    display: flex;
   li{
        display: block;
        width: 80px;
    }
`
const Img = styled.img`
    margin-top: 10px;
`
const Img2 = styled.img`
    width: 65px;
    height: 70px;      
`
const Li = styled.li`
    margin-right: 80px;
`