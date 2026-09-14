import { NavLink } from "react-router-dom";
import navBarLogo from "../assets/Aura_logo.svg";
function Nav({ links = [] }) {

  return (
    <header className="w-screen bg-surface-bright">
      <nav className="relative container mx-auto p-6 max-w-4xl">
        <div className="flex items-center justify-between">
          <div>
            <img src={navBarLogo} alt="Aura logo" />
          </div>

          <div className="hidden md:flex space-x-6">
            {links.map((link) => {
              return (
                <NavLink
                  to={link.path}
                  className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
                >
                  {link.value}
                </NavLink>
              );
            })}
          </div>
          <NavLink
            to="/register/step1"
            className="hidden p-1 px-4 pt-1 text-on-tertiary bg-secondary rounded-sm baseline hover:-translate-y-1 md:block"
          >
            LIST YOUR RESTAURANT
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
