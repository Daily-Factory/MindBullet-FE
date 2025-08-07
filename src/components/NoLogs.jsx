import styled from "styled-components";
import "./../styles/colors.css";
import { useNavigate } from "react-router-dom";

const NoLogs = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/log-detail")
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
