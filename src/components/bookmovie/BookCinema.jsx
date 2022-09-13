import React from "react";
import styled from "styled-components";

function BookCinema() {
  return  (
    <>
    <Cinema>극장</Cinema>


    <Cinemalist>
      
      <li>
        <a href="#" onclick="return false;" title="강남" alt="강남">
            <span>강남</span>
            </a></li>

      <li>
        <a href="#" onclick="return false;" title="강변" alt="강변">
            <span>강변</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="건대입구" alt="건대입구">
            <span>건대입구</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="구로" alt="구로">
            <span>구로</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="대학로" alt="대학로">
            <span class="text">대학로</span>
           </a></li>

            <li>
            <a href="#" onclick="return false;" title="동대문" alt="동대문">
            <span class="text">동대문</span>
          </a></li>

            <li>
            <a href="#" onclick="return false;" title="등촌" alt="등촌">
            <span class="text">등촌</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="명동" alt="명동">
            <span class="text">명동</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="목동" alt="목동">
            <span class="text">목동</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="미아" alt="미아">
            <span class="text">미아</span>
            </a></li>

            
            <li>
            <a href="#" onclick="return false;" title="상봉" alt="상봉">
            <span class="text">상봉</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="성신여대입구" alt="성신여대입구">
            <span class="text">성신여대입구</span>
            </a></li>
            
            <li>
            <a href="#" onclick="return false;" title="송파" alt="송파">
            <span class="text">송파</span>
           </a></li>
           
            <li>
              <a href="#" onclick="return false;" title="신촌아트레온" alt="신촌아트레온">
            <span class="text">신촌아트레온</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="압구정" alt="압구정">
            <span class="text">압구정</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="여의도" alt="여의도">
            <span class="text">여의도</span>
            </a></li>
            
            <li>
            <a href="#" onclick="return false;" title="연남" alt="연남">
            <span class="text">연남</span>
            </a></li>
            
            <li>
            <a href="#" onclick="return false;" title="영등포" alt="영등포">
            <span class="text">영등포</span>
            </a></li>
            
            <li>
            <a href="#" onclick="return false;" title="왕십리" alt="왕십리">
            <span class="text">왕십리</span>
            </a></li>
            
            <li>
        <a href="#" onclick="return false;" title="용산아이파크몰" alt="용산아이파크몰">
          <span class="text">용산아이파크몰</span>
          </a></li>
          
          <li>
            <a href="#" onclick="return false;" title="중계" alt="중계">
            <span class="text">중계</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="천호" alt="천호">
            <span class="text">천호</span>
            </a></li>

          <li>
            <a href="#" onclick="return false;" title="청담씨네시티" alt="청담씨네시티">
            <span class="text">청담씨네시티</span>
            </a></li>

            <li>
            <a href="#" onclick="return false;" title="홍대" alt="홍대">
            <span class="text">홍대</span>
            </a></li>

                     
          </Cinemalist>
    </>
  )
}

export default BookCinema;

const Cinema=styled.div`
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

const Cinemalist=styled.div`
border: solid 1px #dddddd ;
box-shadow: 0 2px 5px 1px rgb(64 60 67 / 30%);
width: 240px;
height: 435px;
color: #dddddd;
font-weight: bold;
align-items: center;
justify-content: center;
display: block;
margin-left: 20px;
overflow: scroll;
overflow-x: hidden;

margin-top: 20px;
`;