import React from 'react'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux'
import { ContainerPost, 
         ImgPost, 
         Image, 
         DataPost, 
         AuthorPost, 
         ContentPost } from './PostsElements';

const Posts = ( ) => {

  const {postId} = useParams();

  return (
    <ContainerPost>
      <ImgPost>
        <Image>{postId.imageUrl}</Image>
      </ImgPost>
      <DataPost>{postId.date}</DataPost>
      <AuthorPost>{postId.author}</AuthorPost>
      <ContentPost>{postId.article}</ContentPost>
    </ContainerPost>
  )
}
export default Posts;