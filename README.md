# Reddit-Alternative-Client  
Reddit Alternative Client in React

This project is a React application that provides an alternative interface for browsing Reddit posts. Users can view hot posts, see comments, and filter posts that contain specific keywords such as "JetBrains." It offers a clean UI with additional functionalities to enhance the browsing experience.

Features
  - Displays hot posts from a subreddit.
  - Option to filter posts containing "JetBrains" in the title.
  - Fetches and displays number of comments and upvotes for individual posts.
  - Fetches and displays comments for individual posts.
  - View original posts on Reddit with a direct link.

Tech Stack
  - React for the front-end UI
  - Reddit API for fetching posts and comments
  - Axios for making API requests
  - Font Awesome for icons

Getting Started
  - Follow these steps to set up and run the project locally.

Installation

1. Clone the repository:

   - git clone https://github.com/trmca8/Reddit-alternative-client-React.git


2. Install the dependencies:

   - npm install axios

   - npm install styled-components react-icons

3. Set up environment variables:

   - Reddit’s public API

To Start the application, run:

   - npm start

   - This will start the application on http://localhost:3000.

Usage:

    1. Viewing Posts:
        - By default, the app displays hot posts from the "all" subreddit.

    2. Filter Posts by Keyword:
        - Click the "Show Only 'JetBrains' Posts" button to filter posts that contain "JetBrains" in the title.

    3. View Original Post on Reddit:
        - Use the "View Original Post" link to open the post directly on Reddit.

    4. View Post Comments:
        - Click on a show comment to see the comments section, which displays all comments fetched from Reddit (5 by 5).

How It Works:

    1. Fetch Posts: The app uses the Reddit API to fetch hot posts from the specified subreddit.

    2. API Requests: Axios handles API requests for posts and comments, simplifying data retrieval and error handling.

    3. Filtering by Keyword: When the filter is active, the app fetches and displays only posts that match the keyword "JetBrains" in the title.

    4. Comment Fetching: The app fetches comments for each post when the button is clicked, showing them in a collapsible section below the post details.

Dependencies:
  - React
  - Axios
  - Font Awesome (for icons)

Bash Commands Recap:

    # Clone repository

        - git clone https://github.com/trmca8/Reddit-alternative-client-React.git

        - cd Reddit-Alternative-Client

    # Install dependencies

        - npm install axios
        
        - npm install styled-components react-icons

    # Start the app
        - npm start

