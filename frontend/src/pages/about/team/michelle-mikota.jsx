import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, ArrowLeft } from 'lucide-react';

export const MichelleMikota = () => {
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
                  src="/images/michelle-mikota-headshot.jpg" 
                  alt="Michelle Mikota"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Info */}
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Michelle Mikota</h1>
              <p className="text-2xl text-[#86a873] font-semibold mb-6">Manager of Care, Adrian House</p>
              
              <div className="flex space-x-4 mb-8">
                <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:michelle.mikota@pclaservices.ca" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                Michelle Mikota brings over 20 years of psychiatric nursing and mental health leadership, guiding care at Adrian House with a focus on compassion, clinical excellence, and resident-centered recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Michelle</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Michelle Mikota is a dedicated psychiatric nurse and mental health leader with over two decades of experience supporting individuals living with complex mental health needs. She graduated from Douglas College in 2002 with a Diploma in Psychiatric Nursing. While employed at the Forensic Psychiatric Hospital she was sponsored to complete her Advanced Diploma in Psychiatric Nursing condensed to five months full time, which was a career highlight that helped pave her path into leadership.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Michelle's career has included clinical and leadership roles across multiple settings, including Forensic Psychiatric Hospital and Developmental Disabilities Mental Health Services, where she provided nursing support, education, and advocacy for clients and their care networks. She also holds a Bachelor of Science in Psychiatric Nursing (BSPN) and a Cognitive Behavioural Therapy Certificate from Douglas College.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Before joining PCLA, Michelle worked with the Early Psychosis Intervention team and the Bed-Based Treatment Supported Living Team. In 2024, she became Manager of Care at Adrian House, where she leads with compassion and mentorship, creating a warm, therapeutic environment that helps residents maintain wellness, build skills, and achieve their personal goals.
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

export default MichelleMikota;
