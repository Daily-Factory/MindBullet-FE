import LogItem from "../components/LogItem.jsx";
import { useLogContext } from "../context/LogContext";
import { format } from "date-fns";

import styled from "styled-components";
import "./../styles/colors.css";

const MainPageLogList = ({ children }) => {
    const { selectedDate } = useLogContext();
    
    return (
        <LogsWrapper>
            <DateText>
                {format(selectedDate, "yyyy년 MM월 dd일")}
            </DateText>

            { children }
        </LogsWrapper>
    );
};

export default MainPageLogList;


const LogsWrapper = styled.div`
    // border: 2px solid red;

    display: flex;
    flex-direction: column;


    // justify-content: center;
    align-items: center;
    min-height: 90px;
    width: 90%;
    min-width: 260px;
    
    padding: 20px 0;
    margin: 20px 0 10px 0;
    background-color: var(--primary-color);
    border-radius: 10px;

    overflow-y: auto;

`;

const DateText = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin: 10px;
    color: var(--text-color)
`;


