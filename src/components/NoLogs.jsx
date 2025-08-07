import styled from "styled-components";
import "./../styles/colors.css";

const NoLogs = () => {
    return (
        <NoLogWrapper>
            <NoLogText>
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

    &:hover {
        text-decoration: underline;
    }'
`;
