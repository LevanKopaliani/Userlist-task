import React, { useContext, useState } from "react";
import { userActionDispatch } from "../context/UserContext";

// UI
import { VariantProps } from "class-variance-authority";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";
//

const UserListItem = ({ user }) => {
  const [edit, setIsEdit] = useState(false);
  const [delDialog, setDelDialog] = useState(false);

  const dispatch = useContext(userActionDispatch);
  function handleDelete() {
    dispatch({ type: "DELETE", id: user.id });
  }
  function handleEdit(name, city, address, id) {
    dispatch({ type: "EDIT", data: { name, city, address, id } });

    // dispatch({ type: "DELETE", id: user.id });
  }

  return (
    <li className=" flex gap-10">
      <span>{user.name}</span>
      <span>{user.email}</span>
      <span>{user.address?.city}</span>

      <EditUser user={user} onEdit={handleEdit} />
      <DeleteUser onDelete={handleDelete} />
      {/* <div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Delete</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete data
                from server.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction variant={"destructive"} onClick={handleDelete}>
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div> */}
    </li>
  );
};

export default UserListItem;
