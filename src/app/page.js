import UserList from "./components/UserList";

import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  px-10 py-3">
      <div className="z-10 max-w-5xl w-full flex-col  justify-between font-mono text-sm lg:flex">
        <UserList />
        <Toaster duration={1200} />
      </div>
    </main>
  );
}
