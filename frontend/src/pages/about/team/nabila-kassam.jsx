import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, ArrowLeft } from 'lucide-react';

export const NabilaKassam = () => {
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
                  src="/images/Nabila-Kassam.webp" 
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
                Nabila Kassam brings fifteen years of experience in fundraising, partnerships, and program development, leading PCLA\'s marketing and development efforts to advance equity and expand opportunities for those we serve.
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
              As Director of Development at PCLA, Nabila oversees marketing and communication, nurtures existing relationships, and secures new opportunities for PCLA to grow and improve. Nabila brings fifteen years of experience in fundraising, partnership development, and program evaluation to her current role.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              After receiving her Masters from the University of Oxford, Nabila went on to develop educational curricula, secure large-scale funding, and conduct programming for the United Nations, UNICEF, and the US Department of State. Her work had her focusing on inequity around the world (including Jordan, Nigeria, Kyrgyzstan, and Sri Lanka). When Nabila returned to Canada in 2018, it was with a focus on addressing inequity at home.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In BC, Nabila has secured funds from BC Hydro, BC Housing, and TransLink towards immigrant inclusion programming as well as from the Ministry of Education towards poverty alleviation. With PCLA, Nabila continues to focus her career on equity, ensuring that those living with moderate to severe mental illness have access to comfortable homes and customized programming.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-[#f26d2d] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <blockquote className="text-2xl md:text-3xl italic font-light leading-relaxed">
              "Everyone wants to live a happy, safe, and empowered life. I'm proud our mission ensures those living with mental illness are afforded those same comforts."
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

export default NabilaKassam;
