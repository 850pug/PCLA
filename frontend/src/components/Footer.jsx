import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const footerSections = [
    {
      title: 'About',
      links: [
        { name: 'Our Mission', path: '/about/mission' },
        { name: 'Framework', path: '/about/framework' },
        { name: 'Our Team', path: '/about/team' },
        { name: 'Partners', path: '/about/partners' }
      ]
    },
    {
      title: 'Recovery Dimensions',
      links: [
        { name: 'Housing', path: '/recovery/housing' },
        { name: 'Belonging', path: '/recovery/belonging' },
        { name: 'Purpose', path: '/recovery/purpose' },
        { name: 'Health', path: '/recovery/health' },
        { name: 'Autonomy', path: '/recovery/autonomy' }
      ]
    },
    {
      title: 'Programs',
      links: [
        { name: 'All Programs', path: '/programs' },
        { name: 'Our Impact', path: '/impact' },
        { name: 'Story Hub', path: '/stories' },
        { name: 'Resources', path: '/resources' }
      ]
    },
    {
      title: 'Get Involved',
      links: [
        { name: 'Donate', path: '/get-involved#donate' },
        { name: 'Volunteer', path: '/get-involved#volunteer' },
        { name: 'Partner', path: '/get-involved#partner' },
        { name: 'Careers', path: '/get-involved#careers' }
      ]
    }
  ];

  return (
    <footer className="bg-[#3D6B4A] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#f26d2d] flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">PCLA</div>
                <div className="text-xs text-white/90">Recovery in Real Life</div>
              </div>
            </Link>
            <p className="text-white/90 leading-relaxed mb-6">
              Canada's recognized reference point for recovery-oriented supportive housing for individuals living with serious and persistent mental illness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#86a873] hover:bg-[#f26d2d] flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#86a873] hover:bg-[#f26d2d] flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#86a873] hover:bg-[#f26d2d] flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#86a873] hover:bg-[#f26d2d] flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path} 
                      className="text-white/90 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-[#f26d2d] mt-1" />
              <div>
                <div className="font-semibold mb-1">Phone</div>
                <div className="text-white/90">1-800-PCLA-HELP</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-[#f26d2d] mt-1" />
              <div>
                <div className="font-semibold mb-1">Email</div>
                <div className="text-white/90">info@pclaservices.ca</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-[#f26d2d] mt-1" />
              <div>
                <div className="font-semibold mb-1">Address</div>
                <div className="text-white/90">Vancouver, BC, Canada</div>
              </div>
            </div>
          </div>
        </div>

        {/* Crisis Resources */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="bg-red-900/30 border-2 border-red-500 rounded-2xl p-6">
            <h4 className="text-xl font-bold mb-3 text-red-300">Crisis Support Available 24/7</h4>
            <p className="text-white/90 mb-4">If you or someone you know is in crisis, help is available:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="font-semibold text-white">Crisis Line:</div>
                <div className="text-white/90">1-800-CRISIS-1 (1-800-274-7471)</div>
              </div>
              <div>
                <div className="font-semibold text-white">Mental Health Support:</div>
                <div className="text-white/90">Text HOME to 741741</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white/90 text-sm">
            © {new Date().getFullYear()} PCLA Services. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-white/90 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/accessibility" className="text-white/90 hover:text-white transition-colors">
              Accessibility
            </Link>
            <Link to="/contact" className="text-white/90 hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;