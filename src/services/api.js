import axios from 'axios';

// Base URL for Reddit API
const BASE_URL = 'https://www.reddit.com';

// Function to fetch posts from a specific subreddit
// @param {string} subreddit - The subreddit from which to fetch posts (default is 'all')
// @returns {Array} Array of posts or an empty array if an error occurs
export const fetchPosts = async (subreddit = 'all') => {
  try {
    // Make a GET request to Reddit API to fetch hot posts in the specified subreddit
    const response = await axios.get(`${BASE_URL}/r/${subreddit}/hot.json`);
    // Extract and return the array of posts from the response data
    return response.data.data.children.map(child => child.data);
  } catch (error) {
    // Log any error encountered during the request
    console.error("Error fetching posts:", error);
    return []; // Return an empty array in case of an error
  }
};

// Function to fetch comments for a specific post
// @param {string} postId - The ID of the post for which to fetch comments
// @returns {Array} Array of comments or an empty array if an error occurs
export const fetchComments = async (postId) => {
  try {
    // Make a GET request to Reddit API to fetch comments for the specified post
    const response = await axios.get(`${BASE_URL}/comments/${postId}.json`);
    // Extract and return the array of comments from the response data
    return response.data[1].data.children.map(child => child.data);
  } catch (error) {
    // Log any error encountered during the request
    console.error("Error fetching comments:", error);
    return []; // Return an empty array in case of an error
  }
};

