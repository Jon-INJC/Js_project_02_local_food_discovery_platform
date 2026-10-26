import { useState, useEffect } from "react";
import { getCuratedCollections } from "../../api/restaurantAPI";
import Skeleton from "react-loading-skeleton";
function CuratedCollections({ setTitle, setRestaurantIds }) {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCuratedCollections()
      .then(setCollections)
      .then(() => setLoading(false))
      .catch(console.error);
  }, []);

  return (
    <div className="container flex flex-col space-y-6 mt-10">
      <h2 className="max-w-md text-left text-4xl font-bold font-main-header">
        Curated Collections
      </h2>
      <div  className="flex gap-6 pl-4 overflow-x-auto no-scrollbar">
        {loading ? (
          <CuratedCollectionsSkeleton />
        ) : (
          collections.map((collection) => {
            return (
              <CuratedCollectionsCard
                key={collection.id}
                image={collection.image}
                title={collection.title}
                spots={collection.restaurants.length}
                onClick={() => {
                  setTitle(collection.title);
                  setRestaurantIds(collection.restaurants);
                }}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

// skeleton component for loading state
const CuratedCollectionsSkeleton = () => (
  <div className="flex flex-col items-start shrink-0">
    <Skeleton width={200} height={150} />
    <Skeleton width={150} height={20} />
    <Skeleton width={100} height={15} />
  </div>
);

function CuratedCollectionsCard(props) {
  const { image, title, spots, onClick } = props;
  return (
    <div onClick={onClick} className="flex flex-col items-start shrink-0">
      <img src={image} alt="" className="w-50 h-55 object-cover" />
      <h3 className="max-w-50 text-left text-xl font-bold font-main-header">
        {title}
      </h3>
      <p className="text-sm text-secondary">{spots} Spots</p>
    </div>
  );
}

export default CuratedCollections;
