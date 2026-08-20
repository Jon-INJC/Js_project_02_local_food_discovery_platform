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
            <div className="flex gap-6 pl-6 overflow-x-auto no-scrollbar">
              <div className="flex flex-col items-start shrink-0">
                <img
                  src="https://placehold.co/300x400/orange/white"
                  alt=""
                  className="w-50 h-55 object-cover"
                />
                <h3 className="text-left text-2xl font-bold font-main-header">
                  Morning Brews
                </h3>
                <p className="text-sm text-secondary">12 Spots</p>
              </div>
              <div className="flex flex-col items-start shrink-0">
                <img
                  src="https://placehold.co/300x400/orange/white"
                  alt=""
                  className="w-50 h-55 object-cover"
                />
                <h3 className="text-left text-2xl font-bold font-main-header">
                  Artisan Pastry
                </h3>
                <p className="text-sm text-secondary">8 Spots</p>
              </div>
              <div className="flex flex-col items-start shrink-0">
                <img
                  src="https://placehold.co/300x400/orange/white"
                  alt=""
                  className="w-50 h-55 object-cover"
                />
                <h3 className="text-left text-2xl font-bold font-main-header">
                  Haute Cuisine
                </h3>
                <p className="text-sm text-secondary">4 Spots</p>
              </div>
              <div className="flex flex-col items-start shrink-0">
                <img
                  src="https://placehold.co/300x400/orange/white"
                  alt=""
                  className="w-50 h-55 object-cover"
                />
                <h3 className="text-left text-2xl font-bold font-main-header">
                  Evening Spirits
                </h3>
                <p className="text-sm text-secondary">6 Spots</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-screen max-w-4xl px-6 mx-auto">
          <div className="container flex flex-col  space-y-6 mt-10">
            <div className="flex items-center justify-between border-b-2 border-solid border-outline-variant">
              <h2 className="max-w-md text-left text-4xl font-bold font-main-header">
                The Editorial Selection
              </h2>
            </div>
            <div className="flex flex-col items-center space-y-4 md:justify-end md:items-start md:flex-row md:space-x-6">
              <div className="flex flex-col items-start">
                <img
                  src="https://placehold.co/300x400/orange/white"
                  alt=""
                  className="max-w-75 max-h-100 object-cover"
                />
                <div className="flex flex-col gap-2 items-start">
                  <p className="text-xs text-secondary">
                    CONTEMPORARY JAPANESE . $$$$
                  </p>
                  <h3 className="text-left text-4xl font-bold font-main-header">
                    Omaske Lumière
                  </h3>
                  <p className="text-xs text-secondary max-w-75 block">
                    An immersive dining experience redefining traditional edomae
                    sushi with modern European techniques. The tasting menu
                    changes daily based on Tsukiji market arrivals.
                  </p>
                  <div className=" container flex gap-4 items-center pt-6 border-t-2 border-solid border-outline-variant">
                    <img
                      src="https://placehold.co/100x100/orange/white"
                      alt=""
                      className="w-15 h-15 object-cover rounded-md"
                    />
                    <div className="flex flex-col text-xs text-secondary">
                      <p>MUST TRY</p>
                      <p className="text-on-surface">Smoked Toro with Truffle Caviar</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start">
                <img
                  src="https://placehold.co/300x400/orange/white"
                  alt=""
                  className="max-w-75 max-h-100 object-cover"
                />
                <div className="flex flex-col gap-2 items-start">
                  <p className="text-xs text-secondary">
                    RUSTIC MEDITERRANEAN . $$$$
                  </p>
                  <h3 className="text-left text-4xl font-bold font-main-header">
                    Osteria Delle Vigne
                  </h3>
                  <p className="text-xs text-secondary max-w-75 block">
                    Hidden away in a lush courtyard, serving regional Italian
                    classics with a focus on ancient grains and natural wines.
                  </p>
                  <div className="container flex gap-4 items-center pt-6 border-t-2 border-solid border-outline-variant">
                    <img
                      src="https://placehold.co/100x100/orange/white"
                      alt=""
                      className="w-15 h-15 object-cover rounded-md"
                    />
                    <div className="flex flex-col text-xs text-secondary">
                      <p>SIGNATURE</p>
                      <p className="text-on-surface">Hand-rolled Pici Cacio e Pepe</p>
                    </div>
                  </div>
                </div>
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
