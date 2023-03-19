import React, {Suspense} from 'react';
import {IUser, IUserPost} from "@/types";
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import UserPosts from "@/app/users/[userId]/components/UserPosts";
import type {Metadata} from "next";

type Params = {
  params: {
    userId: string;
  }
}

export const generateMetadata = async ({params: {userId}}: Params): Promise<Metadata> => {
  const userData: Promise<IUser> = getUser(userId);
  const user = await userData;

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  }
}

const UserPage = async ({params: {userId}}: Params) => {
  const userData: Promise<IUser> = getUser(userId);
  const userPostsData: Promise<IUserPost[]> = getUserPosts(userId);

  // const [user, userPosts] = await Promise.all([userData, userPostsData]);

  const user = await userData;

  return (
    <main>
      <h2>{user.name}</h2>
      <br/>
      <Suspense fallback={<h2>Loading posts ...</h2>}>
        <UserPosts promise={userPostsData}/>
      </Suspense>
      {/*<ul>*/}
      {/*  {userPosts.map(post => (*/}
      {/*    <li key={post.id}>*/}
      {/*      <p>{post.title}</p>*/}
      {/*      <p>{post.body}</p>*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </main>
  );
};

export default UserPage;