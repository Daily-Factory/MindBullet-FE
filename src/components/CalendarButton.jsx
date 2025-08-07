import React, { useState, useEffect, useRef } from "react";
import Calendar from "./Calendar";
import { format, subDays, addDays } from "date-fns";
import { useLogContext } from "../context/LogContext";
import beforeIcon from "./../assets/BeforeIcon.png";
import afterIcon from "./../assets/AfterIcon.png";
import styled from "styled-components";
import "./../styles/CalendarButton.css";
import "./../styles/colors.css";

const CalendarButton = () => {
  const calendarRef = useRef(null);
  const { selectedDate, setSelectedDate, isCalendarOpen, openCalendar, closeCalendar } = useLogContext();
  
  // 날짜 버튼을 클릭시
  const handleClick = (e) => {
    e.preventDefault();
    isCalendarOpen ? closeCalendar() : openCalendar();
  };

  // 하루 전 날짜로 이동
  const handleBefore = () => {
    const newDate = subDays(selectedDate, 1);
    const minDate = new Date("2000-01-01");
    
    if(newDate >= minDate) {
      setSelectedDate(newDate);
    }
  }

  // 하루 뒤 날짜로 이동
  const handleAfter = () => {
    const newDate = addDays(selectedDate, 1);
    const maxDate = new Date();

    if(newDate <= maxDate) {
      setSelectedDate(newDate);
    }
  }

  // 캘린더 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (e) => {
      if(
        calendarRef.current && 
        !calendarRef.current.contains(e.target)
      ) {
        closeCalendar();
      }
    };

    if(isCalendarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCalendarOpen]);
  
  return (
    <div>
      {/* 달력 팝업 */}
      <div ref={calendarRef}>
        {isCalendarOpen && (
          <Calendar />
        )}
      </div>

      {/* 날짜 이동 버튼 집합 */}
      <ButtonWrapper>
        <button 
          className="beforeButton"
          onClick={handleBefore}
        >
          <img src={beforeIcon} alt="이전" />
        </button>

        <button 
          className="dateButton" 
          onClick={handleClick}
        >
          {format(selectedDate, "yyyy년 MM월 dd일")}
        </button>
        
        <button 
          className="afterButton"
          onClick={handleAfter}
        >
          <img src={afterIcon} alt="이후" />
        </button>
      </ButtonWrapper>
    </div>
  );
};

export default CalendarButton;
  
// 스타일링
const ButtonWrapper = styled.div`
  display: flex;
  margin: 10px;
`;