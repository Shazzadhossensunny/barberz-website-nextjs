export default function Stats() {
    const stats = [
      { number: "2000+", label: "HAPPY CLIENTS" },
      { number: "500", label: "HAIR CUTS" },
      { number: "150", label: "STYLERS" },
      { number: "35", label: "BRANCHES" }
    ];

    return (
      <section className="py-16 bg-[#FDF8E9]">
        <div className="container mx-auto px-4">
          {/* Flex container for stats and images */}
          <div className="flex items-center justify-between">
            {/* First Stat */}
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{stats[0].number}</div>
              <div className="text-gray-600">{stats[0].label}</div>
            </div>

            {/* First Image */}
            <div className="flex justify-center mx-4">
              <img
                src="/images/service1.png"
                alt="Separator"
                className="w-16 h-auto"
              />
            </div>

            {/* Second Stat */}
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{stats[1].number}</div>
              <div className="text-gray-600">{stats[1].label}</div>
            </div>

            {/* Second Image */}
            <div className="flex justify-center mx-4">
              <img
                src="/images/service1.png"
                alt="Separator"
                className="w-16 h-auto"
              />
            </div>

            {/* Third Stat */}
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{stats[2].number}</div>
              <div className="text-gray-600">{stats[2].label}</div>
            </div>

            {/* Third Image */}
            <div className="flex justify-center mx-4">
              <img
                src="/images/service1.png"
                alt="Separator"
                className="w-16 h-auto"
              />
            </div>

            {/* Fourth Stat */}
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{stats[3].number}</div>
              <div className="text-gray-600">{stats[3].label}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
