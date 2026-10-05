import { Bookmark } from "lucide-react";
import { getRestaurant } from "../../api/restaurantAPI";
import { useEffect, useState } from "react";

function SavedRestaurant({ saved }) {
  const [savedrestaurants, setSavedRestaurants] = useState([]);

  useEffect(() => {
    if (!saved || saved.length === 0) return;
    async function loadRelatedData() {
      const fullsaved = await Promise.all(
        saved.map(async (saved) => {
          try {
            return await getRestaurant(saved.restaurantId);
          } catch (err) {
            console.error(`Failed to fetch user ${saved.restaurantId}`, err);
          }
        }),
      );
      setSavedRestaurants(fullsaved);
    }
    loadRelatedData();
  });
  console.log(savedrestaurants);
  return (
    <section className="w-screen max-w-4xl px-6 mx-auto border-b-2 border-solid border-outline-variant pb-10">
      <div className="container flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl text-on-surface font-bold font-main-header mt-10 mb-6">
            Saved Restaurants
          </h2>
          <a
            href="#"
            className="text-primary underline hover:-translate-y-1 decoration-primary text-xs font-bold"
          >
            VIEW ALL
          </a>
        </div>
        <div className="grid grid-cols-12 grid-rows-12 gap-x-6 gap-y-2">
          {savedrestaurants.length === 0 ? (
            <h3>No saved restaurant found</h3>
          ) : (
            savedrestaurants.map((item, index) => {
              if (index == 0) {
                return (
                  <SavedRestaurantCard
                    image={
                      item.coverImage ||
                      "https://placehold.co/600x400/orange/white"
                    }
                    name={item.name}
                    location={item.location?.address}
                    isResentlyAdded={true}
                  />
                );
              }
              return (
                <SavedRestaurantCard
                  image={
                    item.coverImage ||
                    "https://placehold.co/600x400/orange/white"
                  }
                  name={item.name}
                  location={item?.location?.address}
                  isResentlyAdded={false}
                />
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

function SavedRestaurantCard(props) {
  const { image, name, location, isResentlyAdded } = props;
  if (isResentlyAdded) {
    return (
      <div className="col-span-12 row-span-7 md:col-span-8 md:row-span-12">
        <div className="relative">
          <div className="p-1 absolute top-5 right-5 bg-surface-bright rounded-md">
            <Bookmark className="fill-primary stroke-0" />
          </div>
          <img
            src={image}
            alt="Restaurant"
            className="w-full h-87 object-cover"
          />
          <div className="w-[90%] p-4 flex flex-col gap-2 absolute -bottom-20 left-1/2 -translate-x-1/2 bg-surface border-2 border-solid border-outline-variant">
            <span className="text-2xl text-on-surface font-bold font-main-header">
              {name}
            </span>
            <p className="text-secondary text-sm font-medium">{location}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative col-span-6 row-span-5 md:col-span-4 md:row-span-6">
      <div className="p-1 absolute top-5 right-5 bg-surface-bright rounded-md">
        <Bookmark className="fill-primary stroke-0" />
      </div>
      <img src={image} alt="Restaurant" className="w-full h-60 object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <span className="text-lg text-on-surface font-semibold">{name}</span>
        <p className="text-secondary text-xs font-medium">{location}</p>
      </div>
    </div>
  );
}

export default SavedRestaurant;
