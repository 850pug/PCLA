import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Home as HomeIcon, Heart, Download } from 'lucide-react';

export const Impact = () => {
  const metrics = [
    { dimension: 'Housing', stat: '90%', label: 'of residents feel safe, respected, and at home in their housing.', icon: HomeIcon, color: 'bg-[#336f99]' },
    { dimension: 'Health', stat: '125,556', label: 'hours of direct care delivered across our programs last year.', icon: Users, color: 'bg-[#f26d2d]' },
    { dimension: 'Purpose', stat: '87%', label: 'of residents report feeling optimistic about their recovery journey', icon: TrendingUp, color: 'bg-[#86a873]' },
    { dimension: 'Belonging', stat: '87%', label: 'of residents engage in community, employment, or educational opportunities.', icon: Heart, color: 'bg-[#336f99]' },
    { dimension: 'Autonomy', stat: '89%', label: 'of residents say they are satisfied with the support they receive from staff.', icon: TrendingUp, color: 'bg-[#f26d2d]' }
  ];

  const overallImpact = [
    { number: '40+', label: 'Years serving our community' },
    { number: '350+', label: 'Lives supported annually' },
    { number: '8', label: 'Residential programs' },
    { number: '140+', label: 'Dedicated staff members' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Our Impact</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Measuring recovery across all five dimensions
          </p>
        </div>
      </section>

      {/* Overall Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Four Decades of Service</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {overallImpact.map((item, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border-2">
                <div className="text-6xl font-bold text-[#336f99] mb-2">{item.number}</div>
                <div className="text-lg text-gray-700 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard by Dimension */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Recovery Outcomes by Dimension</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Tracking progress across the five essential recovery dimensions
          </p>

          {/* Single row layout on desktop/tablet, single column on mobile - matching gap-8 */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card
                  key={index}
                  className="border-2 rounded-3xl overflow-hidden hover:shadow-2xl transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl ${metric.color} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                        {metric.dimension}
                      </span>
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{metric.stat}</div>
                    <div className="text-xs text-gray-700 leading-tight">{metric.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Downloadable Reports & Policy Briefs</h2>
            <div className="space-y-6">
              <Card className="border-2 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
                <CardContent className="p-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">2024/25 Annual Impact Report</h3>
                    <p className="text-gray-600">Comprehensive review of outcomes, stories, and organizational growth</p>
                  </div>
                  <a href="/documents/PCLA+Annual+Report+August+2025.pdf" download="PCLA-Annual-Report-2024-25.pdf">
                    <Button className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white rounded-full px-6">
                      <Download className="w-5 h-5 mr-2" /> Download
                    </Button>
                  </a>
                </CardContent>
              </Card>
              <Card className="border-2 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
                <CardContent className="p-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">What is Psychosocial Rehabilitation (PSR)?</h3>
                    <p className="text-gray-600">The heart of PCLA's approach.</p>
                  </div>
                  <Button className="bg-[#336f99] hover:bg-[#2a5a7d] text-white rounded-full px-6">
                    <Download className="w-5 h-5 mr-2" /> Download
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-2 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
                <CardContent className="p-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">What is Housing First?</h3>
                    <p className="text-gray-600">The evidence behind PCLA's housing model.</p>
                  </div>
                  <Button className="bg-[#86a873] hover:bg-[#6d8a5c] text-white rounded-full px-6">
                    <Download className="w-5 h-5 mr-2" /> Download
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Connection */}
      <section className="py-20 bg-[#86a873] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Behind Every Statistic is a Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Numbers show our impact, but stories show the human side of recovery
          </p>
          <Link to="/stories">
            <Button
              size="lg"
              className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white px-10 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              Read Recovery Stories
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Impact;
