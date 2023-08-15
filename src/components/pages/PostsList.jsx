import { useContext, useState } from "react";
import "src/styles/postList.css";
import { PostContext } from "src/App";
import Card from "../Card";
import { NavLink, useNavigate } from "react-router-dom";

export const PostsList = () => {
  // TODO: the code below is just for demo,
  // so feel free to delete it and write your own.

  const [isAllSelected, setAllSelected] = useState(true);
  const { posts } = useContext(PostContext);

  const navigateTo = useNavigate();

  const handleNavToPost = (postId) => {
    navigateTo(`/post/${postId}`);
  };

  return (
    <div className="post-list-container">
      <div className="card-container">
        <div className="btn-group">
          <div className="btn-posts-selection">
            <button
              className={isAllSelected ? "active" : ""}
              /* Display all the blogs */
              onClick={() => setAllSelected(true)}
            >
              All posts
            </button>
            <button
              className={isAllSelected ? "" : "active"}
              /* Display only the blogs marked as favorite */
              onClick={() => setAllSelected(false)}
            >
              Favorites
            </button>
          </div>
          <NavLink to="/post/create" className="btn-add">
            <span className="icon-add">{/* icon set on postList.css */}</span>
            <span>Add post</span>
          </NavLink>
        </div>
        {posts.map((post) => {
          /* Render all blogs or only those marked as favorite as per the active button */
          if (isAllSelected || post.isLiked === true)
            return (
              <Card
                key={post.id}
                postContent={post}
                navToPost={handleNavToPost}
              />
            );
        })}
      </div>
    </div>
  );
};
