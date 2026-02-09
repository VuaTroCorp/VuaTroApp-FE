import Header from "shared/components/header/Header";
import InforBase from "./components/InforBase/inforBase";
import "./postNews.scss";
import InforDes from "./components/InforDes/inforDes";
import InforImg from "./components/InforImg/imageUpload";
import InforContact from "./components/InforContact/inforContact";
import InforPackage from "./components/InforPackage/inforPackage";

function PostNews() {
    return (
        <>
            <Header />
            <div className="post-news-wrapper">
                <div className="post-news">
                    <InforBase />
                    <InforDes />
                    <InforImg />
                    <InforContact />
                    <InforPackage />

                    {/* BUTTON ĐĂNG TIN */}
                    <div className="post-news-action">
                        <button className="btn-post">
                            Đăng tin
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostNews;
