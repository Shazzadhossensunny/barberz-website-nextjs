

export default function Hero() {
  return (
    <div className="relative h-screen">
    {/* Background image */}
    <div className="absolute inset-0 z-0">
      <img
        src="/hero-bg.jpg"
        alt="Barbershop background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>

    {/* Hero content */}
    <div className="relative z-10 h-full flex items-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Our Hairstyle Enhances<br />Your Smile!!
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Our barbershop is the territory created purely for males who
          appreciate premium quality, time and flawless look.
        </p>
        <button className="bg-gold text-white px-8 py-3 rounded-md hover:bg-gold-dark transition-colors">
          MAKE AN APPOINTMENT
        </button>
      </div>
    </div>
  </div>
  )
}
