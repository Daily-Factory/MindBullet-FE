import styled from "styled-components";

const EditDeleteButtons = ({ onEdit, onDelete }) => {
  return (
    <ButtonContainer>
      <ActionButton onClick={onEdit}>수정</ActionButton>
      <DeleteButton onClick={onDelete}>삭제</DeleteButton>
    </ButtonContainer>
  );
};

export default EditDeleteButtons;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;
  display: flex;
  gap: 12px;
`;

const ActionButton = styled.button`
  padding: 10px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  padding: 10px 16px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;