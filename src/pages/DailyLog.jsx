import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "./../components/AppLayout.jsx";
import CalendarButton from "../components/CalendarButton.jsx";
import LogList from "../components/LogList.jsx";
import Header from "../components/Header.jsx";

import "./../styles/CalendarButton.css";
import "./../styles/colors.css";

// 기호
// 닷 : 할일   : Task
// x  : 완료   : Completed
// -  : 메모   : Note
// ♥️ : 좋은일 : Joy
// *  : 중요   : Priority

const DailyLog = () => {
  const navigate = useNavigate();
  
  return (
    <AppLayout>
      <Header />
      <Wrapper>
        <LogListWrapper>
          <LogList />

          <AddButton onClick={() => navigate("/log-detail")}>+</AddButton>
        </LogListWrapper>

        <CalendarButton />
      </Wrapper>
    </AppLayout>
  );
};

export default DailyLog;



// styled-components 정의
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