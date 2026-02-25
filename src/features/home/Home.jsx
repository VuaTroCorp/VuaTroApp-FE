import FilterBar from "shared/components/filter-bar/FilterBar";
import NewShow from "./components/news/NewShow";
import Footer from "components/footer/Footer";
import "./Home.scss";
import Navbar from "components/header/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-page">
        <div className="filter-wrapper">
          <FilterBar />
        </div>

        <div className="content-wrapper">
          <NewShow />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
