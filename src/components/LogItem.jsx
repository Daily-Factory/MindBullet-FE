import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import "./../styles/colors.css";

// 기호
// 닷 : 할일   : Task
// x  : 완료   : Completed
// -  : 메모   : Note
// ♥️ : 좋은일 : Joy
// *  : 중요   : Priority

const LogItem = ({ id, type, title }) => {
    const navigate = useNavigate();

    const typeImageMap = {
        Task: "/images/TaskIcon.png",
        Completed: "/images/CompletedIcon.png",
        Note: "/images/NoteIcon.png",
        Joy: "/images/JoyIcon.png",
        Priority: "/images/PriorityIcon.png",
    };

    const imageSrc = typeImageMap[type] || "/images/TaskIcon.png";

    const handleClick = () => {
        
        navigate("/log-detail");
    };

    return (
        <LogWrapper onClick={handleClick}>
            <BulletSymbol>
                <img src={imageSrc} alt={type} style={{ width: "100%", height: "100%" }}/>
            </BulletSymbol>

            <LogTitle>
                {title}
            </LogTitle>
        </LogWrapper>
    );
};

export default LogItem;

const LogWrapper = styled.div`
    // border: 2px solid red;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 92%;
    height: 50px;
    margin: 12px;
    background-color: var(--primary-color);
    border: 2px solid var(--secondary-color);
    border-radius: 10px;

    &:hover {
        background-color: var(--secondary-color);
        border: none;
    }
`;

const BulletSymbol = styled.div`

    width: 25px;
    height: 25px;
    background-color: var(--white-color);
    border-radius: 2px;
`;

const LogTitle = styled.p`
    width: 80%;
    height: 30px;
    margin-left: 10px;
    white-space: nowrap;
    overflow-x: auto;

    &::-webkit-scrollbar {
        display: none;
    }
    
    scrollbar-width: none;

    -ms-overflow-style: none;
`;