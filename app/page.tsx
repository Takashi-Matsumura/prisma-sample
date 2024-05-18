"use client";

import { useState, useEffect } from "react";
import UserSelect from "@/app/components/UserSelect";

export default function Home() {
  const [user, setUser] = useState<User>(null);

  const users = [
    { name: "user1", id: 1 },
    { name: "user2", id: 2 },
    { name: "user3", id: 3 },
  ];

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="container m-auto">
      <div className="flex flex-col h-screen justify-center">
        <UserSelect user={user} setUser={setUser} users={users} />
      </div>
    </div>
  );
}
