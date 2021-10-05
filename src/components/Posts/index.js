import React from 'react'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux'

const Posts = (  ) => {
  const { postId } = useParams();

  


  return (
    <section>
      <article>
        <h2>O Id do post é {postId}</h2>
      </article>
    </section>
  )
}
export default Posts;