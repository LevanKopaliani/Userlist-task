"use client";

import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "../../components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { userActionDispatch, userContext } from "../context/UserContext";
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";
import Link from "next/link";

//////////////////// me

//////

export function DataTable({ data, throwAlert }) {
  // DATA
  //   const data = React.useContext(userContext);

  // columns
  const columns = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="capitalize">
          <Link href={{ pathname: `/user/${row.getValue("id")}` }}>
            {row.getValue("name")}
          </Link>
        </div>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("email")}</div>
      ),
    },
    {
      accessorKey: "city",
      header: "City",
      cell: ({ row }) => (
        <div className="capitalize">{row.original.address.city}</div>
      ),
    },

    {
      accessorKey: "id",
      header: "Actions",
      cell: ({ row }) => {
        // const delId = row.getValue("id");

        return (
          <div className="flex gap-2 font-medium">
            <EditUser user={row.original} onEdit={handleEdit} />
            <DeleteUser onDelete={() => handleDelete(row.original.id)} />
          </div>
        );
      },
    },
  ];
  //

  ////////////////
  const dispatch = React.useContext(userActionDispatch);

  function handleDelete(rowId) {
    dispatch({ type: "DELETE", id: rowId });

    throwAlert("DELETE");
  }
  function handleEdit(name, email, city, id) {
    dispatch({ type: "EDIT", data: { name, city, email, id } });
    throwAlert("EDIT");
  }

  /////////

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {},
  });

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
