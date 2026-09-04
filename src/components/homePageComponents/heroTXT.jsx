function HeroTXT() {
  return (
    <div className="flex flex-col mb-32 space-y-9 md:w-6/10">
      <h1 className="max-w-md text-4xl font-bold text-center font-main-header md:text-5xl md:text-left">
        Know the menu before you go.
      </h1>

      <p className="max-w-md text-center text-secondary md:text-left">
        Discover extraordinary culinary experiences through immersive, visual
        menus. Curated for the discerning palate.
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
  );
}

export default HeroTXT;
