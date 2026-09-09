import ProfileNav from "../components/profileComponents/profileNav";
import ProfileFooter from "../components/profileComponents/profileFooter";
import PersonalInfo from "../components/profileComponents/personalInfo";
import SavedRestaurant from "../components/profileComponents/savedRestaurant";
function Profile() {
  return (
    <>
      <ProfileNav />
      <main className="bg-on-tertiary mt-10">
        <PersonalInfo
          image="https://placehold.co/400x400/orange/white"
          name="John Doe"
          description="Culinary explorer seeking the perfect balance of ambiance and
                authentic flavors. Passionate about natural wine and modern
                coastal cuisine."
          saved={24}
          favorite={112}
          reviews={8}
        />
        
        <SavedRestaurant />
      </main>
      <ProfileFooter />
    </>
  );
}

export default Profile;
