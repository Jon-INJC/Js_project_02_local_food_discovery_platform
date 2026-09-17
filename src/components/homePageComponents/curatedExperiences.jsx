import { useEffect, useState } from "react";
import { getFeaturedRestaurants } from "../../api/restaurantAPI";

function CuratedExperiences() {
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

  useEffect(() => {
    getFeaturedRestaurants().then(setFeaturedRestaurants).catch(console.error);
  }, []);

  return (
    <div className="w-full">
      <div className="mx-auto mt-10 flex justify-between items-center">
        <h2 className="max-w-md text-left text-4xl font-bold font-main-header">
          Curated Experiences
        </h2>
        <a
          href="#"
          className="text-primary underline hover:-mt-1 decoration-primary text-xs font-bold"
        >
          VIEW ALL
        </a>
      </div>
      <div className="container max-w-4xl py-6 pl-6 mx-auto flex flex-col space-y-6 items-center md:flex-row md:space-x-6">
        {featuredRestaurants.map((restaurant) => {
          return (
            <CuratedCard
              key={restaurant.id}
              image="https://placehold.co/400x300/orange/white" //{restaurant.coverImage}
              name={restaurant.name}
              cuisine={restaurant.category}
              rating={restaurant.rating}
            />
          );
        })}
      </div>
    </div>
  );
}

function CuratedCard(props) {
  const { image, name, cuisine, rating } = props;
  return (
    <div className=" relative flex flex-col justify-center max-w-1/2 md:max-w-1/3">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="bg-surface flex flex-col space-x-3 px-4 py-2 rounded-xs md:text-xs md:absolute md:-bottom-8 md:left-1/2 md:-translate-x-1/2 md:w-[90%] md:bg-surface md:shadow-xl md:border-2 md:border-solid md:border-outline-variant">
        <p className="text-on-surface font-bold text-lg font-main-header">
          {name}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-secondary">{cuisine}</p>
          <p className="text-secondary">{rating}</p>
        </div>
      </div>
    </div>
  );
}

export default CuratedExperiences;
