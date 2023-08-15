import { useEffect, useState } from 'react';
import './core/styles/App.scss';
import { fetchBlogPosts } from './core/utils/api';
import { WP_REST_API_Posts } from 'wp-types';
import { Row } from '@canonical/react-components';
import PostCard from './components/PostCard';

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
    <main className="l-main container">
      <section className="p-section">
        {blogPosts && (
          <Row className="u-equal-height no-padding-x">
            {blogPosts.map((post, i) => (
              <PostCard key={i} post={post} />
            ))}
          </Row>
        )}
      </section>
    </main>
  );
};

export default App;
