import styled from "styled-components";
// header 부분 들어가야할 거 같아서 추가했습니당
import Header from "./Header"; 

const AppLayout = ({ children }) => {
  return (
    <AppWrapper>
      <Content>
        <Header/>
        {children}
        </Content>
    </AppWrapper>
  );
};

export default AppLayout;


// 스타일링
const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 800px;
  max-width: 360px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  align-items: center;
`;