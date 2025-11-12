import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export const Partners = () => {
  const partners = [
    {
      name: 'BC Housing',
      logo: '/images/BCH_Logo.webp',
      description: 'Provincial housing authority providing funding and support for supportive housing initiatives.',
      category: 'Government'
    },
    {
      name: 'Vancouver Coastal Health',
      logo: '/images/VCH_logo.png',
      description: 'Healthcare partner providing integrated mental health services and clinical support.',
      category: 'Healthcare'
    },
    {
      name: 'Canadian Mental Health Association',
      logo: 'https://via.placeholder.com/200x80/336f99/ffffff?text=CMHA',
      description: 'National advocacy partner promoting mental health for all Canadians.',
      category: 'Advocacy'
    },
    {
      name: 'UBC School of Social Work',
      logo: 'https://via.placeholder.com/200x80/86a873/ffffff?text=UBC',
      description: 'Academic partner supporting research on recovery-oriented practice.',
      category: 'Academic'
    },
    {
      name: 'Community Living BC',
      logo: 'https://via.placeholder.com/200x80/f26d2d/ffffff?text=CLBC',
      description: 'Supporting individuals with developmental disabilities and complex needs.',
      category: 'Government'
    },
    {
      name: 'Coast Mental Health',
      logo: 'https://via.placeholder.com/200x80/336f99/ffffff?text=Coast+MH',
      description: 'Community mental health organization providing complementary services.',
      category: 'Community'
    }
  ];

  const partnerCategories = ['All', 'Government', 'Healthcare', 'Advocacy', 'Academic', 'Community'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Partners</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Collaborating for stronger communities and better outcomes
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Building a Network of Support</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              PCLA's impact is amplified through strategic partnerships across government, healthcare, academic, and community sectors. Together, we create a comprehensive ecosystem of support for individuals on their recovery journey.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-2 rounded-3xl overflow-hidden group">
                <CardContent className="p-8">
                  <div className="bg-white rounded-2xl p-6 mb-6 flex items-center justify-center h-32 border-2">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#86a873] text-white text-sm font-semibold rounded-full">
                      {partner.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{partner.name}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{partner.description}</p>
                  <a href="#" className="inline-flex items-center text-[#336f99] hover:text-[#86a873] font-semibold transition-colors">
                    Learn More <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Partner with PCLA?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-3xl p-8 border-2 border-[#336f99]/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Unique Expertise</h3>
                <p className="text-gray-700 leading-relaxed">
                  Access to specialized knowledge at the intersection of SPMI, supportive housing, and recovery-oriented practice.
                </p>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8 border-2 border-[#86a873]/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Rich Qualitative Data</h3>
                <p className="text-gray-700 leading-relaxed">
                  Leverage authentic recovery narratives to inform research, policy, and program development.
                </p>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8 border-2 border-[#f26d2d]/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Systems Change</h3>
                <p className="text-gray-700 leading-relaxed">
                  Collaborate on initiatives that drive meaningful policy and practice improvements.
                </p>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8 border-2 border-[#336f99]/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  Make a tangible difference in the lives of individuals living with serious mental illness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-[#86a873] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Become a Partner</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in transforming mental health support across Canada
          </p>
          <a href="/get-involved#partner">
            <button className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
              Partnership Inquiries
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Partners;
