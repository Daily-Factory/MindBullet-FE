import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main.jsx"
import LogDetail from "./pages/LogDetail.jsx";
import DailyLog from "./pages/DailyLog.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/log-detail" element={ <LogDetail /> } />
        <Route path="/daily-log" element={ <DailyLog /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
