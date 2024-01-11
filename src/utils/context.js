import { createContext } from "react";

const userContext = createContext({
  username: "defaultUser",
});

export default userContext;
