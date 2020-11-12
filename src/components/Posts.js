import React, { useEffect, useState } from 'react'
const devTo = 'https://rpc1.newchain.newtonproject.org/newbridge/history?newchain_address=0x97549E368AcaFdCAE786BB93D98379f1D1561a29'

const Post = ({post}) => (
  <a href={post.url} key={post.id} className="post">
    <article>
      <img src={post.social_image} alt={post.newchain_address} />
      <div>
        <h1>{post.amount}</h1>
        <p>{post.direction}</p>
        <p>{post.status}</p>
      </div>
    </article>
  </a>
)

const Posts = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(devTo).then(r=> r.json()).then(setPosts)
  }, [])

  return posts.map(post => <Post post={post} />)
}

export default Posts
