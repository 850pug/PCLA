import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, ArrowLeft } from 'lucide-react';

export const ScottRoberts = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <Link to="/about/team" className="inline-flex items-center text-[#336f99] hover:text-[#86a873] transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Team
          </Link>
        </div>
      </section>

      {/* Headshot Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Headshot - Fixed size */}
            <div className="md:col-span-1">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-3xl border-4 border-gray-200 shadow-xl">
                <img 
                  src="/images/Headshot-placeholder.jpeg" 
                  alt="Scott Roberts"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Info */}
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Scott Roberts</h1>
              <p className="text-2xl text-[#86a873] font-semibold mb-6">President</p>
              
              <div className="flex space-x-4 mb-8">
                <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:scott.roberts@pclaservices.ca" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                Scott Roberts brings extensive senior management and consulting experience across tourism, hospitality, and social enterprise, supporting PCLA with strategic insight rooted in community development and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Scott</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Scott has extensive senior management experience in domestic and international business with major airlines, hotels and tourism / hospitality companies throughout Canada. In his current entrepreneurial role, Scott provides strategic consulting in the areas of business success, strategic planning, performance management and community development.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Among a variety of social enterprise and corporate businesses, Scott has worked extensively with Indigenous communities in western Canada, assisting to develop community owned tourism-related businesses with a mandate of creating sustainable local employment. Many of the cause-driven businesses he's working with are concentrated on social and environmental well-being, which aligns with his philosophy of creating a healthy and productive environment.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Scott has served on various boards and is an active board member of Tla'amin Management Services LP, the business arm of the Tla'amin Nation on the Sunshine Coast.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In his spare time, Scott enjoys travel, reading and outdoor activities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Learn More About PCLA</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Discover our programs, approach to recovery, and how we support individuals in our community
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/programs">
              <Button size="lg" className="bg-[#336f99] hover:bg-[#2a5a7d] text-white px-8 py-6 rounded-full text-lg">
                Our Programs
              </Button>
            </Link>
            <Link to="/about/team">
              <Button size="lg" variant="outline" className="border-2 border-gray-900 px-8 py-6 rounded-full text-lg">
                Meet the Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScottRoberts;
