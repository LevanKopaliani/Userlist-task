"use client";
import { userContext } from "@/app/context/UserContext";
import Loading from "@/app/loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
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
  //
  // render when state sets

  return (
    <main
      className="
      flex
      min-h-screen
      flex-col
      items-center
      justify-center
      p-10 "
    >
      {user ? (
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>User :</CardTitle>
          </CardHeader>

          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Name:</TableCell>
                  <TableCell>{user?.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Email:</TableCell>
                  <TableCell>{user?.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>City:</TableCell>
                  <TableCell>{user?.address.city}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Address:</TableCell>
                  <TableCell>
                    {user?.address.street +
                      ", " +
                      user?.address.suite +
                      ", " +
                      user?.address.zipcode}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className=" my-1 flex justify-end">
              <Button onClick={() => router.back()}>Go Back!</Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default page;
