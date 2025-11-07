import { Card, CardContent } from '@/components/ui/card';
import { Home as HomeIcon, Users, Lightbulb, Heart, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Framework = () => {
  const dimensions = [
    {
      icon: HomeIcon,
      title: 'Housing Stability',
      color: 'from-[#336f99] to-[#2a5a7d]',
      description: 'Safe, secure, and appropriate housing as the foundation for recovery',
      examples: [
        'Access to stable, affordable housing',
        'Supportive living environments',
        'Housing retention and stability measures',
        'Community integration support'
      ],
      link: '/recovery/housing'
    },
    {
      icon: Users,
      title: 'Belonging',
      color: 'from-[#86a873] to-[#6d8a5c]',
      description: 'Connection to community, relationships, and social networks',
      examples: [
        'Meaningful social connections',
        'Community participation',
        'Family and peer relationships',
        'Cultural and spiritual connections'
      ],
      link: '/recovery/belonging'
    },
    {
      icon: Lightbulb,
      title: 'Purpose',
      color: 'from-[#f26d2d] to-[#d65a1e]',
      description: 'Engagement in meaningful activities, education, and employment',
      examples: [
        'Vocational training and employment',
        'Educational opportunities',
        'Volunteer work and hobbies',
        'Goal-setting and achievement'
      ],
      link: '/recovery/purpose'
    },
    {
      icon: Heart,
      title: 'Health',
      color: 'from-[#336f99] to-[#86a873]',
      description: 'Physical and mental wellness, symptom management, and self-care',
      examples: [
        'Mental health treatment and support',
        'Physical health and wellness',
        'Medication management',
        'Healthy lifestyle practices'
      ],
      link: '/recovery/health'
    },
    {
      icon: Brain,
      title: 'Autonomy',
      color: 'from-[#86a873] to-[#336f99]',
      description: 'Self-determination, independence, and personal choice',
      examples: [
        'Decision-making power',
        'Financial independence',
        'Life skills development',
        'Self-advocacy and empowerment'
      ],
      link: '/recovery/autonomy'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1530043123514-c01b94ef483b?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Recovery Dimensions Framework</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            A comprehensive, evidence-based approach to understanding and measuring recovery
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What is the Recovery Dimensions Framework?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              The Recovery Dimensions Framework is PCLA's conceptual backbone—a holistic model that recognizes recovery extends far beyond symptom management to encompass all aspects of a meaningful life.
            </p>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10">
              <p className="text-lg text-gray-800 leading-relaxed">
                This framework provides a <span className="font-bold text-[#336f99]">structured and comprehensive way</span> to understand, measure, and support recovery across <span className="font-bold text-[#86a873]">five essential life dimensions</span>. It guides our programs, informs our storytelling, and shapes our research and policy advocacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Five Dimensions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Five Recovery Dimensions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each dimension represents a critical aspect of recovery, working together to support holistic well-being
            </p>
          </div>

          <div className="space-y-12">
            {dimensions.map((dimension, index) => {
              const Icon = dimension.icon;
              return (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-2 rounded-3xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3">
                      {/* Icon and Title */}
                      <div className={`bg-[#336f99] p-10 flex flex-col justify-center items-center text-white text-center`}>
                        <Icon className="w-20 h-20 mb-6" />
                        <h3 className="text-3xl font-bold">{dimension.title}</h3>
                      </div>
                      
                      {/* Content */}
                      <div className="md:col-span-2 p-10">
                        <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                          {dimension.description}
                        </p>
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Key Components:</h4>
                        <ul className="space-y-3 mb-6">
                          {dimension.examples.map((example, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-[#86a873] mr-3 text-2xl leading-none">•</span>
                              <span className="text-gray-700">{example}</span>
                            </li>
                          ))}
                        </ul>
                        <Link to={dimension.link}>
                          <Button className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white rounded-full px-6 transition-all duration-300">
                            Explore {dimension.title} →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Why This Framework Matters</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-3xl p-8 border-2 border-[#336f99]/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Holistic Understanding</h3>
                <p className="text-gray-700 leading-relaxed">
                  Recovery is not just about clinical outcomes, it is about quality of life across all dimensions. This framework ensures we address the whole person.
                </p>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8 border-2 border-[#86a873]/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Measurable Progress</h3>
                <p className="text-gray-700 leading-relaxed">
                  By breaking recovery into clear dimensions, we can track progress, identify areas needing support, and demonstrate real-world impact.
                </p>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8 border-2 border-[#f26d2d]/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Person-Centered Care</h3>
                <p className="text-gray-700 leading-relaxed">
                  Each individual's recovery journey is unique. This framework allows us to tailor support to personal goals and priorities.
                </p>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8 border-2 border-[#336f99]/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Policy Influence</h3>
                <p className="text-gray-700 leading-relaxed">
                  This evidence-based framework provides a common language for communicating with policymakers, funders, and the public about what recovery really means.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#86a873] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">See the Framework in Action</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore real recovery stories organized by dimension
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

export default Framework;
