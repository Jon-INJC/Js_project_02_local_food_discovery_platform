function HeroTrending() {
  return (
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
  );
}

export default HeroTrending;
