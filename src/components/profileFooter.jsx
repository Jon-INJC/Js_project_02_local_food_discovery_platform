import footerLogo from "../assets/Aura_logo_variant_3.svg";
function ProfileFooter() {
  return (
    <footer className="w-screen p-6 bg-inverse-surface border-t-2 border-outline">
      <div className="container flex flex-col space-y-4 md:flex-row md:justify-between md:items-center">
        <div className="flex justify-center items-center">
          <img src={footerLogo} alt="" />
        </div>
        <p className="text-center text-secondary-fixed-dim text-sm">
          © 2024 Aura Editorial. Curating culinary experiences.
        </p>
        <div className="flex gap-x-5 justify-center items-center text-sm text-secondary-fixed-dim">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default ProfileFooter;
