import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Check } from 'lucide-react';

export const Purpose = () => {
  const dataPoints = [
    { stat: '78%', label: 'Engaged in meaningful activities' },
    { stat: '45%', label: 'Employed or in training' },
    { stat: '90%', label: 'Have personal goals' },
    { stat: '65%', label: 'Active volunteers' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Lightbulb className="w-14 h-14 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center">Purpose: Finding Meaning & Direction</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto text-center leading-relaxed">
            Recovery thrives when individuals engage in meaningful activities that align with their values and aspirations
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
                    src="https://images.pexels.com/photos/10599803/pexels-photo-10599803.jpeg?w=800" 
                    alt="James' story"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-12">
                  <span className="inline-block px-4 py-2 bg-[#f26d2d] text-white rounded-full text-sm font-semibold mb-6">RESIDENT STORY</span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">James Discovers His Purpose</h2>
                  <blockquote className="text-2xl text-gray-800 italic mb-6 leading-relaxed">
                    "Through PCLA's vocational program, I found more than a job—I found my calling. Now I help others every day."
                  </blockquote>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    After years without direction, James enrolled in PCLA's peer support training program. Today, he works as a certified peer specialist, using his lived experience to guide others on their recovery journeys. His story shows how purpose transforms lives.
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
      <section className="py-20 bg-[#f26d2d] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Purpose Impact by the Numbers</h2>
            <p className="text-xl text-gray-200">Meaningful engagement and goal achievement</p>
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

      {/* Why Purpose Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Why Purpose Drives Recovery</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#f26d2d] flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Provides Direction</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Having goals and meaningful activities gives structure and direction to daily life.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#336f99] flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Builds Confidence</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Achieving goals, big and small, rebuilds confidence and self-efficacy.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#86a873] flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Creates Identity</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Meaningful roles help individuals see themselves beyond their diagnosis.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#f26d2d] flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Fosters Hope</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Working toward a purposeful future instills hope and motivation for continued recovery.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-20 bg-[#86a873] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Support Purpose-Driven Recovery</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Help us create opportunities for meaningful engagement and achievement
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/programs">
              <Button size="lg" className="bg-white text-[#f26d2d] hover:bg-gray-100 px-10 py-6 rounded-full text-lg transition-all duration-300">
                View Programs
              </Button>
            </Link>
            <Link to="/recovery">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#f26d2d] px-10 py-6 rounded-full text-lg transition-all duration-300">
                All Dimensions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Purpose;