import { server } from "./server.js";

const port = 8000;

server.listen(port, () => {
  console.log(`Server is Running on Port ${port}, Dude!`);
});
