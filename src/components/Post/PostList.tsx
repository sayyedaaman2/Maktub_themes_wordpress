import React from 'react'
import Post from './Post'
const PostList = ({data}:PostListProps) => {
  return (
    <div id="post-container">
              {data &&
                data.map((item: Post, index: number) => (
                  <Post post={item} key={index} />
                ))}
            </div>
  )
}

export default PostList
