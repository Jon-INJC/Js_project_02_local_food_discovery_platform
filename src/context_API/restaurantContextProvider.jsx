import { useState, createContext, useEffect } from "react";

export const RestaurantContext = createContext();

export function RestaurantContextProvider({ children }) {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    if (restaurant) {
      console.log("User state updated:", restaurant);
    }
  }, [restaurant]);

  const setRestaurantValue = (data) => {
    setRestaurant(data);
  };

  const ContextValue = {
    restaurant,
    setRestaurantValue,
  };

  return (
    <RestaurantContext.Provider value={ContextValue}>{children}</RestaurantContext.Provider>
  );
}
