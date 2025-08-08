import LogItem from "./LogItem";
import { useLogContext } from "../context/LogContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./../styles/colors.css";

const ExistingLog = () => {
    const navigate = useNavigate();

    const { logs } = useLogContext();

    const recentLogs = logs?.slice(-3).reverse() ?? [];

    const handleClick = () => {
        navigate("/daily-log")
    }

    return (
        <LogListWrapper>
            <LogList>
                {recentLogs.map((log) => (
                    <LogItem key={log.id} type={log.type} title={log.title} />
                ))}
            </LogList>

            <ExtraLogButton onClick={handleClick}>
                더 많은 로그가 보고 싶으신가요?
            </ExtraLogButton>
        </LogListWrapper>

    );
};

export default ExistingLog;

// 스타일링
const LogListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const LogList = styled.div`
    margin: 0 auto;
    width: 100%;
`;

const ExtraLogButton = styled.button`
    width: 80%;
    height: 45px;
    font-size: 15px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin: 0 auto;

    &:hover {
        background-color: var(--header-color);
        color: var(--white-color);
        text-decoration: underline;
    }
`;
