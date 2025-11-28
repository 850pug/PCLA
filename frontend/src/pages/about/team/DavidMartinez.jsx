import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, ArrowLeft } from 'lucide-react';

export const DavidMartinez = () => {
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
                  alt="David Martinez"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Info */}
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">David Martinez</h1>
              <p className="text-2xl text-[#86a873] font-semibold mb-6">Community Engagement Coordinator</p>
              
              <div className="flex space-x-4 mb-8">
                <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:david.martinez@pclaservices.ca" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                David Martinez builds partnerships and community connections that foster belonging and integration for PCLA program participants. His work breaks down barriers and creates pathways for meaningful community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About David</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With a background in community organizing and social inclusion work, David brings energy, creativity, and cultural humility to his role. He has developed innovative programs that connect PCLA residents with employment opportunities, recreational activities, and civic participation.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              David is passionate about challenging stigma and building bridges between PCLA and the broader community. His efforts have resulted in numerous successful partnerships with local businesses, cultural organizations, and volunteer groups.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Areas of Expertise</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>• Community partnership development</li>
              <li>• Anti-stigma campaign coordination</li>
              <li>• Volunteer program management</li>
              <li>• Social inclusion initiatives</li>
              <li>• Event planning and facilitation</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Education & Credentials</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>• B.A., Community Studies, University of Victoria</li>
              <li>• Certificate in Non-Profit Management</li>
              <li>• Training in Inclusive Community Development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-[#f26d2d] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <blockquote className="text-2xl md:text-3xl italic font-light leading-relaxed">
              "Community isn't something you provide—it's something you build together. My job is to open doors and create opportunities for connection."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Involved with PCLA</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Learn how you can volunteer, partner, or support our community initiatives
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

export default DavidMartinez;