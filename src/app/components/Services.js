export default function Services() {
    const services = [
      {
        icon: "✂️",
        title: "Hair Cut",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        icon: "🪒",
        title: "Shaving",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        icon: "🎨",
        title: "Hair Color",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        icon: "✂️",
        title: "Beard Trim",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ];

    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-2">SERVICES</h2>
            <h3 className="text-3xl font-bold mb-4">Our Services</h3>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="text-gold border border-gold px-6 py-2 rounded hover:bg-gold hover:text-white transition-colors">
                  READ MORE
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }