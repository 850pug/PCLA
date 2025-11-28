import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, ArrowLeft } from 'lucide-react';

export const NadunNirosha = () => {
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
                  src="https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?w=600" 
                  alt="Nadun Nirosha"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Info */}
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nadun Nirosha</h1>
              <p className="text-2xl text-[#86a873] font-semibold mb-6">Director, Finance and Administration</p>
              
              <div className="flex space-x-4 mb-8">
                <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:nadun.nirosha@pclaservices.ca" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                As a seasoned financial professional with 22 years of dedicated experience in accounting and finance, Nadun Nirosha brings a wealth of experience and expertise to the role as Director, Finance and Administration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Nadun</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With over two decades of experience in financial management, Nadun has developed deep expertise in non-profit accounting, budgeting, and financial planning. Their strategic approach ensures PCLA maintains strong fiscal health while maximizing resources for program delivery.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nadun oversees all aspects of PCLA's financial operations, including accounting, payroll, financial reporting, and compliance. They work closely with funding partners and regulatory bodies to ensure transparency and accountability in all financial matters.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Areas of Expertise</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>• Non-profit financial management and reporting</li>
              <li>• Budget development and forecasting</li>
              <li>• Grant accounting and compliance</li>
              <li>• Financial systems and process improvement</li>
              <li>• Audit preparation and stakeholder reporting</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Professional Background</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>• 22+ years in accounting and finance</li>
              <li>• Extensive non-profit sector experience</li>
              <li>• Professional accounting designation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-[#f26d2d] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <blockquote className="text-2xl md:text-3xl italic font-light leading-relaxed">
              "Sound financial management is the foundation that allows us to focus on what matters most—supporting people on their recovery journeys."
            </blockquote>
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

export default NadunNirosha;
