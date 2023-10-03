import { Suspense, lazy } from "react";
import UserList from "./components/UserList";

import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10 max-w-5xl w-full flex-col  justify-between font-mono text-sm lg:flex">
        <h1 className=" text-6xl py-6 text-slate-50">User List</h1>
        <UserList />
        <Toaster duration={1200} />
      </div>
    </main>
  );
}
