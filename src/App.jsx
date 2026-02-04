import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "features/Login/Login/Login";
import Register from "features/Login/Register/Register";
import Home from "features/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
