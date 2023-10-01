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
      className="absolute left-3 top-3  w-auto transition-all animate-pulse"
      variant={alert == "DELETE" ? "destructive" : "default"}
    >
      {/* <AlertTitle>Warning!</AlertTitle> */}
      <AlertDescription>
        {alert == "DELETE" ? "User Deleted." : "User Edited"}{" "}
      </AlertDescription>
    </Alert>
  );

  return (
    <div>
      {alert && ViewAlert}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>City</TableHead>
            <TableHead className="w-[200px]">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {userList.map((user) => (
            <UserListItem key={user.id} user={user} throwAlert={throwAlert} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserList;
