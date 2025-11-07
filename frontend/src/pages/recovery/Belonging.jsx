import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Check } from 'lucide-react';

export const Belonging = () => {
  const dataPoints = [
    { stat: '92%', label: 'Feel sense of community' },
    { stat: '150+', label: 'Community events annually' },
    { stat: '75%', label: 'Maintain family connections' },
    { stat: '85%', label: 'Active in social programs' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Users className="w-14 h-14 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center">Belonging: Connection & Community</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto text-center leading-relaxed">
            Recovery flourishes in the context of meaningful relationships and community connections
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
                    src="https://images.unsplash.com/photo-1697551458746-b86ccf5049d4?w=800" 
                    alt="Maria's story"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-12">
                  <span className="inline-block px-4 py-2 bg-[#86a873] text-white rounded-full text-sm font-semibold mb-6">RESIDENT STORY</span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Maria Finds Her Community</h2>
                  <blockquote className="text-2xl text-gray-800 italic mb-6 leading-relaxed">
                    "I spent years isolated and alone. At PCLA, I discovered I wasn't defined by my illness—I was part of a caring community."
                  </blockquote>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Through weekly group activities and peer support programs, Maria built lasting friendships and reconnected with family. She now volunteers as a welcome ambassador for new residents, helping others experience the belonging she found.
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
      <section className="py-20 bg-[#86a873] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Belonging Impact by the Numbers</h2>
            <p className="text-xl text-gray-200">Measurable connections and community engagement</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {dataPoints.map((point, index) => (
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-5xl md:text-6xl font-bold mb-2 text-[#f26d2d]">{point.stat}</div>
                <div className="text-lg text-gray-200">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Belonging Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Why Belonging Transforms Recovery</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#86a873] flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Reduces Isolation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Connection to others combats the isolation and loneliness that often accompanies mental illness.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#336f99] flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Builds Support Networks</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Meaningful relationships provide emotional support and practical help during challenging times.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#f26d2d] flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Enhances Self-Worth</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Being valued as a community member strengthens identity and self-esteem.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#86a873] flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Creates Accountability</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Relationships provide positive accountability and motivation for continued growth.
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
          <h2 className="text-4xl font-bold mb-6">Foster Belonging in Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Help us create spaces where everyone feels they belong
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-involved">
              <Button size="lg" className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white px-10 py-6 rounded-full text-lg transition-all duration-300">
                Get Involved
              </Button>
            </Link>
            <Link to="/recovery">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#86a873] px-10 py-6 rounded-full text-lg transition-all duration-300">
                Explore Other Dimensions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Belonging;