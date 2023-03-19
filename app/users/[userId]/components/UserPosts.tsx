import React from 'react';
import {IUserPost} from "@/types";

type UserPostsProps = {
  promise: Promise<IUserPost[]>;
}

const UserPosts = async ({promise}: UserPostsProps) => {
  const posts = await promise;

  return (
    <>
      {posts.map(post => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <br/>
          <p>{post.body}</p>
        </article>
      ))}
    </>
  );
};

export default UserPosts;