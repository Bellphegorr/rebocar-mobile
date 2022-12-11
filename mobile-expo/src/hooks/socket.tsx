import React, { createContext, ReactNode, useContext, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext({} as any);

function SocketProvider({ children }: any) {
  const [socket, setSocket] = useState<any>({} as any);

  async function connectSocket() {
    try {
      const socket = io("http://localhost:3000");
      setSocket(socket);
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <SocketContext.Provider
      value={{
        socket,
        connectSocket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

function useSocket() {
  const context = useContext(SocketContext);
  return context;
}

export { SocketProvider, useSocket };
