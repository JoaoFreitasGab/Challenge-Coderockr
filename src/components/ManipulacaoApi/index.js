import React, { useEffect, useState } from 'react';
import PostCard from '../Card/index'
import axios from 'axios';


const Article = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/posts?')
      .then((response) => {
        setPosts(response.data);
      });
  }, []);
  return (

    <div
      style={{
        maxWidth: 800,
        margin: '30px auto',
        
      }}
    >
      {posts.map((post) => (
        <PostCard post={post} />
        
      ))}
    </div>
   
  );
};

export default Article
