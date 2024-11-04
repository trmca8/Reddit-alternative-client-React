import React from 'react';
import { FaComment, FaUser, FaArrowUp } from 'react-icons/fa';

// PostItem component for displaying an individual post
const PostItem = ({ post, onShowComments }) => {
  // Extract image URL if available
  const imageUrl = post.thumbnail && post.thumbnail !== "self" ? post.thumbnail : null;

  return (
    <div className="post-item">
      {/* Post title */}
      <h2 className="post-title">{post.title}</h2>

      {/* Display post image if it exists */}
      {imageUrl ? (
        <img src={imageUrl} alt="no image" className="post-image" />
      ) : null}

      {/* Post information with author, upvotes, and comments count */}
      <div className="post-info">
        <span className="icon"><FaUser /></span> <strong>{post.author}</strong> |{" "}
        <span className="icon"><FaArrowUp /></span> {post.ups} upvotes |{" "}
        <span className="icon"><FaComment /></span> {post.num_comments} comments
        <button onClick={onShowComments} className="show-comments-button">Show Comments</button>
      </div>

      {/* Link to the original post on Reddit */}
      <a href={`https://www.reddit.com${post.permalink}`} target="_blank" rel="noopener noreferrer" className="post-link">
        View Original Post
      </a>
    </div>
  );
};

export default PostItem;
