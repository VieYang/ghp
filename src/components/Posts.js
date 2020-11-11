import React, { useEffect, useState } from 'react'
const devTo = 'https://rpc1.newchain.newtonproject.org/newbridge/history?newchain_recipient_address=0x30ed7EDb10d058407ca74B4849d5A051554Bf0AF&direction=eth2new'

const Post = ({post}) => (
  <a href={post.url} key={post.id} className="post">
    <article>
      <img src={post.social_image} alt={post.title} />
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
