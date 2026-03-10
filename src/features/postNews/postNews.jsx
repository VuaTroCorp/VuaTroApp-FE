import Header from "shared/components/header/Header";
import InforBase from "./components/InforBase/inforBase";
import "./postNews.scss";

function PostNews() {
    return (
        <>
            <Header />

            <div className="post-news">
                <InforBase />
            </div>

        </>
    );
}

export default PostNews;
