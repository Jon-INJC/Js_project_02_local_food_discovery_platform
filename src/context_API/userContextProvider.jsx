import { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      console.log("User state updated:", user);
    }
  }, [user]);

  const setUserValue = (data) => {
    setUser(data);
  };

  const ContextValue = {
    user,
    setUserValue,
  };

  return (
    <UserContext.Provider value={ContextValue}>{children}</UserContext.Provider>
  );
}
