// BulletSelector.jsx

import { useState } from "react";
import styled from "styled-components";
import CompletedIcon from "../assets/CompletedIcon.png"
import JoyIcon from "../assets/JoyIcon.png"
import NoteIcon from "../assets/NoteIcon.png"
import PriorityIcon from "../assets/PriorityIcon.png"
import TaskIcon from "../assets/TaskIcon.png"



const icons = [
  { src: TaskIcon, label: "할 일" },
  { src: CompletedIcon, label: "완료한 일" },
  { src: NoteIcon, label: "메모" },
  { src: JoyIcon, label: "좋았던 일" },
  { src: PriorityIcon, label: "중요" },
];

const BulletSelector = ({selected, setSelected}) => {
  const [isOpen, setIsOpen] = useState(false);
  
// 불렛저널기호 선택했을 때 실행되는 함수
  const handleSelect = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <Container>
      <SelectedBox onClick={() => setIsOpen((prev) => !prev)}>
        {selected ? (
          <>
            <Icon src={selected.src} alt={selected.label} />
            
          </>
        ) : (
          <Label>기호를 선택하세요</Label>
        )}
      </SelectedBox>
 
      {/* // isOpen이 true일 때만 List 영역이 보여지고, false 이면 렌더링 자체가 안됨 -숨겨짐  */}
      {isOpen && (
        <List>
          {icons.map((item) => (
            <Item key={item.label} onClick={() => handleSelect(item)}>
              <Icon src={item.src} alt={item.label} />
              <Label>{item.label}</Label>
            </Item>
          ))}
        </List>
      )}
    </Container>
  );
};

export default BulletSelector;

const Container = styled.div`
  position: relative;
`;

const SelectedBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  
  margin: 0 auto;
  white-space: nowrap;
`;

const List = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  border: 1px solid #ccc;
  background: white;
  border-radius: 8px;
  padding: 8px;
  z-index: 10;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Label = styled.span`
  font-size: 14px;
`;

