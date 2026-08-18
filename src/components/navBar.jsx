import navBarLogo from "../assets/Aura_logo.svg";
function Nav() {
  return (
    <header className="w-screen bg-surface-bright">
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <img src={navBarLogo} alt="Aura logo" />
          </div>

          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
            >
              Explore
            </a>
            <a
              href="#"
              className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
            >
              Cafes
            </a>
            <a
              href="#"
              className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
            >
              Fine Dining
            </a>
            <a
              href="#"
              className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
            >
              Curated
            </a>
          </div>
          <a
            href=""
            className="p-1 px-4 pt-1 text-on-tertiary bg-secondary rounded-md baseline hover:-mt-1"
          >LIST YOUR RESTAURANT</a>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
