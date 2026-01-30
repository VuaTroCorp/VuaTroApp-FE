import Header from "shared/components/header/Header";
import "./Home.scss";
import FilterBar from "shared/components/filter-bar/FilterBar";
import NewShow from "./components/news/NewShow";
import Footer from "shared/components/footer/Footer";
import Login from "features/Login/Login";
function Home() {
  return (
    <>
      <Header />
      <div className="home-page">
        <div className="filter-wrapper">
          <FilterBar />
        </div>
        <div className="content-wrapper">
          <NewShow />
        </div>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
          <Login/>
    </>
  );
}
export default Home;
