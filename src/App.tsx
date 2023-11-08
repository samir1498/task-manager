import TasksList from "./components/TasksList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tasks" element={<TasksList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;




