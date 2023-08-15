import "src/styles/comment.css";
import avatar from "src/asset/icon/icon-avatar.svg";
import LikeButton from "./LikeButton";
import { formatCount } from "../helper";
import { useContext } from "react";
import { PostContext } from "../App";

function Comment({ postId, index, comment }) {
  const { posts, updatePost } = useContext(PostContext);
  const { text, author, date, likes, isLiked } = comment;

  const handleCommentLiked = () => {
    updatePost(
      posts.map((post) => {
        if (post.id === postId && post.comments.length > index) {
          const updatedComments = [...post.comments];
          updatedComments[index] = {
            ...updatedComments[index],
            /* update like status */
            isLiked: !isLiked,
            /* update likes count */
            likes: isLiked ? likes - 1 : likes + 1,
          };
          return {
            ...post,
            comments: updatedComments,
          };
        } else return post;
      })
    );
  };

  return (
    <div className="comment">
      <img src={avatar} alt="commenter avatar" />
      <div className="details">
        <p className="author">{author}</p>
        <p className="text">{text}</p>
        <ul className="metadata">
          <li className="date">{date}</li>
          <li className="likes">
            <LikeButton isLiked={isLiked} updateLikes={handleCommentLiked} />
            <span>{formatCount(likes)}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Comment;
