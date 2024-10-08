

export default function About() {
  return (
    <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="/about-image.jpg"
            alt="Barber at work"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-2 text-gold">INTRODUCING</h2>
          <h3 className="text-4xl font-bold mb-6">BARBERZ..The Barbershop<br />Since 1990</h3>
          <div className="mb-8">
            <img src="/logo-icon.svg" alt="Barberz logo" className="w-16" />
          </div>
          <p className="text-gray-600 mb-8">
            Barber is a person whose occupation is mainly to cut dress groom
            style and shave men's and boys' hair. A barber's place of work is
            known as a "barbershop" or a "barber's". Barbershops are also places
            of social interaction and public discourse. In some instances,
            barbershops are also public forums.
          </p>
          <button className="border-2 border-gold text-gold px-8 py-3 rounded-md hover:bg-gold hover:text-white transition-colors">
            MORE ABOUT US
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}
