import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, ArrowLeft } from 'lucide-react';

export const EdYee = () => {
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
                  src="/images/ed-yee-headshot.jpg" 
                  alt="Ed Yee"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ed Yee</h1>
              <p className="text-2xl text-[#86a873] font-semibold mb-6">Director</p>
              
              <div className="flex space-x-4 mb-8">
                <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:ed.yee@pclaservices.ca" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                Ed Yee brings extensive senior leadership experience across private, public, and nonprofit sectors, offering strategic insight to PCLA informed by deep expertise in operations, strategy, and organizational development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Ed</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ed (he/him) has extensive senior leadership experience in business, spanning both the private and public sectors. He is currently a Chair with Sterling Executive Group. Ed leads Sterling\'s virtual CEO groups across Canada, helping leaders from private industry, public sector, and not-for-profit organizations navigate complex leadership challenges and growth.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With significant leadership experience in organizations ranging from small to those exceeding $1 billion, Ed understands the overlapping leadership issues faced by all sectors, including resource constraints in smaller nonprofits and cultural and execution challenges in public organizations. His areas of strength include strategy, operations, sales, and marketing.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ed has a B.Com and an MBA from the Sauder School of Business at the University of British Columbia. He is passionate about using his lived experiences dealing with mental health to support PCLA in its mission and vision.
            </p>
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

export default EdYee;
