import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "features/Login/Login/Login";
import Register from "features/Login/Register/Register";
import Home from "features/home/Home";
import PostNews from "features/postNews/postNews";
import UpgradeAccount from "features/upgradeAccount/upgrade.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-news" element={<PostNews />} />
        <Route path="/upgrade-account" element={<UpgradeAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
