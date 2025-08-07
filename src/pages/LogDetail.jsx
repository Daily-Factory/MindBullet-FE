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
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const CORRECT_PASSWORD = "1234";

  const handleFirstSubmit = () => {
    if (!title || !content || !selectedSymbol) {
      alert("모두 입력했는지 확인해주세요!");
      return;
    }
    setShowPasswordModal(true);
  };

  const handleFinalSubmit = () => {
    if (password !== CORRECT_PASSWORD) {
      alert("비밀번호가 틀렸습니다.");
      return;
    }

    console.log("작성된 내용:", {
      title,
      content,
      selectedSymbol,
    });

    alert("저장되었습니다!");
    setTitle("");
    setContent("");
    setSelectedSymbol("");
    setPassword("");
    setShowPasswordModal(false);
    navigate("/daily-log");
  };

  const handleClose = () => {
    navigate("/daily-log");
  };

  return (
    <>
      {showPasswordModal && (
        <ModalOverlay>
          <ModalBox>
            <ModalTitle>비밀번호 확인</ModalTitle>
            <PasswordInput
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ModalButtonGroup>
              <ConfirmButton onClick={handleFinalSubmit}>확인</ConfirmButton>
              <CancelButton onClick={() => setShowPasswordModal(false)}>
                취소
              </CancelButton>
            </ModalButtonGroup>
          </ModalBox>
        </ModalOverlay>
      )}

      <AppLayout>
        <Wrapper>
          <PageHeader>
            <BackButton onClick={handleClose}>×</BackButton>
            <PageTitle>상세 페이지 - 작성</PageTitle>
          </PageHeader>

          <BulletSelector selected={selectedSymbol} setSelected={setSelectedSymbol} />

          {/* 선택한 날짜 */} 날짜

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
            <SubmitButton onClick={handleFirstSubmit}>
              <img src={checkmark} alt="저장" width="20" height="20" />
            </SubmitButton>
          </TextAreaWrapper>
        </Wrapper>
      </AppLayout>
    </>
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
  background-color: #a7d8f1;
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
  gap: 12px;
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

const PageTitle = styled.h1`
  font-size: 20px;
  color: #888888;
  margin: 0;
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin: 12px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  max-width: 320px;
  width: 90%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const ModalTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
  text-align: center;
`;

const ModalButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const ConfirmButton = styled.button`
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  padding: 8px 16px;
  background-color: #ccc;
  color: #333;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

