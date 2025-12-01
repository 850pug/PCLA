import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, ArrowLeft } from 'lucide-react';

export const SusieInnes = () => {
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
                  alt="Susie Innes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Info */}
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Susie Innes</h1>
              <p className="text-2xl text-[#86a873] font-semibold mb-6">Manager of Care, Rainbow Lodge</p>
              
              <div className="flex space-x-4 mb-8">
                <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:susie.innes@pclaservices.ca" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                Susie Innes brings extensive psychiatric nursing and leadership experience, guiding care at Rainbow Lodge with a commitment to connection, respect, and recovery-focused support for residents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Susie</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Susie Innes is a dedicated psychiatric nurse and experienced mental health professional with a lifelong passion for supporting adults in their recovery and wellness journeys. After becoming a Registered Psychiatric Nurse, she went on to complete a Bachelor of Arts in Psychology with a minor in Counselling and Human Development at Simon Fraser University.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Over the years, Susie has worked in a variety of clinical and leadership roles across Port Coquitlam, Surrey, Burnaby, the Downtown Eastside, and now New Westminster. She has served as a staff nurse, supervisor, and manager, bringing both compassion and insight to each setting.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Susie has been part of Rainbow Lodge for more than 20 years and became a PCLA Manager of Care when the organization assumed its operations. She believes deeply in the power of human connection as a foundation for wellbeing and recovery. By fostering relationships where residents feel valued, heard, and respected, she empowers individuals to build confidence, achieve their goals, and recognize their own strength and worth.
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

export default SusieInnes;
