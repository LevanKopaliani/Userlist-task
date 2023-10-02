"use client";
import React, { useContext, useEffect, useState } from "react";
import { userActionDispatch, userContext } from "../context/UserContext";
import UserListItem from "./UserListItem";

// UI

import { DataTable } from "./DataTable";
import { useToast } from "@/components/ui/use-toast";

//
const UserList = () => {
  const userList = useContext(userContext);
  const dispatch = React.useContext(userActionDispatch);

  // Toast
  const { toast } = useToast();
  //

  // DELETE & EDIT
  function handleDelete(id) {
    dispatch({ type: "DELETE", id: id });
    throwAlert("DELETE");
  }
  function handleEdit(name, email, city, id) {
    dispatch({ type: "EDIT", data: { name, city, email, id } });
    throwAlert("EDIT");
  }
  //

  // Alert
  function throwAlert(props) {
    props == "DELETE"
      ? toast({
          variant: "destructive",
          description: "User Deleted",
        })
      : toast({
          description: "User Edited",
        });
  }
  //

  return (
    <>
      {/* <Toaster duration={5000} /> */}
      <DataTable
        throwAlert={throwAlert}
        data={userList}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>

    // <div>
    //   {alert && ViewAlert}
    //   <Table>
    //     <TableHeader>
    //       <TableRow>
    //         <TableHead className="w-[200px]">Name</TableHead>
    //         <TableHead>Email</TableHead>
    //         <TableHead>City</TableHead>
    //         <TableHead className="w-[200px]">Actions</TableHead>
    //       </TableRow>
    //     </TableHeader>

    //     <TableBody>
    //       {userList.map((user) => (
    //         <UserListItem key={user.id} user={user} throwAlert={throwAlert} />
    //       ))}
    //     </TableBody>
    //   </Table>
    //   <div className="flex items-center justify-end space-x-2 py-4">
    //     <div className="space-x-2">
    //       <Button
    //         variant="outline"
    //         size="sm"
    //         // onClick={() => table.previousPage()}
    //         // disabled={!table.getCanPreviousPage()}
    //       >
    //         Previous
    //       </Button>
    //       <Button
    //         variant="outline"
    //         size="sm"
    //         // onClick={() => table.nextPage()}
    //         // disabled={!table.getCanNextPage()}
    //       >
    //         Next
    //       </Button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default UserList;
