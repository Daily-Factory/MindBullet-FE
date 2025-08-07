import LogItem from "../components/LogItem.jsx";

import { format } from "date-fns";

import styled from "styled-components";
import "./../styles/colors.css";

const MainPageLogList = ({ selectedDate, children }) => {
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 90%;
    min-width: 260px;
    height: 360px;
    margin: 20px 0 30px 0;
    background-color: var(--primary-color);
    border-radius: 10px;
`;

const DateText = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin: 10px;
    color: var(--text-color)
`;



