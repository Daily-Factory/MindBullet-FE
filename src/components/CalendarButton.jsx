import React, { useState, useEffect, useRef } from "react";
import Calendar from "./Calendar";
import { format, subDays, addDays } from "date-fns";

import beforeIcon from "./../assets/BeforeIcon.png";
import afterIcon from "./../assets/AfterIcon.png";
import "./../styles/CalendarButton.css";
import "./../styles/colors.css";

const CalendarButton = ({ selectedDate, setSelectedDate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const calendarRef = useRef(null);

  // 날짜 버튼을 클릭시
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
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
        setIsOpen(false);
      }
    };

    if(isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  
  return (
    <div>
      <div className="buttonWrapper">
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
      </div>

      <div ref={calendarRef}>
        {isOpen && (
          <Calendar 
            selectedDate={selectedDate} 
            setSelectedDate={setSelectedDate} 
            closeCalendar={() => setIsOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default CalendarButton;



  
