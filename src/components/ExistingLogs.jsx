import LogItem from "./LogItem";

import styled from "styled-components";
import "./../styles/colors.css";

const ExistingLog = () => {
    return (
        <div>
            <LogList>
                <LogItem />
                <LogItem />
                <LogItem />
            </LogList>

            <ExtraLogButton>
                더 많은 로그가 보고 싶으신가요?
            </ExtraLogButton>
        </div>

    );
};

export default ExistingLog;

// 스타일링
const LogList = styled.div`
    margin: 0 auto;
    width: 90%;
`;

const ExtraLogButton = styled.button`
    width: 80%;
    height: 45px;
    font-size: 15px;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: var(--header-color);
        color: var(--white-color);
        text-decoration: underline;
    }
`;
