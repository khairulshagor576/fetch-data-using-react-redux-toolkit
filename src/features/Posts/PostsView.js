import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './PostsSlice';

const PostsView = () => {
    const {isLoading,error,posts} = useSelector((state)=>state.posts);
    const dispatch = useDispatch();
   useEffect(()=>{
    dispatch(fetchPosts());
   },[])
    
  return (
    <div>
        <h2>Posts View</h2>
        <section>
            {isLoading && <h3>Data is Loading!....</h3>}
            {error && <h4>{error}</h4>}
            {posts && posts.map((post)=>{
                return <article>
                    <h5>{post.title}</h5>
                    <p>{post.body}</p>
                </article>
            })}
        </section>
    </div>
  )
}

export default PostsView