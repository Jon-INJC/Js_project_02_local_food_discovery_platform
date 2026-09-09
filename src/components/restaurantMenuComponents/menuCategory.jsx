function MenuCategory() {
  return (
    <div className="flex gap-x-6 mt-5 justify-center items-center px-6 py-3 text-xs font-bold border-t-2 border-b-2 border-solid border-outline-variant md:justify-start">
      <a
        href="#"
        className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-on-surface"
      >
        Tasting Menu
      </a>
      <a
        href="#"
        className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-on-surface"
      >
        Starters
      </a>
      <a
        href="#"
        className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-on-surface"
      >
        Main Course
      </a>
      <a
        href="#"
        className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-on-surface"
      >
        Desserts
      </a>
      <a
        href="#"
        className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-on-surface"
      >
        Wine Cellar
      </a>
    </div>
  );
}

export default MenuCategory;
