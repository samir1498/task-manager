import TasksList from "./ui/task/TasksList"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./ui/auth/LoginPage"
import MyCalendar from "./ui/Calendar"
import RegisterPage from "./ui/auth/RegisterPage"
import RegisterSuccess from "./ui/auth/RegisterSuccess"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register-success" element={<RegisterSuccess />} />
          <Route path="/tasks" element={<TasksList />} />
          <Route path="/calendar" element={<MyCalendar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
