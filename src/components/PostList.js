import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import PostItem from './PostItem';
import PostDetail from './PostDetail';

// PostList component for displaying a list of posts
const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [showJetBrainsOnly, setShowJetBrainsOnly] = useState(false); // Track filter state

  // Fetch all posts on component mount
  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const postsData = await fetchPosts();
      setPosts(postsData);
      setLoading(false);
    };
    getPosts();
  }, []);

  // Fetch and filter posts with "JetBrains" in the title
  const fetchJetBrainsPosts = async () => {
    setLoading(true);
    const response = await fetch(`https://www.reddit.com/r/all/search.json?q=JetBrains&sort=relevance`);
    const data = await response.json();

    const jetBrainsPosts = data.data.children
      .map(child => child.data)
      .filter(post => post.title && post.title.match(/JetBrains/i));

    setPosts(jetBrainsPosts);
    setLoading(false);
    setShowJetBrainsOnly(true);
  };

  // Fetch all posts to reset the filter
  const fetchAllPosts = async () => {
    setLoading(true);
    const postsData = await fetchPosts();
    setPosts(postsData);
    setLoading(false);
    setShowJetBrainsOnly(false);
  };

  // Toggle between filtered posts and all posts
  const togglePosts = () => {
    if (showJetBrainsOnly) {
      fetchAllPosts();
    } else {
      fetchJetBrainsPosts();
    }
  };

  // Toggle comments display for the selected post
  const handleShowComments = (postId) => {
    setSelectedPostId(postId === selectedPostId ? null : postId);
  };

  return (
    <div className="post-list">
      {/* Button to toggle JetBrains posts filter */}
      <button onClick={togglePosts} className="filter-button">
        {showJetBrainsOnly ? "Show All Posts" : "Show Only 'JetBrains' Posts"}
      </button>

      {/* Display loader when loading is true */}
      {loading && <div className="loader"></div>}
  
      {/* Render each post with comments toggle */}
      {posts.map(post => (
        <div key={post.id}>
          <PostItem post={post} onShowComments={() => handleShowComments(post.id)} />
          {selectedPostId === post.id && (
            <PostDetail postId={post.id} onClose={() => setSelectedPostId(null)} />
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
