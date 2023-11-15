"use client";

import { createContext, useReducer } from "react";
import React from "react";
// const Context = React.createContext()

interface Props {
  children: React.ReactNode;
}

const reducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case "setUserName":
      localStorage.setItem("userName", payload);
      return (state = { ...state, userName: payload });
      case "setAvatar":
      localStorage.setItem("avatar", payload);
      return (state = { ...state, avatar: payload });
      case "setEmail":
      localStorage.setItem("userEmail", payload);
      return (state = { ...state, userEmail: payload });
    default:
      return state;
  }
};

const initialState = {
  userName: "",
 userEmail: "",
  avatar: "",
};

interface StateProp {
  userName: string;
  avatar: string;
  userEmail: string;
}

export const UserContext = createContext<{
  state: StateProp | undefined;
  dispatch: React.Dispatch<any>;
}>({ state: undefined, dispatch: () => null });

export default ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
