"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";

const EditUser = ({ user, onEdit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      userId: user.id,
      name: user.name,
      email: user.email,
      city: user.address?.city,
    },
  });
  const onSubmit = ({ name, email, city, userId }) => {
    onEdit(name, email, city, userId);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit</Button>
        </DialogTrigger>
        <DialogContent className=" sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Make changes here. Click save when you done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <div className="grid grid-cols-4  items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: true,
                  minLength: 2,
                  pattern: /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
                }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <>
                    <Input
                      className={`col-span-3  ${
                        invalid ? "text-red-600   border-red-600 " : ""
                      }`}
                      onChange={onChange}
                      value={value}
                    />
                  </>
                )}
              />
            </div>
            <div className="grid grid-cols-4  items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/,
                }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <>
                    <Input
                      className={`col-span-3  ${
                        invalid ? "text-red-600   border-red-600 " : ""
                      }`}
                      onChange={onChange}
                      value={value}
                    />
                  </>
                )}
              />
            </div>
            <div className="grid grid-cols-4  items-center gap-4">
              <Label htmlFor="city" className="text-right">
                City
              </Label>
              <Controller
                name="city"
                control={control}
                rules={{
                  required: true,
                }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <>
                    <Input
                      className={`col-span-3  ${
                        invalid ? "text-red-600   border-red-600 " : ""
                      }`}
                      onChange={onChange}
                      value={value}
                    />
                  </>
                )}
              />
            </div>
            <Button type="submit">Save</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditUser;
