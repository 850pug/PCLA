import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, ArrowLeft } from 'lucide-react';

export const NancyTu = () => {
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
                  src="/images/nancy-tu-headshot.jpg" 
                  alt="Nancy Tu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nancy Tu</h1>
              <p className="text-2xl text-[#86a873] font-semibold mb-6">Treasurer</p>
              
              <div className="flex space-x-4 mb-8">
                <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:nancy.tu@pclaservices.ca" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                Nancy Tu brings over 20 years of accounting and financial leadership experience, offering strong expertise in budgeting, controls, and nonprofit financial management grounded in equity, teamwork, and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Nancy</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nancy brings over 20 years experience in the finance and accounting field. Originally employed in a public traded company. Nancy, for a number of reasons, over seven years ago made a values-based decision to move to the not-for-profit sector. She is currently employed as the Financial Controller for a large non-profit service and housing provider. She is a member in good standing of the Chartered Professional Accountants of British Columbia.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nancy has a proven track record of achievements in the areas of year end audited working papers, annual budget preparation, internal controls, operational support, complex financial transactions, capital budget preparation, implementation, and management as well as cash management. She is also well versed in payroll systems. HR and project management. She is a strong proponent of the principles of Diversity, Inclusion, Equity and Teamwork in the workplace as well as in everyday life.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When not working, Nancy enjoys spending time with her family and friends, she is a fan of live theatre and music, and enjoys cycling and baking Japanese cheesecakes, when time permits.
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

export default NancyTu;
