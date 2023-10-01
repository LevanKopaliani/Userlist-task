"use client";
import React, { Suspense, useContext, useState } from "react";
import { userContext } from "../context/UserContext";
import UserListItem from "./UserListItem";

// UI
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Loading from "../loading";
import { Button } from "@/components/ui/button";
import { DataTable, DataTableDemo } from "./Table";
//
const UserList = () => {
  const [alert, setAlert] = useState(null);

  const userList = useContext(userContext);

  function throwAlert(props) {
    props == "DELETE" ? setAlert("DELETE") : setAlert("EDIT");
    setTimeout(() => setAlert(null), 2000);
  }

  const ViewAlert = (
    <Alert
      className="absolute left-3 top-3  w-auto transition-all animate-pulse bg-red-500 text-white"
      // variant={alert == "DELETE" ? "destructive" : "default"}
    >
      {/* <AlertTitle>Warning!</AlertTitle> */}
      <AlertDescription>
        {alert == "DELETE" ? "User Deleted." : "User Edited"}{" "}
      </AlertDescription>
    </Alert>
  );

  return (
    <>
      {alert && ViewAlert}
      <DataTable throwAlert={throwAlert} data={userList} />
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
