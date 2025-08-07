import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AppLayout from "./../components/AppLayout.jsx";

// 더미 데이터
const dummyLogs = [
  { id: 1, title: "제목1" }, 
  { id: 2, title: "제목2" },
  { id: 3, title: "제목3" },
];

// styled-components 정의
const Wrapper = styled.div`
  padding: 20px;
`;

const LogBox = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  cursor: pointer;
  background-color: #f9f9f9;
`;

//AddButtonWrapper을 가운데 정렬하는 영역 
const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

// + 버튼 자체
const AddButton = styled.button`
  font-size: 24px;
  width: 48px;
  height: 48px;
  border: none;
  background-color: #A7D8F1;
  color: white;
  cursor: pointer;
`;

const DailyLog = () => {
  const navigate = useNavigate();
  
  return (
    <AppLayout>
      <Wrapper>
        <h1>데일리 로그 목록 페이지</h1>
        {dummyLogs.map((log) => (
          <LogBox key={log.id} onClick={() => console.log(`${log.id}번 로그 클릭됨`)}>
            <div style={{ fontWeight: "bold" }}>{log.title}</div>
          </LogBox>
        ))}

        <AddButtonWrapper>
          <AddButton onClick={() => navigate("/log-detail")}>+</AddButton>
        </AddButtonWrapper>
      </Wrapper>
    </AppLayout>
  );
};

export default DailyLog;
