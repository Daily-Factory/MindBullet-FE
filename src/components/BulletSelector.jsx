// BulletSelector.jsx

import { useState } from "react";
import styled from "styled-components";

const icons = [
  { src: "/assets/icons/normal.png", label: "할 일" },
  { src: "/assets/icons/done.png", label: "완료한 일" },
  { src: "/assets/icons/memo.png", label: "메모" },
  { src: "/assets/icons/liked.png", label: "좋았던 일" },
  { src: "/assets/icons/important.png", label: "중요" },
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

