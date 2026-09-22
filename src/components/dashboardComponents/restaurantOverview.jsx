import navBarLogo from "../../assets/Aura_logo.svg";
import { Plus } from "lucide-react";
import OverviewHero from "./overviewComponents/overviewHero";
import ActiveMenu from "./overviewComponents/activeMenu";
import { useContext, useEffect, useState } from "react";
import { RestaurantContext } from "../../context_API/restaurantContextProvider";
import { getRestaurantMenuItems } from "../../api/menuAPI";
function Overview() {
  const { restaurant } = useContext(RestaurantContext);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restaurantId = Array.isArray(restaurant) ? restaurant[0]?.id : restaurant?.id;
    if (!restaurantId) return;

    getRestaurantMenuItems(restaurantId)
      .then((items) => {
        setMenuItems(items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [restaurant]);

  return (
    <>
      <div className="flex items-center justify-between md:hidden">
        <div className="flex items-center">
          <img src={navBarLogo} alt="" />
        </div>
        <button
          type="button"
          className="text-xs flex justify-center items-center px-3 py-3 border text-on-tertiary bg-primary hover:cursor-pointer"
        >
          <Plus className="w-5 h-5" />
          Add Menu Item
        </button>
      </div>
      <OverviewHero menuItems={menuItems} loading={loading} />
      <ActiveMenu menuItems={menuItems} loading={loading} />
    </>
  );
}

export default Overview;
