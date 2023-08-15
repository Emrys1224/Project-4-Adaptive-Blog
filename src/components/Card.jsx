import { useContext } from "react";
import "src/styles/card.css";
import { PostContext } from "../App";
import LikeButton from "./LikeButton";
import { formatCount } from "../helper";

function Card({ postContent, navToPost }) {
  const { posts, updatePost } = useContext(PostContext);
  const { id, image, title, text, author, date, likes, isLiked, comments } =
    postContent;

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

  return (
    <div
      className="card"
      /* Clicking anywhere within the card (except the like button)
       * would redirect to the blog page pertaining to this card
       */
      onClick={() => navToPost(id)}
    >
      <div className="image-container">
        <img src={image} alt="post image" />
      </div>
      <div className="card-info">
        <h2 className="post-title">{title}</h2>
        <p className="post-text">{text}</p>
        <div className="post-footer">
          <ul className="post-metadata">
            <li className="post-date">{date}</li>
            <li className="separator">·</li>
            <li className="post-author">{author}</li>
          </ul>
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
      </div>
    </div>
  );
}

export default Card;
