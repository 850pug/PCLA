import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger } from
'@/components/ui/dropdown-menu';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const recoveryDimensions = [
  { name: 'Housing', path: '/recovery/housing' },
  { name: 'Belonging', path: '/recovery/belonging' },
  { name: 'Purpose', path: '/recovery/purpose' },
  { name: 'Health', path: '/recovery/health' },
  { name: 'Autonomy', path: '/recovery/autonomy' }];


  const aboutPages = [
  { name: 'History', path: '/about/history' },
  { name: 'Mission', path: '/about/mission' },
  { name: 'Framework', path: '/about/framework' },
  { name: 'Team', path: '/about/team' },
  { name: 'Partners', path: '/about/partners' }];


  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar - Same color as footer */}
      <div className="py-2 text-white !bg-[#3D6B4A]">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:1-800-742-5275" className="flex items-center space-x-2 hover:text-white/80 transition-colors">
                <span>📞</span>
                <span>1-800-PCLA-HELP</span>
              </a>
              <a href="mailto:info@pclaservices.ca" className="flex items-center space-x-2 hover:text-white/80 transition-colors">
                <span>✉️</span>
                <span>info@pclaservices.ca</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/resources" className="hover:text-white/80 transition-colors">Resources</Link>
              <span className="text-white/40">|</span>
              <a href="#crisis" className="text-red-300 hover:text-red-200 transition-colors font-semibold">Crisis Support 24/7</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#006ba8] shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-[#f26d2d] flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div className="hidden md:block">
              <div className="text-2xl font-bold text-white">PCLA</div>
              <div className="text-xs text-white/90">Recovery in Real Life</div>
            </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
            <Link
                to="/"
                className={`text-base font-medium transition-colors ${
                isActive('/') ? 'text-white' : 'text-white/90 hover:text-white'}`
                }>

              Home
            </Link>

            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-base font-medium text-white/90 hover:text-white transition-colors focus:outline-none">
                <span>About</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-xl border-2 bg-white">
                {aboutPages.map((page) =>
                  <DropdownMenuItem key={page.path} asChild>
                    <Link to={page.path} className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-gray-700">
                      {page.name}
                    </Link>
                  </DropdownMenuItem>
                  )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Recovery in Practice Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-base font-medium text-white/90 hover:text-white transition-colors focus:outline-none">
                <span>Recovery in Practice</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-xl border-2 bg-white">
                <DropdownMenuItem asChild>
                  <Link to="/recovery" className="cursor-pointer px-4 py-2 hover:bg-gray-100 font-semibold text-gray-700">
                    All Dimensions
                  </Link>
                </DropdownMenuItem>
                {recoveryDimensions.map((dimension) =>
                  <DropdownMenuItem key={dimension.path} asChild>
                    <Link to={dimension.path} className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-gray-700">
                      {dimension.name}
                    </Link>
                  </DropdownMenuItem>
                  )}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
                to="/programs"
                className={`text-base font-medium transition-colors ${
                isActive('/programs') ? 'text-white' : 'text-white/90 hover:text-white'}`
                }>

              Programs
            </Link>

            <Link
                to="/impact"
                className={`text-base font-medium transition-colors ${
                isActive('/impact') ? 'text-white' : 'text-white/90 hover:text-white'}`
                }>

              Our Impact
            </Link>

            <Link
                to="/stories"
                className={`text-base font-medium transition-colors ${
                isActive('/stories') ? 'text-white' : 'text-white/90 hover:text-white'}`
                }>

              Story Hub
            </Link>

            <Link to="/get-involved">
              <Button className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white rounded-full px-6 transition-all duration-300 hover:scale-105">
                Get Involved
              </Button>
            </Link>

            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#86a873] rounded-full px-6 transition-all duration-300">
                Contact
              </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>

              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen &&
          <div className="lg:hidden mt-4 pb-4 space-y-3 border-t border-white/20 pt-4">
            <Link to="/" className="block py-2 text-white hover:text-white/80 font-medium">
              Home
            </Link>
            <div className="py-2">
              <div className="font-medium text-white mb-2">About</div>
              {aboutPages.map((page) =>
              <Link
                key={page.path}
                to={page.path}
                className="block py-2 pl-4 text-white/90 hover:text-white">

                  {page.name}
                </Link>
              )}
            </div>
            <div className="py-2">
              <div className="font-medium text-white mb-2">Recovery in Practice</div>
              <Link to="/recovery" className="block py-2 pl-4 text-white/90 hover:text-white font-semibold">
                All Dimensions
              </Link>
              {recoveryDimensions.map((dimension) =>
              <Link
                key={dimension.path}
                to={dimension.path}
                className="block py-2 pl-4 text-white/90 hover:text-white">

                  {dimension.name}
                </Link>
              )}
            </div>
            <Link to="/programs" className="block py-2 text-white hover:text-white/80 font-medium">
              Programs
            </Link>
            <Link to="/impact" className="block py-2 text-white hover:text-white/80 font-medium">
              Our Impact
            </Link>
            <Link to="/stories" className="block py-2 text-white hover:text-white/80 font-medium">
              Story Hub
            </Link>
            <div className="space-y-2 pt-4">
              <Link to="/get-involved" className="block">
                <Button className="w-full bg-[#f26d2d] hover:bg-[#d65a1e] text-white rounded-full">
                  Get Involved
                </Button>
              </Link>
              <Link to="/contact" className="block">
                <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white hover:text-[#86a873] rounded-full">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
          }
        </div>
      </nav>
    </header>);

};

export default Header;
