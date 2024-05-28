import React from 'react'

interface User {
    id: number;
    name: string;
}

const UsersPage  = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",
  { cache: 'no-store' }
);  //it is used for frequent data changes (disabling cache)
/* 
const res = await fetch("https://jsonplaceholder.typicode.com/users",
  { next: {revalidate: 10} }
);  //next does a background job and get fresh data after every 10 seconds */
  const users: User[] = await res.json();

  return (
     <>
      <h1>Users</h1>
      <p>{new Date().toLocaleString()}</p>
      <ul>
        {users.map(user=><li key={user.id}>{user.name}</li>)}
      </ul>
     </>
  )
}

export default UsersPage;