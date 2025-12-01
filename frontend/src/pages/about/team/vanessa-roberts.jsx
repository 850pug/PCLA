import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, ArrowLeft } from 'lucide-react';

export const VanessaRoberts = () => {
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
                  src="/images/vanessa-roberts-headshot.jpg" 
                  alt="Vanessa Roberts"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Info */}
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Vanessa Roberts</h1>
              <p className="text-2xl text-[#86a873] font-semibold mb-6">Manager of Care, Henderson House</p>
              
              <div className="flex space-x-4 mb-8">
                <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:vanessa.roberts@pclaservices.ca" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                Vanessa Roberts brings diverse clinical and leadership experience to PCLA, leading the Henderson Program with a commitment to compassionate care, holistic support, and recovery-focused practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Vanessa</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Vanessa Roberts is passionate about making a difference in healthcare and advocating for mental health initiatives. Born and raised in Australia, she grew up witnessing firsthand the impact of mental health stigma on those close to her, a reality that inspired her lifelong commitment to compassionate care.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Her career in healthcare has spanned a range of roles, including Resident Care Aide, Mental Health Worker, Activity Coordinator, Licensed Practical Nurse, and now Registered Nurse. This diverse experience has given her a deep appreciation for the value each team member brings to holistic care. Vanessa earned her Bachelor of Science in Nursing from Douglas College in 2016 and has focused her practice on integrating medical and mental health nursing to ensure every person is supported as a whole.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Before joining PCLA in 2019, Vanessa worked across mental health and addictions, developmental disabilities, community mental health, and Home Health. Her leadership led to the creation of the Henderson Program in Coquitlam, a licensed mental health group home that she has helped turn into a true healing space. Vanessa describes her career as a mission: one built on mentorship, purpose, and helping others believe in their potential for recovery and growth.
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

export default VanessaRoberts;
