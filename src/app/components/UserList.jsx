"use client";
import React, { useContext } from "react";
import { userActionDispatch, userContext } from "../context/UserContext";

// UI

import { DataTable } from "./DataTable";

import Loading from "../loading";

//
const UserList = () => {
  const userList = useContext(userContext);
  const dispatch = useContext(userActionDispatch);

  // DELETE & EDIT
  function handleDelete(id) {
    dispatch({ type: "DELETE", id: id });
  }
  function handleEdit(name, email, city, id) {
    dispatch({ type: "EDIT", data: { name, city, email, id } });
  }
  //

  return (
    <>
      {userList == 0 ? (
        <Loading />
      ) : (
        <>
          <h1 className=" text-6xl py-5 text-slate-50">User List</h1>

          <DataTable
            data={userList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </>
      )}
    </>
  );
};

export default UserList;
