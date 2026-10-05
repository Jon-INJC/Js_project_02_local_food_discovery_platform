import ProfileNav from "../components/profileComponents/profileNav";
import ProfileFooter from "../components/profileComponents/profileFooter";
import PersonalInfo from "../components/profileComponents/personalInfo";
import SavedRestaurant from "../components/profileComponents/savedRestaurant";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context_API/userContextProvider";
import { getSavedRestaurantByUserId } from "../api/restaurantAPI";
import { getMenuItemLikesByUserId } from "../api/menuAPI";
import { getReviewsByUserId } from "../api/reviewAPI";
function Profile() {
  const { user } = useContext(UserContext);
  const [ savedRestaurants, setSavedRestaurants ] = useState([]);
  const [ likedMenuItems, setLikedMenuItems ] = useState([]);
  const [ reviews, setReviews ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
  const userId = Array.isArray(user) ? user[0]?.id : user?.id;
  if (!userId) return;

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const [saved, liked, written] = await Promise.all([
        getSavedRestaurantByUserId(userId),
        getMenuItemLikesByUserId(userId),
        getReviewsByUserId(userId),
      ]);

      setSavedRestaurants(saved || []);
      setLikedMenuItems(liked || []);
      setReviews(written || []);
    } catch (err) {
      console.error("Failed to load user data:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchUserData();
}, [user]);


  if (loading) {
    return <div className="mt-7 text-secondary">Loading metrics...</div>;
  }

  return (
    <>
      <ProfileNav />
      <main className="bg-on-tertiary mt-10">
        <PersonalInfo
          image="https://placehold.co/400x400/orange/white"
          name={user.name}
          description={user.bio}
          saved={savedRestaurants.length}
          favorite={likedMenuItems.length}
          reviews={reviews.length}
        />
        
        <SavedRestaurant saved={savedRestaurants} />
      </main>
      <ProfileFooter />
    </>
  );
}

export default Profile;
