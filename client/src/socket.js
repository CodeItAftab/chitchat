import io from "socket.io-client";

let socket;

const connectSocket = (user_id) => {
  // socket = io("https://zfsfxh4s-3000.inc1.devtunnels.ms/", {
  //   query: `user_id=${user_id}`,
  // });
  socket = io("http://localhost:3000/", {
    query: `user_id=${user_id}`,
  });
};

export { socket, connectSocket };
