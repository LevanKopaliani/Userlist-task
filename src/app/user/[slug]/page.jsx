"use client";

import { userContext } from "@/app/context/UserContext";
import { useParams, useRouter } from "next/navigation";

import React, { useContext, useEffect, useState } from "react";

const page = (props) => {
  const router = useRouter();
  const params = useParams();
  const userList = useContext(userContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const [currentUser] = userList.filter((user) => user.id == params.slug);
    setUser(currentUser);
  }, [userList]);
  return (
    <main
      className="
      flex
      min-h-screen
      flex-col
      items-center
      justify-between
      p-10"
    >
      Test
      <p>name: {user?.name}</p>
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
    </main>
  );
};

export default page;
