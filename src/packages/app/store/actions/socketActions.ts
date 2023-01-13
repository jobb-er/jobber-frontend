import io from "socket.io-client";

export const connectToNamespace = (namespace: string) => {
  const socket = io(
    `${
      process.env.REACT_APP_API_URL || "http://localhost:5000"
    }/${namespace}`,
    {
      withCredentials: true,
    },
  );

  return socket;
};

// export const connectToChatSend = (senderId: string, receiverId: string) => {
//   const socket = io(
//     `${
//       process.env.REACT_APP_API_URL || "http://localhost:5000"
//     }/${CHAT}/${senderId}/${receiverId}`,
//     {
//       withCredentials: true,
//     },
//   );

//   return socket;
// };

// export const connectToChatReceive = (
//   senderId: string,
//   receiverId: string,
// ) => {
//   const socket = io(
//     `${
//       process.env.REACT_APP_API_URL || "http://localhost:5000"
//     }/${CHAT}/${senderId}/${receiverId}`,
//     {
//       withCredentials: true,
//     },
//   );

//   return socket;
// };
