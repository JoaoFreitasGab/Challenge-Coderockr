import React from 'react';
import { Link } from 'react-router-dom';
import {MdOutlineDoubleArrow} from 'react-icons/md'

import {PostContainer,
        PostImg,
        PostInfo,
        PostAuthor,
        PostTitle,
        PostParagraph,
        Footer,
        

        } from './CardElements'

        
       
 
const PostCard = ({post}) => (
 
 
    
  <PostContainer >
    
    <PostImg
      src={post.imageUrl}
      alt={post.title}/>
    <PostInfo>
      <PostAuthor >{post.author}</PostAuthor>
      <PostTitle >{post.title}</PostTitle>
      <PostParagraph  >{post.article.substring(0,200)+ '...'}</PostParagraph> 
      <Footer> 
      <Link to={`/posts/${post.postId}`}><MdOutlineDoubleArrow style={{
       color: 'black',
       float: 'right'
      }}/></Link>
      
      </Footer>
    </PostInfo>
  </PostContainer>
  
);

export default PostCard;
