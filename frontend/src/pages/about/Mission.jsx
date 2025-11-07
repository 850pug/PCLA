import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, Users, TrendingUp } from 'lucide-react';

export const Mission = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Supporting individuals on their journey to independence and mental health wellness."'
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'Sharing a vision toward independence that is personalized, realistic, and holistic.'
    },
    {
      icon: Users,
      title: 'Our Approach',
      description: 'We bridge the gap between clinical psychiatry and community living through person-centered, trauma-informed practices that honour the dignity and potential of every individual.'
    },
    {
      icon: TrendingUp,
      title: 'Our Impact',
      description: 'We translate lived recovery experiences into insights that shape policy and practice, creating systemic change through authentic storytelling and evidence-based advocacy.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Mission</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Transforming lives through recovery-oriented supportive housing
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                PCLA is uniquely positioned at the intersection of <span className="font-bold text-[#336f99]">Serious and Persistent Mental Illness (SPMI)</span>, <span className="font-bold text-[#86a873]">supportive housing</span>, and <span className="font-bold text-[#f26d2d]">recovery-oriented practice</span>.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 mb-12">
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                We support individuals living with schizophrenia, bipolar disorder, and psychosis through long-term, housing-based programs designed to foster genuine functional recovery, rather than solely focusing on symptom stabilization.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                PCLA bridges the gap between clinical psychiatry and community living, aligning with national recovery frameworks to create a future where recovery is not just possible—it's expected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-2 rounded-3xl overflow-hidden">
                  <CardContent className="p-10">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-[#336f99] flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Unique Niche */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Unique Position</h2>
            <div className="bg-[#336f99] rounded-3xl p-12 text-white">
              <p className="text-lg leading-relaxed mb-6">
                Our strength lies in rich, humanized recovery stories and lived experiences, which complement quantitative data and build public understanding of what recovery truly means.
              </p>
              <p className="text-lg leading-relaxed">
                We leverage real-life recovery narratives to drive systemic change, making us an essential voice in shaping the future of mental health policy and practice in Canada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#86a873] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Making Recovery a Reality</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how our framework supports individuals on their journey to independence
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about/framework">
              <Button size="lg" className="bg-white text-[#336f99] hover:bg-gray-100 px-8 py-6 rounded-full text-lg transition-all duration-300">
                Explore Our Framework
              </Button>
            </Link>
            <Link to="/stories">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#336f99] px-8 py-6 rounded-full text-lg transition-all duration-300">
                Read Recovery Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
