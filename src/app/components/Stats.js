export default function Stats() {
    const stats = [
      { number: "2000+", label: "HAPPY CLIENTS" },
      { number: "500", label: "HAIR CUTS" },
      { number: "150", label: "STYLERS" },
      { number: "35", label: "BRANCHES" }
    ];

    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {stats.map((stat, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/4 text-center mb-8 md:mb-0">
                <div className="flex justify-center mb-4">
                  <img src="/scissor-icon.svg" alt="Scissor icon" className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }