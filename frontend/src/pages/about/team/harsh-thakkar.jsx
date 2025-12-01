import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, ArrowLeft } from 'lucide-react';

export const HarshThakkar = () => {
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
                  src="/images/Headshot-placeholder.jpeg" 
                  alt="Harsh Thakkar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Harsh Thakkar</h1>
              <p className="text-2xl text-[#86a873] font-semibold mb-6">Director</p>
              
              <div className="flex space-x-4 mb-8">
                <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:harsh.thakkar@pclaservices.ca" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#336f99] text-white hover:bg-[#86a873] transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                Harsh Thakkar brings over 20 years of nonprofit leadership experience, advancing community impact through inclusive service delivery, operational excellence, and a strong commitment to equity and person-centered support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Harsh</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Harsh Thakkar is a visionary leader with over 20 years of experience in the non-profit sector. He has expertise in fostering community connections, streamlining operations, and scaling organizations. Honored as a 2020 RBC Top 25 Canadian Immigrant, which acknowledges his contributions to the people of the community who are in difficulties. His efforts are geared towards initiatives that champion diversity, person-centered service delivery, and overall community well-being.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Driven by a deep commitment to social impact, he lives by his core value: "It takes one to help another." As an approachable, charismatic, and humble leader, he inspires his family, friends, and co-workers to develop programs that address inequities by listening to marginalized voices and removing barriers to access key resources. He invests deeply in mentoring individuals and initiatives facing challenges, guiding them toward sustainable success with practical strategies and a focus on long-term growth. By fostering inclusive environments where collaboration thrives, he empowers communities to bridge gaps, build resilience, and create lasting, equitable progress.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A graduate of Kwantlen Polytechnic University with a Bachelor of Business Administration, Harsh leverages his knowledge to lead in dynamic settings. Outside work, he embraces work-life balance through cricket, biking, and swimming, activities that reflect his commitment to community and connection.
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

export default HarshThakkar;
