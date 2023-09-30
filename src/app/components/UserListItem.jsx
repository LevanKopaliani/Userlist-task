import React, { useContext, useState } from "react";
import { userActionDispatch } from "../context/UserContext";

// UI

import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";
import { TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";
//

const UserListItem = ({ user, throwAlert }) => {
  const dispatch = useContext(userActionDispatch);

  function handleDelete() {
    dispatch({ type: "DELETE", id: user.id });
    throwAlert("DELETE");
  }
  function handleEdit(name, email, city, id) {
    dispatch({ type: "EDIT", data: { name, city, email, id } });
    throwAlert("EDIT");
  }

  return (
    <TableRow>
      <TableCell className="font-medium">
        <Link href={`/user/${user.id}`}>{user.name}</Link>
      </TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.address?.city}</TableCell>
      <TableCell className="text-right flex gap-2 justify-end">
        <EditUser user={user} onEdit={handleEdit} />
        <DeleteUser onDelete={handleDelete} />
      </TableCell>
    </TableRow>
  );
};

export default UserListItem;
