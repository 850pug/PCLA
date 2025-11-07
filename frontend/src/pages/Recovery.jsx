import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home as HomeIcon, Users, Lightbulb, Heart, Brain, ArrowRight } from 'lucide-react';

export const Recovery = () => {
  const dimensions = [
    {
      icon: HomeIcon,
      title: 'Housing',
      color: 'from-[#336f99] to-[#2a5a7d]',
      description: 'Safe, stable housing as the foundation of recovery',
      link: '/recovery/housing',
      image: 'https://images.pexels.com/photos/5637808/pexels-photo-5637808.jpeg?w=800'
    },
    {
      icon: Users,
      title: 'Belonging',
      color: 'from-[#86a873] to-[#6d8a5c]',
      description: 'Connection to community and relationships',
      link: '/recovery/belonging',
      image: 'https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?w=800'
    },
    {
      icon: Lightbulb,
      title: 'Purpose',
      color: 'from-[#f26d2d] to-[#d65a1e]',
      description: 'Meaningful activities and goals',
      link: '/recovery/purpose',
      image: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=800'
    },
    {
      icon: Heart,
      title: 'Health',
      color: 'from-[#336f99] to-[#86a873]',
      description: 'Physical and mental wellness',
      link: '/recovery/health',
      image: 'https://images.unsplash.com/photo-1528129550655-5123a0cd0c4e?w=800'
    },
    {
      icon: Brain,
      title: 'Autonomy',
      color: 'from-[#86a873] to-[#336f99]',
      description: 'Independence and self-determination',
      link: '/recovery/autonomy',
      image: 'https://images.unsplash.com/photo-1530043123514-c01b94ef483b?w=800'
    }
  ];

  // Split dimensions into two rows
  const firstRowDimensions = dimensions.slice(0, 3); // Housing, Belonging, Purpose
  const secondRowDimensions = dimensions.slice(3, 5); // Health, Autonomy

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Recovery in Practice</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Explore the five dimensions of recovery and discover how PCLA supports holistic well-being across every aspect of life
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What is Recovery?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Recovery is a deeply personal journey toward living a meaningful, self-directed life. It goes far beyond clinical symptom management to encompass <span className="font-bold text-[#336f99]">housing stability</span>, <span className="font-bold text-[#86a873]">social belonging</span>, <span className="font-bold text-[#f26d2d]">life purpose</span>, <span className="font-bold text-[#336f99]">health</span>, and <span className="font-bold text-[#86a873]">personal autonomy</span>.
            </p>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10">
              <p className="text-lg text-gray-800 leading-relaxed">
                At PCLA, we understand that recovery is not a destination but an ongoing process. Our Recovery Dimensions Framework provides a comprehensive approach to supporting individuals across all areas of life that matter most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Dimensions Wheel/Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Five Recovery Dimensions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on any dimension to explore in depth
            </p>
          </div>

          {/* First Row: Housing, Belonging, Purpose */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {firstRowDimensions.map((dimension, index) => {
              const Icon = dimension.icon;
              return (
                <Link 
                  key={index} 
                  to={dimension.link}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-[#86a873] rounded-3xl overflow-hidden group">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={dimension.image} 
                        alt={dimension.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-[#336f99]/80"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                        <Icon className="w-16 h-16 mb-4" />
                        <h3 className="text-3xl font-bold text-center">{dimension.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        {dimension.description}
                      </p>
                      <div className="flex items-center text-[#336f99] font-semibold group-hover:text-[#86a873] transition-colors">
                        Explore {dimension.title} <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Second Row: Health, Autonomy (Centered) */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {secondRowDimensions.map((dimension, index) => {
                const Icon = dimension.icon;
                return (
                  <Link 
                    key={index} 
                    to={dimension.link}
                  >
                    <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-[#86a873] rounded-3xl overflow-hidden group">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={dimension.image} 
                          alt={dimension.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-[#336f99]/80"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                          <Icon className="w-16 h-16 mb-4" />
                          <h3 className="text-3xl font-bold text-center">{dimension.title}</h3>
                        </div>
                      </div>
                      <CardContent className="p-8">
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                          {dimension.description}
                        </p>
                        <div className="flex items-center text-[#336f99] font-semibold group-hover:text-[#86a873] transition-colors">
                          Explore {dimension.title} <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How We Support Recovery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How PCLA Supports Recovery</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-8 bg-gray-50 rounded-3xl border-l-4 border-[#336f99]">
                <div className="flex-shrink-0 w-12 h-12 bg-[#336f99] text-white rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Person-Centered Assessment</h3>
                  <p className="text-gray-700 leading-relaxed">We work with each individual to understand their unique goals, strengths, and support needs across all five dimensions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 p-8 bg-gray-50 rounded-3xl border-l-4 border-[#86a873]">
                <div className="flex-shrink-0 w-12 h-12 bg-[#86a873] text-white rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Tailored Support Plans</h3>
                  <p className="text-gray-700 leading-relaxed">Individualized plans address specific needs in each dimension, with flexible supports that evolve as recovery progresses.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 p-8 bg-gray-50 rounded-3xl border-l-4 border-[#f26d2d]">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f26d2d] text-white rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Ongoing Monitoring & Adjustment</h3>
                  <p className="text-gray-700 leading-relaxed">Regular check-ins track progress across dimensions, celebrating successes and adjusting support as needed.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 p-8 bg-gray-50 rounded-3xl border-l-4 border-[#336f99]">
                <div className="flex-shrink-0 w-12 h-12 bg-[#336f99] text-white rounded-full flex items-center justify-center text-2xl font-bold">4</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Community Integration</h3>
                  <p className="text-gray-700 leading-relaxed">We facilitate connections to broader community resources, building sustainable support networks beyond PCLA.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#86a873] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">See Recovery in Action</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Read authentic stories from individuals experiencing recovery across all five dimensions
          </p>
          <Link to="/stories">
            <Button size="lg" className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white px-10 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105">
              Visit Story Hub
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Recovery;
