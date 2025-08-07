import styled from "styled-components";

const Header = () => {
    return (
        <HeaderWrapper>
            <h2>프로젝트 이름</h2>
        </HeaderWrapper>
    );
}

export default Header;

// 스타일링
const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    
    width:100%;
    height: 68px;
    background-color: #B0DCF8;
`;
