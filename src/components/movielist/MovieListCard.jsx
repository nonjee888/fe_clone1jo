import React from 'react'
import styled from 'styled-components'
import MovieCard from './MovieCard'

const MovieListCard = () => {
  return (
    <Container>
        <Movielist>
            <Listheader>
                <h3>무비차트</h3>
            </Listheader>
            <Headercheckbox>
                <input type="checkbox"></input>
                <p>현재 상영작만 보기</p>
            </Headercheckbox>
            <Moviecardlist>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </Moviecardlist>
        </Movielist>
    </Container>
  )
}

export default MovieListCard

const Container = styled.div`
  width: 100%;
  width: 1040px;  //헤더랑 통일
  margin: 40px auto;   //헤더랑 콘텐트 띄우기겸
`
const Movielist = styled.div`
    width: 980px;
    margin: 0 auto;
`
const Listheader = styled.div`
  width: 100%;
  height: 60px;
  font-weight: 500;
  border-bottom: 3px solid #241d1e; 
  h3{
    font-size: 36px;
    color: #222;
  } 
`
const Moviecardlist = styled.div`
  width: 980px;
  display: flex;
  flex-direction: row;
  margin: 10px auto;
  flex-wrap: wrap;
`
const Headercheckbox = styled.div`
    display: flex;
    font-size: 13px;
    margin: 4px;
    color: #424141;
`