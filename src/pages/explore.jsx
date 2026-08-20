import Nav from "../components/navBar";
import Footer from "../components/footer";

function Explore() {
  return (
    <>
      <Nav />
      <main className="bg-on-tertiary">
        <section id="discover" className="w-screen max-w-4xl px-6 mx-auto">
          <div className="container flex flex-col">
            <div className="hidden md:flex md:flex-col md:space-y-2">
              <h1 className="font-bold font-main-header text-5xl text-left text-on-surface">
                Discover Extraordinary Culinary Experiences
              </h1>
              <p className="max-w-md text-center text-secondary md:text-left">
                Curated selections tailored to your palate.
              </p>
            </div>

            <div className="flex justify-between md:hidden">
              <h1 className="max-w-md font-bold font-main-header text-5xl text-left text-on-surface">
                Explore
              </h1>
              <select
                name="location"
                id="location"
                className="border-none outline-none focus:ring-0"
              >
                <option value="">Current location</option>
              </select>
            </div>
            <div className="container flex items-center justify-between mt-4 ">
              <input
                className="w-100 underline underline-offset-3 border-none outline-none focus:ring-0"
                type="text"
                placeholder="Search cuisines, restaurants, or dishes..."
              />
              <select
                name="location"
                id="location"
                className="hidden underline underline-offset-4 border-none outline-none focus:ring-0 text-secondary md:inline-block"
              >
                <option value="">Current location</option>
              </select>
            </div>
            <div className="container flex space-x-6 mt-4 text-xs font-bold border-b border-outline-variant">
              <a
                href="#"
                className="text-secondary hover:text-primary hover:underline hover:-mt-1 decoration-primary"
              >
                COFFEE
              </a>
              <a
                href="#"
                className="text-secondary hover:text-primary hover:underline hover:-mt-1 decoration-primary"
              >
                FINE DINING
              </a>
              <a
                href="#"
                className="text-secondary hover:text-primary hover:underline hover:-mt-1 decoration-primary"
              >
                BREAKFAST
              </a>
              <a
                href="#"
                className="text-secondary hover:text-primary hover:underline hover:-mt-1 decoration-primary"
              >
                SUSHI
              </a>
              <a
                href="#"
                className="text-secondary hover:text-primary hover:underline hover:-mt-1 decoration-primary"
              >
                VEGAN
              </a>
            </div>
          </div>
        </section>
        <section className="w-screen max-w-4xl px-6 mx-auto">
          <div className="container flex flex-col space-y-6 mt-10">
            <h2 className="max-w-md text-left text-4xl font-bold font-main-header">
              Curated Collections
            </h2>
            <div className="flex gap-6 pl-6 overflow-x-auto">
                <div className="flex flex-col items-start shrink-0">
                    <img src="https://placehold.co/300x400/orange/white" alt="" className="w-50 h-55 object-cover" />
                    <h3 className="text-left text-2xl font-bold font-main-header">Morning Brews</h3>
                    <p className="text-sm text-secondary">12 Spots</p>
                </div>
                <div className="flex flex-col items-start shrink-0">
                    <img src="https://placehold.co/300x400/orange/white" alt="" className="w-50 h-55 object-cover" />
                    <h3 className="text-left text-2xl font-bold font-main-header">Artisan Pastry</h3>
                    <p className="text-sm text-secondary">8 Spots</p>
                </div>
                <div className="flex flex-col items-start shrink-0">
                    <img src="https://placehold.co/300x400/orange/white" alt="" className="w-50 h-55 object-cover" />
                    <h3 className="text-left text-2xl font-bold font-main-header">Haute Cuisine</h3>
                    <p className="text-sm text-secondary">4 Spots</p>
                </div>
                <div className="flex flex-col items-start shrink-0">
                    <img src="https://placehold.co/300x400/orange/white" alt="" className="w-50 h-55 object-cover" />
                    <h3 className="text-left text-2xl font-bold font-main-header">Evening Spirits</h3>
                    <p className="text-sm text-secondary">6 Spots</p>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Explore;
