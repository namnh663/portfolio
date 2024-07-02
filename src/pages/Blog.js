import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const posts = [
  {
    id: 1,
    title: 'Handle A Conflict Between Team Members',
    summary: 'Learn how to handle conflicts in a leadership role.',
    tag: 'leadership'
  }
];

const Blog = () => {
  return (
    <div className="blog-page">
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <div className="post-content">
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <div className="post-footer">
                <span className="tag">{post.tag}</span>
                <Link to={`/blog/${post.id}`} className="read-more">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
