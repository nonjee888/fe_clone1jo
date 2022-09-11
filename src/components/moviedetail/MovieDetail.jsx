import React from 'react'
import styled from 'styled-components'

const MovieDetail = () => {
  return (
    <>
    <Container>
        <Infobox>
              <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86155/86155_320.jpg" />
              <Info>
              <Title>
                  <h3>공조2-인터내셔날</h3>
                  <Status>현재 상영중</Status>
              </Title>
              <Engtitle>Confidential Assignment2 International</Engtitle>
              <Rate>
                  <p>예매율 60%</p>
              </Rate>
              <Hr/>
              <Moviedesc>
                  <div>
                      <p>감독 : 이석훈 / 배우 : 현빈 , 유해진 , 임윤아 , 다니엘 헤니 , 진선규</p>
                  </div>
                  <div>
                      <p>장르 : 액션,코미디</p>
                  </div>
                  <div>
                      <p>개봉 : 2022.9.27</p>
                  </div>
              </Moviedesc>
              <Bookingbut>예매하기</Bookingbut>
              <Likebut>찜하기</Likebut>
              </Info>
          </Infobox>
          <Middle>
              <Desc>
              <p>"공조 이즈 백! 이번엔 삼각 공조다!<br/>

                남한으로 숨어든 글로벌 범죄 조직을 잡기 위해<br/>
                새로운 공조 수사에 투입된 북한 형사 ‘림철령’(현빈).<br/>
                수사 중의 실수로 사이버수사대로 전출됐던 남한 형사 ‘강진태’(유해진)는<br/>
                광수대 복귀를 위해 모두가 기피하는 ‘철령’의 파트너를 자청한다.<br/>

                이렇게 다시 공조하게 된 ‘철령’과 ‘진태’!<br/>
                ‘철령’과 재회한 ‘민영’(임윤아)의 마음도 불타오르는 가운데,<br/>
                ‘철령’과 ‘진태’는 여전히 서로의 속내를 의심하면서도 나름 그럴싸한 공조 수사를 펼친다.<br/>
                드디어 범죄 조직 리더인 ‘장명준’(진선규)의 은신처를 찾아내려는 찰나,<br/>
                미국에서 날아온 FBI 소속 ‘잭’(다니엘 헤니)이 그들 앞에 나타나는데…!<br/>

                아직도 짠내 나는 남한 형사,<br/>
                여전한 엘리트 북한 형사,<br/>
                그리고 FBI 소속 해외파 형사까지!<br/>
                각자의 목적으로 뭉친 그들의 짜릿한 공조 수사가 시작된다!<br/></p>
              </Desc>
              <Ad>
                <img src="https://ifh.cc/g/bAOBgG.jpg"></img>
              </Ad>
          </Middle>
          <Ad2>
            <img src="https://adimg.cgv.co.kr//images/202208/KATURI/0908_800x90.jpg"></img>
          </Ad2>
      </Container>
      </>
  )
}

export default MovieDetail

const Container = styled.div`
  width: 100%;
  width: 1040px;  //헤더랑 통일
  margin: 40px auto;   //헤더랑 콘텐트 띄우기겸
`
const Infobox = styled.div`
  display: flex;
  height: 280px;
  img{
    width: 200px;
  }
`
const Info = styled.div`   //이미지랑 info랑 가로로 나란히 두개
  margin-left: 30px;
  margin-top:-25px;
`
const Title = styled.div`
  display: flex;
  height: 45px;
  h3{
    color: #1a1919;
    font-size: 25px;
    font-weight: 700;
  }
`
const Status = styled.div`
  padding: 0 5px 0 5px;
  border: 2.2px solid #3e82a4;
  color: #3e82a4;
  margin-left: 22px;
  line-height: 23px;
  font-weight: 670;
  font-size: 12px;
  height: 23px;
  margin-top: 27px;
`
const Engtitle = styled.p`
  font-weight: 450;
  font-size: 13px;
  color: #666666;
  margin-bottom: 20px;
`
const Rate = styled.div`
  height: 26px;
  line-height: 26px;
  margin-top: 7px;
  font-size: 11px;
  display: flex;
  p{
    color: #666666;
    font-size: 14px;
    font-weight:600;
  }
`
const Hr = styled.hr`
  margin-top: 17px;
  margin-bottom: 13px;
  width: 750px;
`
const Moviedesc = styled.div`
  padding-top: 5px;
  color: #333333;
  font-size: 13px;
  font-weight: 550;
  margin-bottom: 25px;
  div{
    margin: -8px auto;
    p{
      font-weight: 700;
    }
  }
`
const Bookingbut = styled.button`
  margin-top: 13px;
  width: 100px;
  height: 35px;
  line-height: 30px;
  color: white;
  background-color: #fb4357;
  border-radius: 5px;
  border: #ffffff;
  font-weight: 700;
`
const Likebut = styled.button`
  margin-top: 13px;
  width: 100px;
  height: 35px;
  line-height: 30px;
  color: #ffffff;
  background-color: #a8a8a8;
  border-radius: 5px;
  border: #ffffff;
  font-weight: 700;
  margin-left: 20px;
`
const Middle = styled.div`
  display: flex;
  height: auto;
  justify-content: space-between;
  margin-top: 100px;
`
const Desc = styled.div`
  width: 700px;
  p{
    letter-spacing:1px;  //글자 사이 간격 벌리기
    word-spacing:2px;   //단어 사이 간격 벌리기
    line-height: 150%;   //줄간격
  }
`
const Ad = styled.div`
  img{
    height: 600px;
  }
`
const Ad2 = styled.div`
  margin-top: 30px;
  margin-bottom: 230px;
`