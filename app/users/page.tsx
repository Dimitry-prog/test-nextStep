import React from 'react';
import type {Metadata} from "next";
import getAllUsers from "@/lib/getAllUsers";
import {IUser} from "@/types";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Users',
}

const UsersPage = async () => {
  const usersData: Promise<IUser[]> = getAllUsers();
  const users = await usersData;

  return (
    <main>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br/>
      {users.map(user => (
        <p key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </p>
      ))}
    </main>
  );
};

export default UsersPage;