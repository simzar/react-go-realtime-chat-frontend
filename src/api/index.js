const socket = new WebSocket("ws://localhost:8080/ws");

export const connect = (callBack) => {
  console.log("Attempting Connection...");

  socket.onopen = () => {
      console.log("Successfully connected");
  };

  socket.onmessage = (msg) => {
      console.log(msg);
      callBack(msg);
  };

  socket.onclose = (event) => {
      console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = (error) => {
      console.log("Socket error: ", error);
  };
};

export const sendMsg = (msg) => {
    console.log("Sending message: ", msg);
    socket.send(msg);
};
