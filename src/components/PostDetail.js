import React, { useEffect, useState } from 'react';
import { fetchComments } from '../services/api';
import CommentItem from './CommentItem';

// PostDetail component for displaying comments of a specific post
const PostDetail = ({ postId, onClose }) => {
  const [comments, setComments] = useState([]);
  const [visibleComments, setVisibleComments] = useState(5); // Controls how many comments to display
  const [isCommentsVisible, setIsCommentsVisible] = useState(true); // Track visibility of comments
  const [loading, setLoading] = useState(false); // Track loading state for comments

  // Fetch comments when postId changes
  useEffect(() => {
    const getComments = async () => {
      setLoading(true); // Start loader
      const commentsData = await fetchComments(postId);
      setComments(commentsData);
      setLoading(false); // Stop loader
    };
    getComments();
  }, [postId]);

  // Function to increase the number of visible comments by 5
  const handleShowMore = () => {
    setVisibleComments(prevVisibleComments => prevVisibleComments + 5);
  };

  // Function to hide comments and reset the number of visible comments
  const handleHideComments = () => {
    setIsCommentsVisible(false);
    setVisibleComments(5); // Reset to initial state
    onClose(); // Close the PostDetail view
  };

  return (
    <div className="post-detail">
      <h3>Comments</h3>
      
      {/* Show loader while comments are being fetched */}
      {loading ? (
        <div className="loader"></div>
      ) : (
        isCommentsVisible && (
          <>
            {/* Render each comment using CommentItem */}
            {comments.slice(0, visibleComments).map(comment => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
            <div>
              {/* Show more button to display additional comments in batches of 5 */}
              {visibleComments < comments.length && (
                <button onClick={handleShowMore} className="show-comments-button">Show more</button>
              )}
              {/* Hide Comments button to close the comments view */}
              <button onClick={handleHideComments} className="show-comments-button">Hide Comments</button>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default PostDetail;
