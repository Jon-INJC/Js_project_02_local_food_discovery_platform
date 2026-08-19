import Nav from "../components/navBar";
import Footer from "../components/footer";
function home() {
  return (
    <>
      <Nav />
      <main className="bg-on-tertiary">
        <section id="hero" className="w-screen max-w-4xl px-6 mx-auto">
          <div className="container flex flex-col-reverse items-center mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row md:space-x-3">
            {/* <!-- left item --> */}
            <div className="flex flex-col mb-32 space-y-9 md:w-6/10">
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
                  className="py-2 px-4 text-secondary text-sm border-2 border-solid border-secondary rounded-sm baseline font-main-header hover:-mt-1"
                >
                  List Your Restaurant
                </a>
              </div>
            </div>
            {/* trending */}
            <div className="relative">
              <img src="https://placehold.co/400x500/orange/white" alt="" />

              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[80%] bg-surface flex items-center space-x-3 px-6 py-2 rounded-sm border-2 border-solid border-outline-variant  shadow-xl md:w-[55%] md:left-1/6 md:-bottom-8">
                <div>
                  <img src="https://placehold.co/50/orange/white" alt="" />
                </div>

                <div className="flex flex-col md:text-xs">
                  <p className="text-primary font-bold">TRENDING NOW</p>
                  <p className="text-on-surface font-bold text-sm font-main-header">
                    Molten…
                  </p>
                  <p className="text-secondary">L'Aura Patisserie • $14</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="immersiveSearch"
          className="w-screen mx-auto px-6 max-w-4xl"
        >
          <div className="container flex flex-col items-center p-6 mx-auto mt-10 space-y-4 bg-surface-container-low rounded-md border-2 border-solid border-outline-variant">
            <h2 className="max-w-md text-left text-4xl font-bold font-main-header">
              What are you craving?
            </h2>

            <div className="flex px-6 py-3 border-b-2 border-secondary">
              {/* icon */}
              <input
                className="w-100 border-none outline-none focus:ring-0"
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

        <section
          id="featuredRestaurants"
          className="w-screen max-w-4xl mx-auto px-6"
        >
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
              <div className=" relative flex flex-col justify-center max-w-1/2 md:max-w-1/3">
                <div>
                  <img src="https://placehold.co/400x300/orange/white" alt="" />
                </div>
                <div className="bg-surface flex flex-col space-x-3 px-4 py-2 rounded-xs md:text-xs md:absolute md:-bottom-8 md:left-1/2 md:-translate-x-1/2 md:w-[90%] md:bg-surface md:shadow-xl md:border-2 md:border-solid md:border-outline-variant">
                  <p className="text-on-surface font-bold text-lg font-main-header">
                    Maison de Canard
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-secondary">French • Fine Dining</p>
                    <p className="text-secondary">4.9</p>
                  </div>
                </div>
              </div>
              <div className=" relative flex flex-col justify-center max-w-1/2 md:max-w-1/3">
                <div>
                  <img src="https://placehold.co/400x500/orange/white" alt="" />
                </div>
                <div className="bg-surface flex flex-col space-x-3 px-4 py-2 rounded-xs md:text-xs md:absolute md:-bottom-8 md:left-1/2 md:-translate-x-1/2 md:w-[90%] md:bg-surface md:shadow-xl md:border-2 md:border-solid md:border-outline-variant">
                  <p className="text-on-surface font-bold text-lg font-main-header">
                    Nami Sushi
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-secondary">Japanese • Minimalist</p>
                    <p className="text-secondary">4.7</p>
                  </div>
                </div>
              </div>
              <div className=" relative flex flex-col justify-center max-w-1/2 md:max-w-1/3">
                <div>
                  <img src="https://placehold.co/400x450/orange/white" alt="" />
                </div>
                <div className="bg-surface flex flex-col space-x-3 px-4 py-2 rounded-xs md:text-xs md:absolute md:-bottom-8 md:left-1/2 md:-translate-x-1/2 md:w-[90%] md:bg-surface md:shadow-xl md:border-2 md:border-solid md:border-outline-variant">
                  <p className="text-on-surface font-bold text-lg font-main-header">
                    The Daily Crumb
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-secondary">Bakery • Artisanal</p>
                    <p className="text-secondary">4.8</p>
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

export default home;
