import React from 'react'
import { useSelector } from 'react-redux'

const Posts = ({ match }) => {
  const { postId } = match.params

  const post = useSelector(state => state.posts.find(post => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article>
        <h2>{post.author}</h2>
      </article>
    </section>
  )
}
export default Posts;