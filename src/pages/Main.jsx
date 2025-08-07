import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppLayout from "./../components/AppLayout.jsx";
import Calendar from "../components/Calendar.jsx";
import MainPageLogList from "../components/MainPageLogList.jsx";
import ExistingLogs from "./../components/ExistingLogs.jsx";
import NoLogs from "./../components/NoLogs.jsx"

import styled from "styled-components";
import "./../styles/colors.css";

const Main = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const isLogs = false; // 로그 존재하는지 반환하는 로직 짤 것!

    useEffect(() => {
        console.log("선택된 날짜", selectedDate);
    }, [selectedDate]);

    return (
        <AppLayout>
            <CalendarWrapper>
                <Calendar 
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
            </CalendarWrapper>

            <MainPageLogList
                selectedDate={selectedDate} 
            >
                {isLogs 
                    ? <ExistingLogs />
                    : <NoLogs />
                }
            </MainPageLogList>
                

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
