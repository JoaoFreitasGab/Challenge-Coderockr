import React from 'react';


import {PostContainer,
        PostImg,
        PostInfo,
        PostAuthor,
        PostTitle,
        PostParagraph,
        Footer,
        Button

        } from './CardElements'

        

const PostCard = ({ post}) => (
 
 
 
  
  <PostContainer >
    <PostImg
      src={post.imageUrl}
      alt={post.title}/>
    <PostInfo>
      <PostAuthor >{post.author}</PostAuthor>
      <PostTitle >{post.title}</PostTitle>
      <PostParagraph >{post.article.substring(0,200)+ '...'}</PostParagraph> 
      <Footer> 
          
     
      <Button post= {post.title}  >
        

      </Button>
      
      </Footer>
    </PostInfo>
   
  </PostContainer>
  
);

export default PostCard;
