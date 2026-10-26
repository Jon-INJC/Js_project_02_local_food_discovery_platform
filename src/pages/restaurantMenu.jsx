import Nav from "../components/navBar";
import Footer from "../components/footer";
import MenuHero from "../components/restaurantMenuComponents/menuHero";
import MenuCategory from "../components/restaurantMenuComponents/menuCategory";
import { useLocation } from "react-router-dom";
import { getRestaurant } from "../api/restaurantAPI";
import { useEffect, useState } from "react";
import { getRestaurantMenuCatagory, getRestaurantMenuItems } from "../api/menuAPI";
import Skeleton from "react-loading-skeleton";
function Menu() {
  const restaurantId = useLocation().state?.restaurantId;
  const [restaurant, setRestaurant] = useState({});
  const [menuItems, setMenuItems] = useState([]);
  const [menuCategories, setMenuCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!restaurantId) return;

    const fetchUserData = async () => {
        setLoading(true);
        try {
          const [res, menu] = await Promise.all([
            getRestaurant(restaurantId),
            getRestaurantMenuItems(restaurantId),
          ]);
    
          setRestaurant(res || {});
          setMenuItems(menu || []);

          if (menu && menu.length > 0) {
          const uniqueCategoryIds = [
            ...new Set(menu.map((item) => item.categoryId).filter(Boolean)),
          ];

          const categories = await Promise.all(
            uniqueCategoryIds.map((id) => getRestaurantMenuCatagory(id))
          );

          setMenuCategories(categories);
        }
        } catch (err) {
          console.error("Failed to load user data:", err);
        } finally {
          setLoading(false);
        }
      };
    
      fetchUserData();
  }, [restaurantId]);

  const filteredItems = menuItems.filter(
  (item) => categoryId === null || String(item.categoryId) === String(categoryId)
);

  const handleCategoryClick = (categoryId) => {
    setCategoryId(categoryId);
  };

  return (
    <>
      <Nav />
      <main className="bg-on-tertiary">
        <section className="w-screen max-w-4xl md:px-6 mx-auto">
          <MenuHero
            image={restaurant.coverImage}
            unknown={restaurant.category}
            name={restaurant.name}
            description={restaurant.description}
            time="Wed - Sun, 18:00 - 23:00"
            location={restaurant.location?.city}
            rating={restaurant.rating}
            reviews={restaurant.reviewCount}
          />
          <MenuCategory categories={menuCategories} onCategoryClick={handleCategoryClick} />
        </section>
        <section className="w-screen max-w-4xl px-6 mt-6 mx-auto">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
              {loading
                ? Array.from({ length: 4 }).map((_, index) => (
                    <MenuCardSkeleton key={index} />
                  ))
                : filteredItems.map((item) => (
                    <MenuCard
                      key={item.id}
                      image={item.image}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      likes={item.likes}
                      isHouseSpecial={item.isHouseSpecial}
                      isTodaySpecial={item.isTodaySpecial}
                    />
                  ))}
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const MenuCardSkeleton = () => (
  <div className="flex flex-col relative">
    <Skeleton width="100%" height={200} />
    <div className="flex justify-between">
      <Skeleton width="60%" height={24} />
      <Skeleton width="20%" height={16} />
    </div>
    <div className="flex justify-between">
      <Skeleton width="80%" height={16} />
      <Skeleton width="20%" height={16} />
    </div>
  </div>
);

const MenuCard = ({ image, name, description, price, likes, isHouseSpecial, isTodaySpecial }) => {
  if (isHouseSpecial || isTodaySpecial) {
  return (
    <div className="flex flex-col relative">
      <p className="absolute top-2 left-2 px-3 bg-surface-container-lowest border-2 border-outline-variant text-sm text-on-surface rounded-sm">
        Signature
      </p>
      <img src={image} alt="" className="w-full max-h-50 object-cover" />
      <div className="flex justify-between">
        <h3 className="text-left text-2xl font-bold font-main-header">{name}</h3>
        <p className="text-xs text-on-surface">${price.toFixed(2)}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-xs text-on-surface-variant">{description}</p>
        <p className="text-xs text-on-surface">{likes}</p>
      </div>
    </div>
  );
  } else {
    return (
      <div className="flex flex-col">
        <img src={image} alt="" className="w-full max-h-50 object-cover" />
        <div className="flex justify-between">
          <h3 className="text-left text-2xl font-bold font-main-header">{name}</h3>
          <p className="text-xs text-on-surface">{price}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs text-on-surface-variant">{description}</p>
          <p className="text-xs text-on-surface">{likes}</p>
        </div>
      </div>
    );
  }
};

export default Menu;
