import React from 'react';
import PostList from './components/PostList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Reddit Alternative Client</h1>
      <PostList />
    </div>
  );
};

export default App;
