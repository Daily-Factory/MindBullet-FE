import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppLayout from "./../components/AppLayout.jsx";
import Header from "../components/Header.jsx";
import Calendar from "../components/Calendar.jsx";
// import LogItem from "../components/LogItem.jsx";

import styled from "styled-components";
import "./../styles/colors.css";

const Main = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
        
    useEffect(() => {
        console.log("선택된 날짜", selectedDate);
    }, [selectedDate]);

    return (
        <AppLayout>
            <Header />
            <CalendarWrapper>
                <Calendar 
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
            </CalendarWrapper>

            {/* <CalendarButton 
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            /> */}
        </AppLayout>
    );
}

export default Main;

// 스타일링
const CalendarWrapper = styled.div`
    width: 300px;
    height: 320px;
    margin-top: 20px;
`;
