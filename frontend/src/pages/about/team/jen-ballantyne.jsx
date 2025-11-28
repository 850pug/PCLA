import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, ArrowLeft } from 'lucide-react';

export const JenBallantyne = () => {
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
                  alt="Jen Ballantyne"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Info */}
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Jen Ballantyne</h1>
              <p className="text-2xl text-[#86a873] font-semibold mb-6">Executive Coordinator</p>
              
              <div className="flex space-x-4 mb-8">
                <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:jen.ballantyne@pclaservices.ca" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                Jen Ballantyne brings extensive experience in executive support, administration, and organizational management to her role as Executive Coordinator at PCLA. With a strong background in executive assistance, departmental coordination, and financial administration, she supports the Executive Director, Board of Directors, and Human Resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Jen</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As Executive Coordinator, Jen serves as the organizational hub, ensuring smooth operations and effective communication across all levels of PCLA. Her attention to detail and proactive approach keep the executive office running efficiently.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Jen manages board governance support, coordinates executive schedules, and facilitates communication between leadership, staff, and external stakeholders. Her organizational skills and discretion make her an invaluable part of the leadership team.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Areas of Expertise</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>• Executive support and office management</li>
              <li>• Board governance and meeting coordination</li>
              <li>• Administrative systems and processes</li>
              <li>• HR coordination and support</li>
              <li>• Stakeholder communication</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Professional Background</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>• Extensive executive assistance experience</li>
              <li>• Background in departmental coordination</li>
              <li>• Financial administration expertise</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-[#f26d2d] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <blockquote className="text-2xl md:text-3xl italic font-light leading-relaxed">
              "Behind every successful organization is a well-coordinated team. I'm here to make sure everything runs smoothly so our leaders can focus on our mission."
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

export default JenBallantyne;
