import "src/styles/likeButton.css";

function LikeButton({ isLiked, updateLikes }) {
  return (
    <button
      className={isLiked ? "icon-likes active" : "icon-likes"}
      onClick={(event) => {
        event.stopPropagation();
        updateLikes();
      }}
    >
      {/* icon set on likeButton.css */}
    </button>
  );
}

export default LikeButton;
