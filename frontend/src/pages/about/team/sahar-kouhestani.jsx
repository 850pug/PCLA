import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, ArrowLeft } from 'lucide-react';

export const SaharKouhestani = () => {
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
                  src="/images/sahar-kouhestani-headshot.jpg" 
                  alt="Dr. Sahar Kouhestani"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Info */}
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Dr. Sahar Kouhestani</h1>
              <p className="text-2xl text-[#86a873] font-semibold mb-6">Quality, Safety & Risk Manager</p>
              
              <div className="flex space-x-4 mb-8">
                <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:sahar.kouhestani@pclaservices.ca" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                Dr. Sahar Kouhestani is a health policy and quality improvement leader who strengthens PCLA's safety, accreditation, and performance systems through expertise in healthcare management and evidence-based practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Dr. Kouhestani</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Dr. Sahar Kouhestani is a healthcare leader specializing in quality improvement, safety systems, and risk management. She holds a PhD in Health Policy and a Master\'s in Health Care Management (MHA) and brings over eight years of experience in healthcare administration, accreditation, and performance excellence.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At PCLA, Dr. Kouhestani leads initiatives that strengthen quality assurance, resident safety, and accessibility, aligning practices with CARF, Fraser Health, and BC Housing standards. Her work advances a culture of accountability, continuous improvement, and evidence-based policy development across all residential programs.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Before joining PCLA, she held senior roles in both healthcare organizations and academia, including Clinical Operations Manager at the Calgary Eye Specialist Clinic and Accreditation Specialist at Mashhad University of Medical Sciences. She also holds certifications in healthcare analytics, financial management, and safety leadership from Johns Hopkins and George Washington University.
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

export default SaharKouhestani;
