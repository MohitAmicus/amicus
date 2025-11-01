import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className=" text-foreground border-t relative overflow-hidden bg-gradient-to-br  from-primary/10 via-secondary/5 to-background">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzMuMzEzIDAgNi0yLjY4NyA2LTZzLTIuNjg3LTYtNi02LTYgMi42ODctNiA2IDIuNjg3IDYgNiA2ek0yNCA2YzAgMy4zMTMgMi42ODcgNiA2IDZzNi0yLjY4NyA2LTYtMi42ODctNi02LTYtNiAyLjY4Ny02IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-100"></div>
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              
              <h3 className="font-display font-bold text-lg text-foreground">Amicus Life Sciences</h3>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Your trusted pharmaceutical API supplier, committed to delivering excellence in healthcare solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/global-presence" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Global Presence
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Our Products</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Active Pharmaceutical Ingredients</li>
              <li>Pharmaceutical Intermediates</li>
              <li>Excipients</li>
              <li>Nutraceuticals</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm opacity-90">S-33, Golden Square, Behind D-Mart, Bholav Road, Bharuch-392001</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:info@amicuslifesciences.com" className="text-sm opacity-90 hover:opacity-100">
                  info@amicuslifesciences.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="flex-shrink-0" />
                <span className="text-sm opacity-90">+91 9998409981</span>
                <span className="text-sm opacity-90">+91 8200450152</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} Amicus Life Sciences. All rights reserved.
          </p>
          <p className="text-xs opacity-75 mt-2">
            cGMP | ISO | WHO-GMP Certified | FDA-Approved Facility
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
