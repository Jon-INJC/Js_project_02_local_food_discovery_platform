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
    const UserValue = {
      user_id: data.user_id || null,
      user_name: data.fullName || null,
      user_email: data.email || null,
      is_loggedIn: true,
      is_loggedOut: false,
      is_Restaurant: false,
    };
    setUser(UserValue);
  };

  const ContextValue = {
    user,
    setUserValue,
  };

  return (
    <UserContext.Provider value={ContextValue}>{children}</UserContext.Provider>
  );
}
