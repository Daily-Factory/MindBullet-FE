import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import { getYear, getMonth, isSameDay } from "date-fns";
import { useLogContext } from "../context/LogContext";
import "./../styles/Calendar.css";
import "./../styles/colors.css";
import beforeIcon from "./../assets/BeforeIcon.png";
import afterIcon from "./../assets/AfterIcon.png";


const Calendar = () => {  
  const { selectedDate, setSelectedDate, closeCalendar } = useLogContext();

  const years = Array.from({ length: getYear(new Date()) + 1 - 2000 }, (_, i) => getYear(new Date()) - i);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => {
        setSelectedDate(date);
        closeCalendar(); // 날짜 선택시 캘린더 닫기
      }}
      minDate={new Date('2000-01-01')} // minDate 이전 날짜 선택 불가
      maxDate={new Date()} // maxDate 이후 날짜 선택 불가
      inline // 달력만 나오도록(기존에는 입력창을 클릭하면 달력이 뜬다.)
      formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)} // 요일 첫 글자(S, M, T, W, ...)만 나타나도록

      calendarClassName="calendarWrapper" // 캘린더 부분의 클래스명 지정
      // 개별 날짜 부분의 클래스명 지정
      // dayClassName은 바로 클래스명 전달 불가하여 "반드시 함수 형태로 전달"
      dayClassName={ (day) => {
        const isSelected = selectedDate && isSameDay(day, selectedDate);
        // console.log("day: ", day, "selected: ", isSelected ? "selected" : "unSelected" );
        return isSelected ? "selected"  : "unselectedDay"; 
      }} // 선택한 날짜는 selectedDay, 선택하지 않은 날짜는 unselectedDay로 클래명 지정


      showYearDropdown
      scrollableYearDropdown
      yearDropdownItemNumber={100}


      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="customHeaderContainer">
          <div>
            <select
              className="customHeaderYear"
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <span className="customHeaderMonth">
              {months[getMonth(date)]}
            </span>
          </div>
          
          <div>
            <button 
              type="button"
              className="monthBtn"
              onClick={decreaseMonth} 
              disabled={prevMonthButtonDisabled}
            >
              <img src={beforeIcon} alt="이전"/>
            </button>

            <button 
              type="button"
              className="monthBtn"
              onClick={increaseMonth} 
              disabled={nextMonthButtonDisabled}
            >
              <img src={afterIcon} alt="이후"/>
            </button>
          </div>
        </div>
      )}
    />
  );
};

export default Calendar;
