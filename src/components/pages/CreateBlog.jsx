import "src/styles/createBlog.css";
import { PostImage } from "../PostImage";
import { NavLink, useNavigate } from "react-router-dom";
import iconReturn from "src/asset/icon/icon-return.svg";
import { useContext, useState } from "react";
import { PostContext } from "../../App";
import { printCurrentDate } from "../../helper";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const { posts, updatePost } = useContext(PostContext);
  const navigateTo = useNavigate();

  const handelAddImage = (fileUrl) => {
    setImgUrl(fileUrl);
    console.log(fileUrl);
  };

  const handleCreateBlog = (e) => {
    e.preventDefault();

    const newPost = [
      {
        id: posts[posts.length - 1].id + 1,
        image: imgUrl,
        title: title,
        text: content,
        author: "Monkey D. Luffy",
        date: printCurrentDate(),
        likes: 0,
        isLiked: false,
        comments: [],
      },
    ];
    updatePost([...posts, ...newPost]);

    setTitle("");
    setContent("");
    setImgUrl("");

    navigateTo(`/post/${newPost[0].id}`);
  };

  return (
    <div className="create-blog">
      <div className="return-link">
        <NavLink to="/">
          <img src={iconReturn} alt="return link" />
          <span>Blog</span>
        </NavLink>
      </div>
      <h2>New Post</h2>
      <PostImage addImageSuccessful={handelAddImage} />
      <form className="form-create-blog" onSubmit={handleCreateBlog}>
        <div className="input-group">
          <label htmlFor="title">
            <h3>Add title*</h3>
          </label>
          <textarea
            name="title"
            id="title"
            placeholder="Blog Title"
            className="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="content">
            <h3>Add text*</h3>
          </label>
          <textarea
            name="content"
            id="content"
            placeholder="Blog Content"
            className="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          value="Post"
          disabled={!title || !content || !imgUrl}
        />
      </form>
    </div>
  );
}

export default CreateBlog;
