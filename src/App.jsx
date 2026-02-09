// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "features/home/Home";
import AppRoutes from "features/routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
