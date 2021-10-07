import React, { useEffect, useState } from 'react';
import PostCard from '../src/components/Card'
import axios from 'axios';
import { useParams } from 'react-router';

const App = () => {
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

export default App
