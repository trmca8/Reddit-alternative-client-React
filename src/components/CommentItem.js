import React from 'react';
import { FaUser } from 'react-icons/fa';

// CommentItem component for displaying individual comment details
const CommentItem = ({ comment }) => {
  return (
    <div className="comment-item">
      {/* Display comment author */}
      <div className="comment-author">
        <span className="icon"><FaUser /></span> {comment.author}
      </div>
      {/* Display comment body text */}
      <p className="comment-body">{comment.body}</p>
    </div>
  );
};

export default CommentItem;
