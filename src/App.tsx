import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchBlogPosts } from './utils/api';
import { WP_REST_API_Posts } from 'wp-types';

const App = () => {
  const [blogPosts, setBlogPosts] = useState<WP_REST_API_Posts>([]);

  const fetchData = async () => {
    const data = await fetchBlogPosts();

    console.log(data);
    setBlogPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
