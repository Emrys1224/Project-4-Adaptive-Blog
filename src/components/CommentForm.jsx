import { useState } from "react";
import "src/styles/commentForm.css";

function CommentForm({ addComment }) {
  const [newComment, setNewComment] = useState("");

  const handleNewComment = (e) => {
    e.preventDefault();
    addComment(newComment);
    setNewComment("");
  };

  return (
    <form className="form-comment" onSubmit={handleNewComment}>
      <label htmlFor="new-comment">
        <h3>Leave a comment:</h3>
      </label>
      <textarea
        name="new-comment"
        id="new-comment"
        placeholder="Comment here...."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <input
        type="submit"
        value="Send"
        className="btn-submit"
        disabled={!newComment}
      />
    </form>
  );
}

export default CommentForm;
