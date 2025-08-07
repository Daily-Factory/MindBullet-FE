import styled from "styled-components";
import "./../styles/colors.css";

const LogList = () => {
    return (
        <LogBoxWrapper>
            {dummyLogs.map((log) => (
            <LogBox key={log.id} onClick={() => console.log(`${log.id}번 로그 클릭됨`)}>
              <div style={{ fontWeight: "bold" }}>{log.title}</div>
            </LogBox>
          ))}
        </LogBoxWrapper>
    );
};

export default LogList;



// 스타일링
const LogBoxWrapper = styled.div`
    width: 100%;
    max-height: 620px;
	height: auto;
	display: flex;
	flex-direction: column;
	gap: 12px;
    overflow-y: auto;
    // border: 2px solid green;
`;

const LogBox = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  cursor: pointer;
  background-color: #f9f9f9;
`;


const dummyLogs = [
	{
		"id": 1,
		"type": "Task",
		"title": "태스크(닷)"
	},
	{
		"id": 2,
		"type": "Completed",
		"title": "컴플리티드(X)"
	},
  {
		"id": 3,
		"type": "Note",
		"title": "메모(-)"
	},
  // {
	// 	"id": 4,
	// 	"type": "Note",
	// 	"title": "메모(-)"
	// },
  // {
	// 	"id": 5,
	// 	"type": "Note",
	// 	"title": "메모(-)"
	// },
  // {
	// 	"id": 6,
	// 	"type": "Note",
	// 	"title": "메모(-)"
	// },
  // {
	// 	"id": 7,
	// 	"type": "Note",
	// 	"title": "메모(-)"
	// },
  // {
	// 	"id": 8,
	// 	"type": "Note",
	// 	"title": "메모(-)"
	// },
  // {
	// 	"id": 9,
	// 	"type": "Note",
	// 	"title": "메모(-)"
	// },

];