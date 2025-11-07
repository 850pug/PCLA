import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Handshake, Briefcase } from 'lucide-react';

export const GetInvolved = () => {
  const ways = [
    {
      id: 'donate',
      icon: Heart,
      title: 'Donate',
      color: 'bg-[#f26d2d]',
      description: 'Your financial support directly funds recovery-oriented programs and supportive housing that transform lives.',
      impact: 'Every donation makes a measurable difference in someone\'s recovery journey',
      actions: [
        'One-time donation',
        'Monthly giving program',
        'Legacy giving',
        'In honor/memorial donations'
      ]
    },
    {
      id: 'volunteer',
      icon: Users,
      title: 'Volunteer',
      color: 'bg-[#336f99]',
      description: 'Share your time and skills to support programs, events, and community activities that foster belonging and connection.',
      impact: 'Volunteers bring fresh perspectives and strengthen our community bonds',
      actions: [
        'Program support volunteer',
        'Event assistance',
        'Skills-based volunteering (IT, communications, etc.)',
        'Garden and facility maintenance'
      ]
    },
    {
      id: 'partner',
      icon: Handshake,
      title: 'Partner',
      color: 'bg-[#86a873]',
      description: 'Organizations can collaborate with PCLA through funding partnerships, research collaborations, or service integration.',
      impact: 'Strategic partnerships amplify our collective impact on mental health',
      actions: [
        'Funding partnerships',
        'Research collaborations',
        'Corporate sponsorships',
        'In-kind donations'
      ]
    },
    {
      id: 'careers',
      icon: Briefcase,
      title: 'Careers',
      color: 'bg-[#336f99]',
      description: 'Join our dedicated team of professionals committed to recovery-oriented practice and person-centered care.',
      impact: 'Build a meaningful career while making a real difference in people\'s lives',
      actions: [
        'Clinical positions',
        'Support worker roles',
        'Administrative staff',
        'Peer support specialists'
      ]
    }
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Get Involved</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Be part of transforming mental health care in Canada
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Four Ways to Make an Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether through donations, volunteering, partnerships, or careers—there's a way for everyone to contribute
            </p>
          </div>

          <div className="space-y-12">
            {ways.map((way, index) => {
              const Icon = way.icon;
              return (
                <div key={index} id={way.id} className="scroll-mt-20">
                  <Card className="border-2 rounded-3xl overflow-hidden hover:shadow-2xl transition-all">
                    <div className="grid md:grid-cols-3">
                      {/* Icon Section */}
                      <div className={`${way.color} p-12 flex flex-col justify-center items-center text-white text-center`}>
                        <div className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                          <Icon className="w-12 h-12" />
                        </div>
                        <h3 className="text-4xl font-bold">{way.title}</h3>
                      </div>
                      
                      {/* Content Section */}
                      <div className="md:col-span-2 p-12">
                        <p className="text-xl text-gray-800 leading-relaxed mb-6">
                          {way.description}
                        </p>
                        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                          <p className="text-lg font-semibold text-gray-900 italic">
                            ✨ {way.impact}
                          </p>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">How You Can Help:</h4>
                        <ul className="space-y-3 mb-8">
                          {way.actions.map((action, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-[#86a873] mr-3 text-2xl leading-none">•</span>
                              <span className="text-gray-700 text-lg">{action}</span>
                            </li>
                          ))}
                        </ul>
                        <Link to="/contact">
                          <Button size="lg" className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white rounded-full px-8 transition-all duration-300">
                            Learn More About {way.title}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial from Supporter */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 rounded-3xl overflow-hidden">
              <CardContent className="p-12 text-center">
                <blockquote className="text-3xl text-gray-800 italic mb-6 leading-relaxed">
                  "Supporting PCLA isn't just about giving money—it's about investing in a future where everyone has the opportunity to recover and thrive."
                </blockquote>
                <p className="text-xl font-semibold text-gray-900">Dr. Rebecca Chen</p>
                <p className="text-gray-600">Long-time Donor & Community Partner</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#86a873] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Involved?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to discuss how you can contribute to recovery-oriented mental health care
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white px-10 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;