import Home from "features/home/Home";
import PostNews from "features/postNews/postNews";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpgradeAccount from "features/upgradeAccount/upgrade.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-news" element={<PostNews />} />
        <Route path="/upgrade-account" element={<UpgradeAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
