
import React from "react";
import "./Home.scss";
import Header from "../../components/Home/Header";
import FilterBar from "../../components/Home/FilterBar";
import NewShow from "../../components/Home/NewShow";
import Footer from "../../components/Home/Footer";
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
        </>
    );
}
export default Home;