import { Settings } from "lucide-react";
import navBarLogo from "../../assets/Aura_logo_variant_3.svg";
function ProfileNav() {
  return (
    <header className="w-screen bg-surface-bright">
      <nav className="relative container mx-auto p-6 max-w-4xl border-b-2 border-outline-variant">
        <div className="flex items-center justify-between">
          <div>
            <img src={navBarLogo} alt="Aura logo" />
          </div>

          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-primary-fixed-dim"
            >
              Discover
            </a>
            <a
              href="#"
              className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-primary-fixed-dim"
            >
              Collections
            </a>
            <a
              href="#"
              className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-primary-fixed-dim"
            >
              About
            </a>
          </div>
          <a
            href=""
            className="hidden pt-1 text-primary-fixed-dim hover:-translate-y-1 md:block"
          ><Settings /></a>
        </div>
      </nav>
    </header>
  );
}

export default ProfileNav;
