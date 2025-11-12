import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Home as HomeIcon, Brain, Lightbulb } from 'lucide-react';

export const Home = () => {
  const recoveryDimensions = [
    { icon: HomeIcon, title: 'Housing', link: '/recovery/housing', description: 'Safe, stable housing as the foundation' },
    { icon: Users, title: 'Belonging', link: '/recovery/belonging', description: 'Connection and community' },
    { icon: Lightbulb, title: 'Purpose', link: '/recovery/purpose', description: 'Meaningful activities and goals' },
    { icon: Heart, title: 'Health', link: '/recovery/health', description: 'Physical and mental wellness' },
    { icon: Brain, title: 'Autonomy', link: '/recovery/autonomy', description: 'Independence and self-determination' }
  ];

  const stats = [
    { number: '40+', label: 'Years of Service' },
    { number: '8', label: 'Distinct Residential Programs' },
    { number: '350+', label: 'Lives Supported Annually' },
    { number: '140+', label: 'Dedicated Staff' }
  ];

  const featuredStories = [
    {
      name: 'Sarah M.',
      image: 'https://images.unsplash.com/photo-1618622127587-3261f2b2f553?w=400',
      quote: 'PCLA gave me more than a home - they gave me hope and a community that believes in me.',
      dimension: 'Housing'
    },
    {
      name: 'Michael R.',
      image: 'https://images.pexels.com/photos/10599803/pexels-photo-10599803.jpeg?w=400',
      quote: 'I discovered my purpose through the programs here. Now I help others find theirs.',
      dimension: 'Purpose'
    },
    {
      name: 'Elena T.',
      image: 'https://images.unsplash.com/photo-1697551458746-b86ccf5049d4?w=400',
      quote: 'The staff here understand recovery isn\'t linear. They celebrate every small victory with me.',
      dimension: 'Health'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Supporting individuals,<br />
              <span className="text-[#86a873]">strengthening communities</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              PCLA is the Lower Mainland's recognized reference point for recovery-oriented supportive housing for individuals living with serious and persistent mental illness.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/recovery">
                <Button size="lg" className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105">
                  Explore Recovery
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 rounded-full transition-all duration-300">
                  Our Mission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Four Decades of Service</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-3xl border-2 border-gray-200 hover:shadow-xl transition-all">
                <div className="text-6xl font-bold text-[#336f99] mb-2">{stat.number}</div>
                <div className="text-lg text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Dimensions Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Recovery Dimensions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive framework supports recovery across five essential life dimensions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {recoveryDimensions.map((dimension, index) => {
              const Icon = dimension.icon;
              return (
                <Link key={index} to={dimension.link}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-[#86a873] rounded-3xl overflow-hidden group">
                    <CardContent className="p-8 text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#336f99] mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{dimension.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{dimension.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Stories Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Stories of Recovery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from individuals on their recovery journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 rounded-2xl">
                <div className="relative h-64">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#f26d2d] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {story.dimension}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.name}</h3>
                  <p className="text-gray-700 italic leading-relaxed mb-4">"{story.quote}"</p>
                  <Link to="/stories" className="text-[#336f99] font-semibold hover:text-[#86a873] transition-colors">
                    Read Full Story →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/stories">
              <Button size="lg" className="bg-[#336f99] hover:bg-[#2a5a7d] text-white px-8 py-6 rounded-full text-lg transition-all duration-300">
                Explore All Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#86a873] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Every action makes a difference</h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100">
            Your support helps us provide recovery-oriented supportive housing and pathways to independence
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/get-involved">
              <Button size="lg" className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white text-lg px-10 py-6 rounded-full transition-all duration-300 hover:scale-105">
                Get Involved
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#336f99] text-lg px-10 py-6 rounded-full transition-all duration-300">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
