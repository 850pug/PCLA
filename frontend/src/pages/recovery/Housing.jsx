import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home as HomeIcon, Check } from 'lucide-react';

export const Housing = () => {
  const dataPoints = [
    { stat: '95%', label: 'Housing retention rate' },
    { stat: '200+', label: 'Individuals housed annually' },
    { stat: '3.5 yrs', label: 'Average tenancy duration' },
    { stat: '100%', label: 'Safe, accessible housing' }
  ];

  const programs = [
    {
      name: 'Supportive Housing',
      description: 'Long-term housing with on-site support staff available 24/7'
    },
    {
      name: 'Transitional Housing',
      description: 'Short to medium-term housing while individuals work toward independent living'
    },
    {
      name: 'Housing First Support',
      description: 'Rapid rehousing with wraparound services to maintain stability'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5637808/pexels-photo-5637808.jpeg?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <HomeIcon className="w-14 h-14 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center">Housing: The Foundation of Recovery</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto text-center leading-relaxed">
            Safe, stable housing is not just shelter—it's the cornerstone upon which all other aspects of recovery are built
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden border-2 border-gray-200">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1618622127587-3261f2b2f553?w=800" 
                    alt="Sarah's story"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-12">
                  <span className="inline-block px-4 py-2 bg-[#336f99] text-white rounded-full text-sm font-semibold mb-6">RESIDENT STORY</span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Sarah's Journey Home</h2>
                  <blockquote className="text-2xl text-gray-800 italic mb-6 leading-relaxed">
                    "After years of instability, PCLA gave me what I needed most: a place to call home. With that foundation, everything else became possible."
                  </blockquote>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Sarah came to PCLA after experiencing chronic homelessness. Within her first year in supportive housing, she reconnected with family, began part-time work, and now serves as a peer support volunteer. Her story demonstrates that recovery begins with a safe, stable place to live.
                  </p>
                  <Link to="/stories">
                    <Button className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white rounded-full px-6">
                      Read Full Story →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Snapshot */}
      <section className="py-20 bg-[#336f99] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Housing Impact by the Numbers</h2>
            <p className="text-xl text-gray-200">Measurable outcomes that demonstrate housing stability</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {dataPoints.map((point, index) => (
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-5xl md:text-6xl font-bold mb-2 text-[#86a873]">{point.stat}</div>
                <div className="text-lg text-gray-200">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Housing Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Why Housing is the Foundation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#336f99] flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety & Security</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Stable housing provides the physical and psychological safety needed to focus on recovery rather than daily survival.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#86a873] flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Health Improvement</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Access to stable housing is directly linked to better physical and mental health outcomes.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#f26d2d] flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Connection</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Having a home enables individuals to build lasting relationships and integrate into their community.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#336f99] flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Platform for Growth</h3>
                  <p className="text-gray-700 leading-relaxed">
                    With housing stability, individuals can pursue education, employment, and personal goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Housing Programs</h2>
            <div className="space-y-6">
              {programs.map((program, index) => (
                <Card key={index} className="border-2 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.name}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/programs">
                <Button size="lg" className="bg-[#336f99] hover:bg-[#2a5a7d] text-white px-8 py-4 rounded-full text-lg">
                  Explore All Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Insight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#336f99]/10 to-[#86a873]/10 rounded-3xl p-10 border-2 border-[#336f99]/30">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Policy Insight: Housing First Works</h3>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                Research consistently demonstrates that providing stable housing as a first step—without preconditions like sobriety or treatment compliance—leads to better long-term outcomes and is more cost-effective than emergency services.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                PCLA's housing-based approach aligns with evidence-based Housing First principles while adding the critical dimension of recovery-oriented support that enables individuals to thrive, not just survive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-20 bg-[#86a873] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Support Housing Stability</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support helps provide safe, stable housing that transforms lives
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-involved">
              <Button size="lg" className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white px-10 py-6 rounded-full text-lg transition-all duration-300">
                Donate
              </Button>
            </Link>
            <Link to="/stories">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#336f99] px-10 py-6 rounded-full text-lg transition-all duration-300">
                More Stories
              </Button>
            </Link>
            <Link to="/get-involved#partner">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#336f99] px-10 py-6 rounded-full text-lg transition-all duration-300">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Housing;