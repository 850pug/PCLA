import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, ArrowLeft } from 'lucide-react';

export const SusieInnes = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <Link to="/about/team" className="inline-flex items-center text-[#336f99] hover:text-[#86a873] transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Team
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-3xl border-4 border-gray-200 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600" 
                  alt="Susie Innes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Susie Innes</h1>
              <p className="text-2xl text-[#86a873] font-semibold mb-6">Manager of Care, Rainbow Lodge</p>
              
              <div className="flex space-x-4 mb-8">
                <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:susie-innes@pclaservices.ca" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                Susie Innes leads care services at Rainbow Lodge, committed to recovery-oriented support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Susie Innes</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              [Detailed biography content will be added here. This section should include information about their background, experience, and contributions to PCLA.]
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              [Additional context about their role and impact on the organization and the people served.]
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Areas of Expertise</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>• [Area of expertise 1]</li>
              <li>• [Area of expertise 2]</li>
              <li>• [Area of expertise 3]</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Professional Background</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>• [Background item 1]</li>
              <li>• [Background item 2]</li>
              <li>• [Background item 3]</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f26d2d] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <blockquote className="text-2xl md:text-3xl italic font-light leading-relaxed">
              "Supporting recovery and empowering individuals is at the heart of everything we do at PCLA."
            </blockquote>
          </div>
        </div>
      </section>

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
