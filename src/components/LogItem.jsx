import styled from "styled-components";
import "./../styles/colors.css";

const LogItem = () => {
    const h = 1;

    return (
        <LogWrapper>
            <BulletSymbol>
                
            </BulletSymbol>

            <LogTitle>
                안녕하세요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            </LogTitle>
        </LogWrapper>
    );
};

export default LogItem;

const LogWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    margin: 12px 0 12px 0;
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