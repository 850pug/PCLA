import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Check } from 'lucide-react';

export const Health = () => {
  const dataPoints = [
    { stat: '88%', label: 'Report improved mental health' },
    { stat: '70%', label: 'Engaged in wellness activities' },
    { stat: '80%', label: 'Regular healthcare access' },
    { stat: '75%', label: 'Medication adherence' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1528129550655-5123a0cd0c4e?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Heart className="w-14 h-14 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center">Health: Wellness in Mind & Body</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto text-center leading-relaxed">
            Recovery encompasses both mental and physical wellness, supported by comprehensive healthcare
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
                    src="https://images.unsplash.com/photo-1679466061812-211a6b737175?w=800" 
                    alt="Anita's story"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-12">
                  <span className="inline-block px-4 py-2 bg-[#336f99] text-white rounded-full text-sm font-semibold mb-6">RESIDENT STORY</span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Anita's Path to Wellness</h2>
                  <blockquote className="text-2xl text-gray-800 italic mb-6 leading-relaxed">
                    "For the first time, I have healthcare providers who see the whole me—not just my diagnosis."
                  </blockquote>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    With integrated health support at PCLA, Anita manages her mental health while also addressing physical health needs she'd long ignored. She now participates in yoga classes, maintains regular medical appointments, and has significantly improved her overall well-being.
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
            <h2 className="text-4xl font-bold mb-4">Health Impact by the Numbers</h2>
            <p className="text-xl text-gray-200">Wellness outcomes and healthcare engagement</p>
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

      {/* Why Health Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Why Holistic Health is Essential</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#336f99] flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrated Care</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Mental and physical health are deeply interconnected. Addressing both leads to better overall outcomes.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#86a873] flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Symptom Management</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Effective treatment and support help individuals manage symptoms and reduce crisis episodes.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#f26d2d] flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Preventive Wellness</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Proactive health practices improve quality of life and prevent complications.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#336f99] flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Empowered Self-Care</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learning to manage one's own health builds autonomy and confidence.
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
          <h2 className="text-4xl font-bold mb-6">Support Comprehensive Health Services</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Help us provide integrated healthcare that treats the whole person
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-involved">
              <Button size="lg" className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white px-10 py-6 rounded-full text-lg transition-all duration-300">
                Get Involved
              </Button>
            </Link>
            <Link to="/recovery">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#336f99] px-10 py-6 rounded-full text-lg transition-all duration-300">
                All Dimensions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Health;