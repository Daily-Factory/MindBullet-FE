import { tr } from "date-fns/locale";
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { getYear, getMonth, getDate } from "date-fns";
export const LogContext = createContext();

export const LogProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [boardId, setBoardId] = useState(null);
    const [logs, setLogs] = useState([]); // 특정 날짜의 로그들을 담는 배열
    const [isCalendarOpen, setIsCalendarOpen] = useState(null);

    const openCalendar = () => setIsCalendarOpen(true);
    const closeCalendar = () => setIsCalendarOpen(false);

    const SERVER_BASE_URL = `http://mindbullet.kro.kr`;
    // const SERVER_BASE_URL = `http://localhost:8080`;


    useEffect(() => {
        // 캘린더에서 날짜 변경 시, boardId & 해당 board에 있는 로그 반환
        const getLogsByDate = async () => {    
            const year = getYear(selectedDate);
            const month = getMonth(selectedDate) + 1;
            const day = getDate(selectedDate);
            const getBoardUrl = `${SERVER_BASE_URL}/board/${year}/${month}/${day}`;

            // console.log("현재년월일: ", selectedDate);
            // console.log("요청 URL: ", getBoardUrl);

            try {
                // 1. boardId 요청 
                const boardRes = await axios.get(getBoardUrl);
                const foundBoardId = boardRes.data?.boardId;
                console.log("boardId 응답 성공: ", boardRes.data);
                setBoardId(foundBoardId ?? null);

                // 2. boardId가 있으면 해당 id에 있는 로그 배열 요청
                if(foundBoardId) {
                    const logsUrl = `${SERVER_BASE_URL}/board/${foundBoardId}/memos`;
                    const logsRes = await axios.get(logsUrl);

                    console.log("logs 배열 응답 성공: ", logsRes.data);
                    setLogs(logsRes.data);
                }
                else {
                    setLogs([]);
                    console.log("logs 배열 요청 실패", logsRes.data);
                }
            }
            catch(error) {
                console.error("로그 요청 실패: ", error);
                setBoardId(null);
                setLogs([]); // 에러 발생 시, 안전하게 초기화한다.
            }

            // /board/{boardId}/memos
            
            
        };

        getLogsByDate();
        
    }, [selectedDate]);

    return (
        <LogContext.Provider 
            value={{ 
                selectedDate, 
                setSelectedDate, 
                boardId, 
                setBoardId,
                logs,
                setLogs,
                isCalendarOpen,
                openCalendar,
                closeCalendar,
            }}
        >
            { children }
        </LogContext.Provider>
    );
}

export const useLogContext = () => useContext(LogContext);