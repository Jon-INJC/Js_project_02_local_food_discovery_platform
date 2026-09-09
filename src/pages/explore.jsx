import Nav from "../components/navBar";
import Footer from "../components/footer";
import ExploreHero from "../components/explorePageComponents/exploreHero";
import CuratedCollections from "../components/explorePageComponents/curatedCollections";
import EditorialSelection from "../components/explorePageComponents/editorialSelection";

function Explore() {
  return (
    <>
      <Nav />
      <main className="bg-on-tertiary">
        <section id="discover" className="w-screen max-w-4xl px-6 mx-auto">
          <ExploreHero />
        </section>
        <section className="w-screen max-w-4xl px-6 mx-auto">
          <CuratedCollections />
        </section>
        <section className="w-screen max-w-4xl px-6 mx-auto">
          <EditorialSelection />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Explore;
