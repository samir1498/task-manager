import TasksList from "./adapters/TasksList"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./ui/auth/LoginPage"
import MyCalendar from "./ui/Calendar"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TasksList />} />
          <Route path="/calendar" element={<MyCalendar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
