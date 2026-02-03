import Header from "shared/components/header/Header";
import Footer from "shared/components/footer/Footer";
import FilterBar from "shared/components/filter-bar/FilterBar";
import NewShow from "./components/news/NewShow";

import "./Home.scss";

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

      <Footer />
    </>
  );
}

export default Home;
