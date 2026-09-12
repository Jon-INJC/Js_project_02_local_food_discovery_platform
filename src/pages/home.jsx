import Nav from "../components/navBar";
import Footer from "../components/footer";
import HeroTXT from "../components/homePageComponents/heroTXT";
import HeroTrending from "../components/homePageComponents/heroTranding";
import SearchEngine from "../components/homePageComponents/searchEngine";
import CuratedExperiences from "../components/homePageComponents/curatedExperiences";
function home() {
  const links = [
    { value: "Explore", path: "/explore" },
    { value: "Cafes", path: "/Cafes" },
    { value: "Fine Dining", path: "/Fine-Dining" },
    { value: "Curated", path: "/curated" },
  ];
  return (
    <>
      <Nav links={links} />
      <main className="bg-on-tertiary">
        <section id="hero" className="w-screen max-w-4xl px-6 mx-auto">
          <div className="container flex flex-col-reverse items-center mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row md:space-x-3">
            {/* <!-- left item --> */}
            <HeroTXT />
            {/* trending */}
            <HeroTrending />
          </div>
        </section>
        <section
          id="immersiveSearch"
          className="w-screen mx-auto px-6 max-w-4xl"
        >
          <SearchEngine />
        </section>

        <section
          id="featuredRestaurants"
          className="w-screen max-w-4xl mx-auto px-6"
        >
          <CuratedExperiences />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default home;
