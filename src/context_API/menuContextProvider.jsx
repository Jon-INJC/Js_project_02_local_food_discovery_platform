// context/MenuContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { RestaurantContext } from "./restaurantContextProvider";
import { getRestaurantMenuItems } from "../api/menuAPI";

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const { restaurant } = useContext(RestaurantContext);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMenuItems = async () => {
    const restaurantId = Array.isArray(restaurant) ? restaurant[0]?.id : restaurant?.id;
    if (!restaurantId) return;

    setLoading(true);
    try {
      const items = await getRestaurantMenuItems(restaurantId);
      setMenuItems(items || []);
    } catch (err) {
      console.error("Failed to load menu items:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, [restaurant]);

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems, loading, refetchMenu: fetchMenuItems }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
}