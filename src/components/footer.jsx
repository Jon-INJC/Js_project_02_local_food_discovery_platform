import footerLogo from "../assets/Aura_logo.svg";
function Footer() {
  return (
    <footer className="w-screen p-6 mt-10 border-t-2 border-outline-variant">
      <div className="container flex flex-col space-y-4 md:space-y-6">
        <div className="flex flex-col space-y-4 justify-center md:flex-row">
          <div className="flex justify-center items-center">
            <img src={footerLogo} alt="" />
          </div>
          <div className="container flex justify-around text-sm text-on-secondary-fixed-variant">
            <div className="flex flex-col space-y-1">
            <a href="#">Our Story</a>
            <a href="#">Discovery Journal</a>
          </div>
          <div className="flex flex-col space-y-1">
            <a href="#">Partner with Us</a>
          </div>
          <div className="flex flex-col space-y-1">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
          </div>
        </div>
        <p className="text-center text-on-secondary-fixed-variant text-sm">© 2024 Aura Editorial. Curating culinary experiences.</p>
      </div>
    </footer>
  );
}

export default Footer;
