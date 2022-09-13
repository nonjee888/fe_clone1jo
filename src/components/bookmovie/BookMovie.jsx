import React from "react";
import styled from "styled-components";

function BookingTime() {

  return (
    <>
    <Movie>영화</Movie>

    <Tabmenu>
      <Tab1>
    <span class="side on"></span>
    <a href="#" class="button menu1 selected">
      전체</a>
      </Tab1>

      <Tab>
    <span class="side on"></span>
    <a href="http://www.cgv.co.kr/arthouse/" class="button menu2">
      아트하우스▼</a>
    </Tab>

      <Tab>
      <span class="arrow"></span>
      <a href="http://www.cgv.co.kr/theaters/special/defaultNew.aspx" class="button menu3">
        특별관▼</a>
        </Tab>

    </Tabmenu>

    <Sortmenu>

      <Tab2>
      <a href="#" onclick="sortMovieByRank();return false;" 
      id="movieSortRankBtn" class="button btn-rank selected">예매율순</a>
      </Tab2>

      <Tab2>
      <a href="#" onclick="sortMovieByName();return false;" 
      id="movieSortNameBtn" class="button btn-abc">가나다순</a>
      </Tab2>
    </Sortmenu>

    <Movielist>
      
      <li>
        <a href="#" onclick="return false;" title="알라딘" alt="알라딘">
          <span>알라딘</span>
          </a></li>

          <li>
            <a href="#" onclick="return false;" title="탑건-매버릭" alt="탑건-매버릭">
            <span>탑건-매버릭</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="헌트" alt="헌트">
            <span class="text">헌트</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="한산: 용의 출현" alt="한산: 용의 출현">
            <span class="text">한산: 용의 출현</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="놉" alt="놉">
            <span class="text">놉</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="사랑할 땐 누구나 최악이 된다" alt="사랑할 땐 누구나 최악이 된다">
            <span class="text">사랑할 땐 누구나 최악이 된다</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="시맨틱 에러: 더 무비" alt="시맨틱 에러: 더 무비">
            <span class="text">시맨틱 에러: 더 무비</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="한 여름밤의 재즈" alt="한 여름밤의 재즈">
            <span class="text">한 여름밤의 재즈</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="헤어질 결심" alt="헤어질 결심">
            <span class="text">헤어질 결심</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="미니언즈2" alt="미니언즈">
            <span class="text">미니언즈</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="불릿 트레인" alt="불릿 트레인">
            <span class="text">불릿 트레인</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="노스맨" alt="노스맨">
            <span class="text">노스맨</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="토르: 러브 앤 썬더" alt="토르: 러브 앤 썬더">
            <span class="text">토르: 러브 앤 썬더</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="엘비스" alt="엘비스">
            <span class="text">엘비스</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="그레이 맨" alt="그레이 맨">
            <span class="text">그레이 맨</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="마녀(魔女) Part2. The Other One" alt="마녀(魔女) Part2. The Other One">
            <span class="text">마녀(魔女) Part2. The Other One</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="모가디슈" alt="모가디슈">
            <span class="text">모가디슈</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="닥터 스트레인지: 대혼돈의 멀티버스" alt="닥터 스트레인지: 대혼돈의 멀티버스">
            <span class="text">닥터 스트레인지: 대혼돈의 멀티버스</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="더 배트맨" alt="더 배트맨">
            <span class="text">더 배트맨</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="신비한 동물들과 덤블도어의 비밀" alt="신비한 동물들과 덤블도어의 비밀">
            <span class="text">신비한 동물들과 덤블도어의 비밀</span>
            </a></li>
            
    </Movielist>
    </>
  )
  
}

export default BookingTime;

const Movie=styled.div`
background: #444444;
border: solid none;
width: 280px;
height: 40px;
color: #dddddd;
font-weight: bold;
align-items: center;
justify-content: center;
display: flex;
`;

const Tabmenu=styled.div`
margin-top: 20px;
margin-left: 20px;
margin-right: 20px;
border: none;
height: 30px;
color: #dddddd;
font-weight: bold;
align-items: center;
justify-content: center;
display: flex;
`;

const Sortmenu=styled.div`
border:  none;
height: 30px;
color: #dddddd;
margin-left: 10px;
font-weight: bold;
display: flex;
`;

const Movielist=styled.div`
border: solid 1px #dddddd;
width: 240px;
height: 370px;
color: #dddddd;
font-weight: bold;
align-items: center;
justify-content: center;
display: block;
margin-left: 20px;
overflow: scroll;
overflow-x: hidden;
margin-top: 5px;
box-shadow: 0 2px 5px 1px rgb(64 60 67 / 30%);
`;

const Tab1=styled.div`
border: solid 1px #dddddd;
width: 94px;
height: 30px;
color: #dddddd;
background:  #dddddd;
font-weight: bold;
align-items: center;
justify-content: center;
display: flex;
font-size: small;
`;

const Tab=styled.div`
border: solid 1px #dddddd;
width: 94px;
height: 30px;
color: #dddddd;
font-weight: bold;
align-items: center;
justify-content: center;
display: flex;
font-size: small;
`;

const Tab2=styled.div`
border: none;
width: 70px;
height: 30px;
color: #dddddd;
font-weight: bold;
align-items: center;
justify-content: center;
display: flex;
font-size: small;
margin-left: 10px;
`;



