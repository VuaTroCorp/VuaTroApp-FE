import Header from "../../components/Header";
import React from "react";
import "./Home.scss";
import FilterBar from "../../components/FilterBar";
import NewShow from "../../components/NewShow";
import Footer from "../../components/Footer";
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