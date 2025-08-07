import { useEffect, useState } from "react";
import { useLogContext } from "../context/LogContext.jsx";
import { getYear, getMonth, getDate, getDay } from "date-fns";
import AppLayout from "./../components/AppLayout.jsx";
import Calendar from "../components/Calendar.jsx";
import MainPageLogList from "../components/MainPageLogList.jsx";
import ExistingLogs from "./../components/ExistingLogs.jsx";
import NoLogs from "./../components/NoLogs.jsx"
import Header from "../components/Header.jsx";

import styled from "styled-components";
import "./../styles/colors.css";

const Main = () => {
    const { selectedDate, setSelectedDate, boardId } = useLogContext();
    const [isLogs, setIsLogs] = useState(false); // 로그 존재하는지 반환하는 로직 짤 것!


    return (
        <AppLayout>
            <Header/>
            <MainWrapper>
                <CalendarWrapper>
                    <Calendar />
                </CalendarWrapper>

                
                <MainPageLogList>
                    {boardId 
                        ? <ExistingLogs />
                        : <NoLogs />
                    }
                </MainPageLogList>
            </MainWrapper>
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

const MainWrapper = styled.div`
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 25px;

`;

