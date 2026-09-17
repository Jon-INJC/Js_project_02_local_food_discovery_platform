import { useState, useEffect } from "react";
import { getRecentMenuItems } from "../../api/analyticsAPI";
import { getMenuItems } from "../../api/menuAPI";
import { getRestaurant } from "../../api/restaurantAPI";
function HeroTrending() {
  const [ recent, setRecent ] = useState([]);
  const [ trending, setTreanding ] = useState({})
  const [ restaurant, setRestaurant ] = useState({})

  useEffect(() => {
    getRecentMenuItems().then(setRecent).catch(console.error)
  },[]);

  useEffect(() => {
    getMenuItems(recent[2]?.menuItemId).then(setTreanding).catch(console.error)
  },[recent]);

  useEffect(() => {
    getRestaurant(trending.restaurantId).then(setRestaurant).catch(console.error)
  },[trending]);

  return (
    <div className="relative">
      <img src="https://placehold.co/400x500/orange/white" alt="" />
    
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[80%] bg-surface flex items-center space-x-3 px-6 py-2 rounded-sm border-2 border-solid border-outline-variant  shadow-xl md:w-[55%] md:left-1/6 md:-bottom-8">
        <div>
          <img src="https://placehold.co/50/orange/white" alt="" />
        </div>

        <div className="flex flex-col md:text-xs">
          <p className="text-primary font-bold">TRENDING NOW</p>
          <p className="text-on-surface font-bold text-sm font-main-header">
            {trending.name}
          </p>
          <p className="text-secondary">{restaurant.name} • ${trending.price}</p>
        </div>
      </div>
    </div>
  );
}


export default HeroTrending;
