import { createContext, useContext, useState } from "react";

const AddContext = createContext();
export function useLocalContext() {
  return useContext(AddContext);
}
export function ContextProvider({ children }) {
  const [createClassDialog, setCreateClassDialog] = useState(false);
  const [joinClassDialog, setJoinClassDialog] = useState(false);
  const [loginDialog, setLoginDialog] = useState(false);
  const value = {
    createClassDialog,
    setCreateClassDialog,
    joinClassDialog,
    setJoinClassDialog,
    loginDialog,
    setLoginDialog,
  };
  return <AddContext.Provider value={value}>{children}</AddContext.Provider>;
}
