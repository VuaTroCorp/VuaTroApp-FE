<<<<<<< HEAD
import React from "react";
import "./PostListPage.scss";
import SideBar from "components/shared/User/Management/SideBar/SideBar";
import PostList from "components/shared/User/Management/PostList/PostList";

const PostListPage = () => {
  return (
    <div className="main-post-list-container">
      <div className="left-infor-container">
        <SideBar />
      </div>
      <div className="right-post-list-container">
        <PostList />
      </div>
    </div>
  );
};

export default PostListPage;
=======
import SideBar from "components/shared/User/Management/SideBar/SideBar";


function PostList() {

  return (
    <div className="home-page">
      <main className="main-content">
        <section className="left-content">
          <SideBar />
        </section>
      </main>
    </div>
  );
}
export default PostList;
>>>>>>> af49e5054bc589476832e600807dd73f1af96e35
