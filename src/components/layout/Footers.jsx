import React from 'react'
import styled from 'styled-components'

const Footers = () => {
  return (
    <>
    <Container>
    <img src="https://ifh.cc/g/bFOOtz.jpg"></img>
    </Container>
    <Footertxt>
        <ul>
            <li>FE노은지</li>
            <li>FE김보미</li>
            <li>FE임다은</li>
            <li>BE박성수</li>
            <li>BE정민우</li>
            <li>BE전대훈</li>
        </ul>
    </Footertxt>
    </>
   )
}

export default Footers

const Container = styled.div`
    width: 100%;
    text-align: center;
    img{
        object-fit:cover;
        height: 270px;
        width: 100%;
       }
`
const Footertxt = styled.div`
    background-color: #ecebebe3;
    height: 200px;
    margin-top: -20px;
    width: 100%;
    ul{
        display: flex;
        padding: 50px;
        justify-content: center;
        li{
            list-style: none;
            padding: 20px;
            color: gray;
            min-width: 70px;
        }
    }
`