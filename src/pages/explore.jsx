import Nav from "../components/navBar";
import Footer from "../components/footer";
import ExploreHero from "../components/explorePageComponents/exploreHero";
import CuratedCollections from "../components/explorePageComponents/curatedCollections";
import EditorialSelection from "../components/explorePageComponents/editorialSelection";
import { useEffect, useState } from "react";
import { getRestaurant, searchRestaurants } from "../api/restaurantAPI";
import RestaurantDisplay, {
  RestaurantDisplaySkeleton,
} from "../components/explorePageComponents/restaurantDisplay";
import { useNavigate, useSearchParams } from "react-router-dom";

function Explore() {
  const [searchParams] = useSearchParams();
  const [restaurants, setRestaurants] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [restaurantIds, setRestaurantIds] = useState([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const query = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";

  useEffect(() => {
    if (restaurantIds.length === 0) return;

    let cancelled = false;

    async function fetchRestaurants() {
      setLoading(true);
      setRestaurants([]);

      try {
        const fetchedRestaurants = await Promise.all(
          restaurantIds.map((id) => getRestaurant(id)),
        );

        if (!cancelled) {
          setRestaurants(fetchedRestaurants);
        }
      } catch (error) {
        if (!cancelled) {
          console.error("Failed to fetch curated restaurants:", error);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchRestaurants();

    return () => {
      cancelled = true;
    };
  }, [restaurantIds]);

  useEffect(() => {
    let cancelled = false;

    async function fetchRestaurants() {
      setLoading(true);
      setError("");

      try {
        const data =
          (query.trim() || category) &&
          (await searchRestaurants({ query, category }));

        if (cancelled) return;

        setSearchResults(data);

        setTitle(
          query.trim() || category ? "Search Results" : "Featured Restaurants",
        );
      } catch (error) {
        if (cancelled) return;

        console.error("Failed to fetch restaurants:", error);

        setSearchResults([]);
        setError("Unable to load restaurants. Please try again.");
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchRestaurants();

    return () => {
      cancelled = true;
    };
  }, [query, category]);

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
          {searchResults.length === 0 && (
            <CuratedCollections
              setTitle={setTitle}
              setRestaurantIds={setRestaurantIds}
            />
          )}
        </section>
        <section className="w-screen max-w-4xl px-6 mx-auto">
          {searchResults.length > 0 ? (
            loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                {Array.from({ length: 4 }).map((_, index) => (
                  <RestaurantDisplaySkeleton key={index} />
                ))}
              </div>
            ) : (
              <div className="container flex flex-col space-y-6 mt-10">
                <div className="flex items-center justify-between border-b-2 border-outline-variant">
                  <h2 className="max-w-md text-left text-4xl font-bold font-main-header">
                    {title ||
                      (query || category
                        ? "Search Results"
                        : "Featured Restaurants")}
                  </h2>
                </div>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
                  {searchResults.map((restaurant) => (
                    <RestaurantDisplay
                      key={restaurant.id}
                      restaurant={restaurant}
                      onClick={() => {
                        navigation("/menu", {
                          state: { restaurantId: restaurant.id },
                        });
                      }}
                    />
                  ))}
                </div>
              </div>
            )
          ) : loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {Array.from({ length: 4 }).map((_, index) => (
                <RestaurantDisplaySkeleton key={index} />
              ))}
            </div>
          ) : restaurants.length > 0 ? (
            <div className="container flex flex-col space-y-6 mt-10">
              <div className="flex items-center justify-between border-b-2 border-outline-variant">
                <h2 className="max-w-md text-left text-4xl font-bold font-main-header">
                  {title ||
                    (query || category
                      ? "Search Results"
                      : "Featured Restaurants")}
                </h2>
              </div>

              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
                {restaurants.map((restaurant) => (
                  <RestaurantDisplay
                    key={restaurant.id}
                    restaurant={restaurant}
                    onClick={() => {
                      navigation("/menu", {
                        state: { restaurantId: restaurant.id },
                      });
                    }}
                  />
                ))}
              </div>
            </div>
          ) : query || category ? (
            <div className="py-16 text-center">
              <h2 className="text-2xl font-bold">No restaurants found</h2>
              <p className="mt-2 text-secondary">
                Try another search term or select a different category.
              </p>
            </div>
          ) : (
            <EditorialSelection />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Explore;
