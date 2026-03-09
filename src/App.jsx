// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "features/home/Home";
import AppRoutes from "features/routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "hooks/useAuth";
import { defaultToastConfig } from "lib/toastConfig";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer {...defaultToastConfig} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
