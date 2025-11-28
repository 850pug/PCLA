import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, ArrowLeft } from 'lucide-react';

const NabilaKassam = () => {
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
                  src="https://images.unsplash.com/photo-1516841273335-e39b37888115?w=600" 
                  alt="Nabila Kassam"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Info */}
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nabila Kassam</h1>
              <p className="text-2xl text-[#86a873] font-semibold mb-6">Director of Development</p>
              
              <div className="flex space-x-4 mb-8">
                <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:nabila.kassam@pclaservices.ca" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                As Director of Development at PCLA, Nabila oversees marketing and communication, nurtures existing relationships, and secures new opportunities for PCLA to grow and improve. Nabila brings fifteen years of experience in fundraising, partnership development, and program evaluation to her current role.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Nabila</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With fifteen years of experience in the non-profit sector, Nabila has developed expertise in building meaningful partnerships, securing sustainable funding, and communicating impact to diverse stakeholders. Her strategic approach to development ensures PCLA can continue expanding and improving services.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nabila leads PCLA's fundraising initiatives, grant applications, and donor relations while also overseeing marketing, communications, and public relations. Her work tells the story of recovery and helps connect PCLA with supporters who share our vision.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Areas of Expertise</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>• Fundraising strategy and donor relations</li>
              <li>• Grant writing and proposal development</li>
              <li>• Marketing and communications</li>
              <li>• Partnership development and stakeholder engagement</li>
              <li>• Program evaluation and impact reporting</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Professional Background</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>• 15 years in non-profit fundraising and development</li>
              <li>• Extensive experience in partnership development</li>
              <li>• Background in program evaluation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-[#f26d2d] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <blockquote className="text-2xl md:text-3xl italic font-light leading-relaxed">
              "Every partnership, every donation, every story shared helps us create more opportunities for recovery and hope."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Support PCLA's Mission</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Learn how you can partner with us or support our programs
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/get-involved">
              <Button size="lg" className="bg-[#336f99] hover:bg-[#2a5a7d] text-white px-8 py-6 rounded-full text-lg">
                Get Involved
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

export default NabilaKassam;
