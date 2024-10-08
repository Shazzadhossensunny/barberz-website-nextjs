export default function AppointmentForm() {
    return (
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">CONTACT</h2>
              <h3 className="text-4xl font-bold mb-6">Get In Touch</h3>
              <div className="mb-8">
                <img src="/logo-icon-white.svg" alt="Barberz logo" className="w-16" />
              </div>
              <p className="mb-8">
                Suspendisse pretium felis dolor, sed placerat diam blandit
                vitae. Sed eu nisl massa. Phasellus vehicula tristique orci ut
                ultrices.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">Make An Appointment</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-transparent border border-gray-600 p-3 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-transparent border border-gray-600 p-3 rounded"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="bg-transparent border border-gray-600 p-3 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Time"
                    className="bg-transparent border border-gray-600 p-3 rounded"
                  />
                  <select className="bg-transparent border border-gray-600 p-3 rounded">
                    <option value="">Services</option>
                  </select>
                  <select className="bg-transparent border border-gray-600 p-3 rounded">
                    <option value="">Choose Barber</option>
                  </select>
                </div>
                <button className="mt-8 bg-gold text-white px-8 py-3 rounded w-full hover:bg-gold-dark transition-colors">
                  MAKE AN APPOINTMENT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }