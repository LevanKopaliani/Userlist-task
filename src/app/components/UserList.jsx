"use client";
import React, { useContext } from "react";
import UserContext, {
  useUserList,
  userActionDispatch,
  userContext,
} from "../context/UserContext";
import UserListItem from "./UserListItem";

const UserList = () => {
  const userList = useContext(userContext);

  //   const userList = useUserList();
  //   console.log(userList);
  return (
    <div>
      <ul>
        {userList.map((user) => {
          return <UserListItem key={user.id} user={user} />;
        })}
      </ul>
    </div>
  );
};

export default UserList;
