import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AppLayout from "./../components/AppLayout.jsx";
import BulletSelector from "../components/BulletSelector";
import checkmark from "../assets/checkmark.png";

const LogDetail = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedSymbol, setSelectedSymbol] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title || !content || !selectedSymbol) {
      alert("모두 입력했는지 확인해주세요!");
      return;
    }

    console.log("작성된 내용:", {
      title,
      content,
      selectedSymbol,
    });

    navigate("/daily-log");
  };

  const handleClose = () => {
    navigate("/daily-log");
  }

  return (
    <AppLayout>
      <Wrapper>
        <PageHeader>
            <BackButton onClick={handleClose}>×</BackButton>
            <PageTitle>상세 페이지 - 작성</PageTitle>
        </PageHeader>
        

        <BulletSelector selected={selectedSymbol} setSelected={setSelectedSymbol} />

        {/* 선택한 날짜  */} 날짜

        <Input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextAreaWrapper>
          <TextArea
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <SubmitButton onClick={handleSubmit}>
            <img src={checkmark} alt="저장" width="20" height="20" />
          </SubmitButton>
        </TextAreaWrapper>
      </Wrapper>
    </AppLayout>
  );
};

export default LogDetail;


const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  max-width: 400px;
  background-color: white;
  margin: 0 auto;
  border-radius: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  margin-bottom: 2px;
`;

const TextAreaWrapper = styled.div`
  position: relative;
  height: 80%;
  margin-bottom: 40px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  font-size: 16px;
  resize: none;
  border: none;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #A7D8F1;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px; /* 버튼과 텍스트 사이 간격 */
  margin-bottom: 16px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #888888;
  cursor: pointer;
  margin: 0;

  &:hover {
    color: #555;
  }
`;

// 나중에 삭제 
const PageTitle = styled.h1`
  font-size: 20px;
  color: #888888;
  margin: 0;
`;



