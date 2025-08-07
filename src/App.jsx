import { useState } from 'react';
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LogProvider } from './context/LogContext.jsx';
import Main from "./pages/Main.jsx"
import LogDetail from "./pages/LogDetail.jsx";
import DailyLog from "./pages/DailyLog.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <LogProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/daily-log" element={<DailyLog />} />
          <Route path="/log-detail" element={<LogDetail />} /> {/* 생성 */}
          <Route path="/log-detail/:id" element={<LogDetail />} /> {/* 수정/삭제 */}
        </Routes>
      </BrowserRouter>
    </LogProvider>
  )
}

export default App
