import React from 'react'
import styled from 'styled-components'

const Headerbar = () => {
  return (
  <Container>
     <Nav>
        <Uinav>
          <Li><a href="/moviechart"><H4>영화</H4></a></Li>
          <Li><h4>극장</h4></Li>
          <Li><a href="/bookmovie"><H4>예매</H4></a></Li>
          <Li><h4>스토어</h4></Li>
          <Li><h4>이벤트</h4></Li>
          <Li><h4>혜택</h4></Li>
        </Uinav>
      </Nav>
      <Dropdown>

      </Dropdown>
  </Container>
    
    
  )
}

export default Headerbar

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 100%;
`

const Nav = styled.nav`
  height: 45px;
  padding: 0 5px;
  border-top: 1px solid #ebebebfb;
  display: flex;
  justify-content: space-between;
  padding: 0 calc((100vw - 1080px) / 2);
  border-bottom: 1.5px solid red;
`
const Uinav = styled.ul`
  display: flex;
`
const Li = styled.li`
  width: 80px;
  line-height: 15px;
  list-style: none;
  h4{
    margin: 0 auto;
  }
  a{
    color: black;
    text-decoration: none;
  }
`
const H4 = styled.h4`
  color: red;
`
const Dropdown = styled.div`
  
`