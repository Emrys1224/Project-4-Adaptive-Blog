import { NavLink, useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { PostContext } from "src/App";
import { formatCount, printCurrentDate } from "../../helper";
import LikeButton from "../LikeButton";
import "src/styles/blogPost.css";
import avatar from "src/asset/images/img-avatar.png";
import iconReturn from "src/asset/icon/icon-return.svg";
import CommentForm from "../CommentForm";
import Comment from "../Comment";

function BlogPost() {
  const postId = useLoaderData();
  const { posts, updatePost } = useContext(PostContext);
  const [displayedComments, setDisplayedComments] = useState(2);
  const { id, image, title, text, author, date, likes, isLiked, comments } =
    posts.find((post) => post.id.toString() === postId);

  const handlePostLike = () => {
    updatePost(
      posts.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            /* update like status */
            isLiked: !isLiked,
            /* update likes count */
            likes: isLiked ? likes - 1 : likes + 1,
          };
        } else return post;
      })
    );
  };

  const handleAddComment = (newComment) => {
    updatePost(
      posts.map((post) => {
        if (post.id === id) {
          const updatedComments = [...post.comments];
          updatedComments.push({
            text: newComment,
            author: "Monkey D. Luffy",
            date: printCurrentDate(),
            likes: 0,
            isLiked: false,
          });
          return {
            ...post,
            comments: updatedComments,
          };
        } else return post;
      })
    );
    setDisplayedComments((prevVal) => prevVal + 1);
  };

  /* Render comments to display from the latest comment with regards to the
   * displayedComments value
   */
  const commentsDisplayed = [];
  for (
    let index = comments.length - 1, toDisplay = displayedComments;
    index >= 0 && toDisplay > 0;
    index--, toDisplay--
  ) {
    commentsDisplayed.push(
      <Comment
        key={index}
        postId={id}
        index={index}
        comment={comments[index]}
      />
    );
  }

  /** Display two more comments or until there is no more to show */
  const handleShowMore = () => setDisplayedComments((prevVal) => prevVal + 2);

  return (
    <div className="blog-container">
      <div className="img-container">
        <img src={image} alt="Blog post image" />
      </div>

      <div className="blog-details">
        <div className="return-link">
          <NavLink to="/">
            <img src={iconReturn} alt="return link" />
            <span>Blog</span>
          </NavLink>
        </div>

        <div className="blog-content">
          <h2>{title}</h2>
          <ul className="post-metadata">
            <li className="post-author">
              <img src={avatar} alt="author picture" />
              {author}
            </li>
            <li className="post-date">{date}</li>
          </ul>
          <p>{text}</p>
          <ul className="post-stats">
            <li className="post-comments">
              <span className="icon-comment">{/* icon set on card.css */}</span>
              <span>{formatCount(comments.length)}</span>
            </li>
            <li className="post-likes">
              <LikeButton isLiked={isLiked} updateLikes={handlePostLike} />
              <span>{formatCount(likes)}</span>
            </li>
          </ul>
        </div>

        <CommentForm addComment={handleAddComment} />

        <hr className="comment-separator" />

        <div className="comments">
          <h3>Comments:</h3>

          {commentsDisplayed}

          {/* Display show more buttons if there is more comments to be displayed */}
          {displayedComments < comments.length && (
            <button className="btn-show-more" onClick={handleShowMore}>
              Show more
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogPost;

export const blogPostLoader = async ({ params }) => {
  return params.id;
};
