"use client";

import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export const userContext = createContext(null);
export const userActionDispatch = createContext(null);

const UserContextProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]); 1
  const [users, dispatch] = useReducer(listReducer, []);

  function listReducer(users, action) {
    switch (action.type) {
      case "getData": {
        return [...action.data];
      }
      case "DELETE": {
        return [...users.filter((user) => user.id !== action.id)];
      }
      case "EDIT": {
        const updatedUsers = users.map((user) => {
          if (user.id == action.data.id) {
            user.name = action.data.name;
            user.email = action.data.email;
            user.address.city = action.data.city;
          }
          return user;
        });
        // console.log(updatedUsers);
        return [...updatedUsers];
        // return [...users, action.data];
      }
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    // console.log(data);
    // setUsers(data); 1
    dispatch({ type: "getData", data });
  };

  return (
    <userContext.Provider value={users}>
      <userActionDispatch.Provider value={dispatch}>
        {children}
      </userActionDispatch.Provider>
    </userContext.Provider>
  );
};

/// can be deleted
export function useUserList() {
  return useContext(userContext);
}

export default UserContextProvider;
