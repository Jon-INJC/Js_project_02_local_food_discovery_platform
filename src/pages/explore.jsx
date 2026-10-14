import Nav from "../components/navBar";
import Footer from "../components/footer";
import ExploreHero from "../components/explorePageComponents/exploreHero";
import CuratedCollections from "../components/explorePageComponents/curatedCollections";
import EditorialSelection from "../components/explorePageComponents/editorialSelection";
import { useEffect, useState } from "react";
import { getRestaurant } from "../api/restaurantAPI";
import RestaurantDisplay, {
  RestaurantDisplaySkeleton,
} from "../components/explorePageComponents/restaurantDisplay";
import { useNavigate } from "react-router-dom";

function Explore() {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantIds, setRestaurantIds] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (restaurantIds.length > 0) {
      setRestaurants([]); // Clear previous restaurants before fetching new ones
      setLoading(true);
      restaurantIds.forEach((id) => {
        getRestaurant(id)
          .then((restaurant) => {
            setRestaurants((prevRestaurants) => [
              ...prevRestaurants,
              restaurant,
            ]);
          })
          .catch(console.error);
      });
      setLoading(false);
    }
  }, [restaurantIds]);

  const navigation = useNavigate();

  const links = [
    { value: "Home", path: "/" },
    { value: "Cafes", path: "/Cafes" },
    { value: "Fine Dining", path: "/Fine-Dining" },
    { value: "Curated", path: "/curated" },
  ];
  return (
    <>
      <Nav links={links} />
      <main className="bg-on-tertiary">
        <section id="discover" className="w-screen max-w-4xl px-6 mx-auto">
          <ExploreHero />
        </section>
        <section className="w-screen max-w-4xl px-6 mx-auto">
          <CuratedCollections
            setTitle={setTitle}
            setRestaurantIds={setRestaurantIds}
          />
        </section>
        <section className="w-screen max-w-4xl px-6 mx-auto">
          {restaurants.length === 0 ? (
            <EditorialSelection />
          ) : (
            <div className="container flex flex-col  space-y-6 mt-10">
              <div className="flex items-center justify-between border-b-2 border-solid border-outline-variant">
                <h2 className="max-w-md text-left text-4xl font-bold font-main-header">
                  {title}
                </h2>
              </div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
                {loading
                  ? Array.from({ length: 4 }).map((_, index) => (
                      <RestaurantDisplaySkeleton key={index} />
                    ))
                  : restaurants.map((restaurant) => (
                      <RestaurantDisplay
                        key={restaurant.id}
                        restaurant={restaurant}
                        onClick={() => {
                          navigation("/menu", { state: { restaurantId: restaurant.id } });
                        }}
                      />
                    ))}
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Explore;
