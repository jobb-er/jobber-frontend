import io, { Socket } from "socket.io-client";

export const connectToNamespace = (namespace: string) => {
  const socket = io(
    `${process.env.REACT_APP_API_URL || "http://localhost:5000"}/${namespace}`,
    {
      withCredentials: true,
    },
  );

  return socket;
};

export const socketDisconnect = (socket: Socket | null) => {
  socket?.disconnect();
  return { socket: null, name: null };
};
