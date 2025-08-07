import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogContext } from "../context/LogContext.jsx";

import { getYear, getMonth, getDate } from "date-fns";
import axios from "axios";

import AppLayout from "./../components/AppLayout.jsx";
import CalendarButton from "../components/CalendarButton.jsx";
import LogList from "../components/LogList.jsx";
import Header from "../components/Header.jsx";

import "./../styles/CalendarButton.css";
import "./../styles/colors.css";
import backIcon from "./../assets/BeforeIcon.png";
// 기호
// 닷 : 할일   : Task
// x  : 완료   : Completed
// -  : 메모   : Note
// ♥️ : 좋은일 : Joy
// *  : 중요   : Priority

const DailyLog = () => {
  const navigate = useNavigate();

  const { selectedDate, boardId } = useLogContext();
  const year = getYear(selectedDate);
  const month = getMonth(selectedDate) + 1;
  const day = getDate(selectedDate);
  
  // const SERVER_BASE_URL = A`http://mindbullet.kro.kr`;
  const SERVER_BASE_URL = `http://localhost:8080`;

  const postBoardUrl = `${SERVER_BASE_URL}/board/${year}/${month}/${day}`;

  const handleClick = async () => {
    // 로그가 없는 경우 게시판을 생성해야 한다.
    if(boardId === null) {
      try {
        // 게시판 생성 api
        await axios.post(postBoardUrl);

        navigate("/log-detail"); // 성공시, 로그 생성 페이지로 이동
      }
      catch(error) {
        console.log("게시판 생성 실패: ", error);
        alert("로그 생성에 실패하였습니다.(게시판 생성 실패)");
      }
    }
    else {
      // boardId가 이미 있으면 바로 로그 생성 페이지로 이동
      navigate("/log-detail");
    }
  };
  
  return (
    <AppLayout>
      <HeaderWrapper>
        <BackButton onClick={() => navigate("/")}>
          <img src={backIcon}/>
        </BackButton>

        <Header />
      </HeaderWrapper>

      <Wrapper>
        <LogListWrapper>
          <LogList />

          <AddButton onClick={handleClick}>+</AddButton>
        </LogListWrapper>

        <CalendarButton />
      </Wrapper>
    </AppLayout>
  );
};

export default DailyLog;



// styled-components 정의
const HeaderWrapper = styled.div`
  position: relative;
`;

const BackButton = styled.button`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
`;


const Wrapper = styled.div`
  // border: 2px solid red;

  height: 88%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  padding-bottom: 25px;
`;

const LogListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 90%;
  // border: 2px solid blue;

`;

const AddButton = styled.button`
  font-size: 24px;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 10px;
  background-color: #A7D8F1;
  margin-top: 20px;
  margin-bottom: 20px;
  color: white;
  cursor: pointer;
`;