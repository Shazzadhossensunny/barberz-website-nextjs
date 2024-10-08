import { Phone, Mail } from 'lucide-react';
export default function Navbar() {
  return (
    <header className="absolute w-full z-50">
    <div className="container mx-auto px-4">
      {/* Top bar */}
      <div className="flex justify-between items-center py-2 text-white">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span>+1234567890</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            <span>barberz.123@info.com</span>
          </div>
        </div>
        <div className="flex space-x-4">
          {/* Social media icons */}
        </div>
      </div>

      {/* Main navigation */}
      <nav className="flex justify-between items-center py-4">
        <div className="text-white text-2xl font-bold">BARBERZ</div>
        <div className="hidden md:flex space-x-6 text-white">
          <a href="#" className="hover:text-gold transition-colors">Home</a>
          <a href="#" className="hover:text-gold transition-colors">Services</a>
          <a href="#" className="hover:text-gold transition-colors">About Us</a>
          <a href="#" className="hover:text-gold transition-colors">Team</a>
          <a href="#" className="hover:text-gold transition-colors">Booking</a>
          <a href="#" className="hover:text-gold transition-colors">Contact Us</a>
        </div>
      </nav>
    </div>
  </header>
  )
}
