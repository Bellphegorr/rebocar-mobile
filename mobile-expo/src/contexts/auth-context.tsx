import { createContext, useContext, useState } from "react";

export const AuthContext = createContext<{ user: string }>({ user: "" });

export const AuthProvider = ({ children, value }: any) => (
  <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
);
