import footerLogo from "../assets/Aura _logo_variant.svg";
function AltFooter() {
  return (
    <footer className="w-screen p-6 border-t-2 border-outline-variant">
      <div className="container flex flex-col space-y-4 md:flex-row md:justify-between md:items-center">
        <div className="flex justify-center items-center">
          <img src={footerLogo} alt="" />
        </div>
        <div className="flex gap-x-5 justify-center items-center text-sm text-on-secondary-fixed-variant">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
        </div>
        <p className="text-center text-on-secondary-fixed-variant text-sm">
          © 2024 Aura Editorial. Curating culinary experiences.
        </p>
      </div>
    </footer>
  );
}

export default AltFooter;
