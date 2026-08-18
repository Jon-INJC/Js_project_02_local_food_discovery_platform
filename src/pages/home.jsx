import Nav from "../components/navBar";
function home() {
  return (
    <>
      <Nav />
      <main className="bg-on-tertiary">
        <section id="hero" className="max-w-4xl mx-auto">
          <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
            {/* <!-- left item --> */}
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
              <h1 className="max-w-md text-4xl font-bold text-center font-main-header md:text-5xl md:text-left">
                Know the menu before you go.
              </h1>
              <p className="max-w-md text-center text-secondary md:text-left">
                Discover extraordinary culinary experiences through immersive,
                visual menus. Curated for the discerning palate.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href=""
                  className="py-2 px-4 text-on-tertiary text-sm bg-secondary rounded-sm baseline hover:-mt-1"
                >
                  EXPLORE MENUS
                </a>
                <a
                  href=""
                  className="py-2 px-4 text-secondary text-sm border-2 border-solid border-secondary rounded-sm baseline hover:-mt-1"
                >
                  List Your Restaurant
                </a>
              </div>
            </div>
            {/* trending */}
            <div className="md:w-1/2 border-2 border-solid relative">
              <img src="https://placehold.co/600/orange/white" alt="" />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[80%] bg-surface flex items-center space-x-3 px-6 py-2 rounded-sm border-2 border-solid border-outline-variant  shadow-xl md:w-[50%] md:left-1/6 md:-bottom-8">
                <div>
                  <img src="https://placehold.co/50/orange/white" alt="" />
                </div>
                <div className="flex flex-col md:text-xs">
                  <p className="text-primary font-bold">TRENDING NOW</p>
                  <p className="text-on-surface font-bold text-sm">Molten…</p>
                  <p className="text-secondary">L'Aura Patisserie • $14</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="immersiveSearch" className="max-w-4xl mx-auto">
          <div className="container flex flex-col items-center p-4 mx-auto mt-10 space-y-4 bg-surface-container-low rounded-md border-2 border-solid border-outline-variant">
            <h2 className="max-w-md text-left text-4xl font-bold">
              What are you craving?
            </h2>
            <div className="flex px-6 py-3 border-b-2 border-secondary">
              {/* icon */}
              <input
                className="w-100 border-none active:border-none"
                type="text"
                placeholder="Search cuisines, restaurants, or dishes..."
              />
            </div>
            <div className="flex space-x-4 text-xs font-bold">
              <a
                href="#"
                className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
              >
                COFFEE
              </a>
              <a
                href="#"
                className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
              >
                FINE DINING
              </a>
              <a
                href="#"
                className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
              >
                BREAKFAST
              </a>
              <a
                href="#"
                className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
              >
                SUSHI
              </a>
              <a
                href="#"
                className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
              >
                VEGAN
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default home;
