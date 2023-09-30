import UserList from "./components/UserList";
import UserContextProvider from "./context/UserContext";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10 max-w-5xl w-full flex-col  justify-between font-mono text-sm lg:flex">
        <h1 className=" text-6xl text-center py-10">User List</h1>
        <UserList />
      </div>
    </main>
  );
}
