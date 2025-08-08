import styled from "styled-components";
import "./../styles/colors.css";
import { useNavigate } from "react-router-dom";
import { useLogContext } from "../context/LogContext.jsx";
import { getYear, getMonth, getDate } from "date-fns";
import axios from "axios";

const NoLogs = () => {
    const navigate = useNavigate();
    const { selectedDate } = useLogContext();
    const year = getYear(selectedDate);
    const month = getMonth(selectedDate) + 1;
    const day = getDate(selectedDate);
    
    const SERVER_BASE_URL = `http://mindbullet.kro.kr`;
    // const SERVER_BASE_URL = `http://localhost:8080`;

    const postBoardUrl = `${SERVER_BASE_URL}/board/${year}/${month}/${day}`;


    const handleClick = async() => {
        try {
            // 게시판 생성 api
            await axios.post(postBoardUrl);
            navigate("/log-detail"); // 성공시, 로그 생성 페이지로 이동
        }
        catch(error) {
            console.log("게시판 생성 실패: ", error);
            alert("로그 생성에 실패하였습니다.(게시판 생성 실패)");
        }
    };

    return (
        <NoLogWrapper>
            <NoLogText onClick={handleClick}>
                로그가 없습니다.
                <br/>
                로그를 추가하시겠습니까?
            </NoLogText>
        </NoLogWrapper>
    );  
};

export default NoLogs;

// 스타일링
const NoLogWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 0 0 50px 0;
    height: 240px;
`;

const NoLogText = styled.p`
    font-size: 20px;
    color: var(--text-color);
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }'
`;
