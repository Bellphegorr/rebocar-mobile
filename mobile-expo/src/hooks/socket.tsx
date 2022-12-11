import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";

interface SocketProviderProps {
  children: ReactNode;
}

interface SocketContextData {
  socket: Socket<any, any>;
}

const SocketContext = createContext({} as SocketContextData);

function SocketProvider({ children }: SocketProviderProps) {
  const [socket, setSocket] = useState<any>({} as any);

  useEffect(() => {
    if (!socket.connected) {
      const socket = io("http://192.168.0.33:3000", {
        transports: ["websocket"],
      });
      setSocket(socket);
    }
  }, []);

  return (
    <SocketContext.Provider
      value={{
        socket,
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
