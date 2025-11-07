import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home as HomeIcon, Users, GraduationCap, Heart, Shield, HandHeart } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const Programs = () => {
  const programs = [
    {
      icon: HomeIcon,
      name: 'Supportive Housing',
      tagline: 'Safe, stable homes with wraparound support',
      description: 'Long-term housing with on-site staff providing 24/7 support, community integration, and individualized recovery planning.',
      features: ['24/7 on-site support', 'Individual recovery plans', 'Community integration', 'Housing retention services'],
      image: 'https://images.pexels.com/photos/5637808/pexels-photo-5637808.jpeg?w=600'
    },
    {
      icon: Users,
      name: 'Peer Support Programs',
      tagline: 'Recovery guided by lived experience',
      description: 'Peer-led support groups, mentorship, and training programs that harness the power of shared experience.',
      features: ['Weekly support groups', 'One-on-one peer mentoring', 'Peer specialist certification', 'Recovery storytelling circles'],
      image: 'https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?w=600'
    },
    {
      icon: GraduationCap,
      name: 'Education & Employment',
      tagline: 'Building skills for independent futures',
      description: 'Vocational training, educational support, and employment placement services tailored to individual goals.',
      features: ['Job readiness training', 'Educational assistance', 'Resume and interview prep', 'Supported employment placements'],
      image: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=600'
    },
    {
      icon: Heart,
      name: 'Health & Wellness',
      tagline: 'Integrated mind-body care',
      description: 'Comprehensive health services including mental health support, physical wellness programs, and preventive care.',
      features: ['Mental health counseling', 'Medication management', 'Wellness activities (yoga, fitness)', 'Healthcare coordination'],
      image: 'https://images.unsplash.com/photo-1528129550655-5123a0cd0c4e?w=600'
    },
    {
      icon: Shield,
      name: 'Crisis Support',
      tagline: '24/7 emergency assistance',
      description: 'Immediate support during mental health crises, including de-escalation, stabilization, and connection to resources.',
      features: ['24/7 crisis line', 'Mobile crisis response', 'Safety planning', 'Hospital follow-up'],
      image: 'https://images.unsplash.com/photo-1758691463193-9d2b21fdb3ba?w=600'
    },
    {
      icon: HandHeart,
      name: 'Family Support Services',
      tagline: 'Resources for loved ones',
      description: 'Education, counseling, and support groups for family members and caregivers of individuals with mental illness.',
      features: ['Family education workshops', 'Support groups', 'Individual counseling', 'Resource navigation'],
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600'
    }
  ];

  const faqs = [
    {
      question: 'How do I access PCLA services?',
      answer: 'Contact us directly through our intake line or visit our Contact page. We accept referrals from healthcare providers, family members, and self-referrals. Our team will conduct an initial assessment to determine which programs best fit your needs.'
    },
    {
      question: 'What are the eligibility requirements?',
      answer: 'PCLA serves individuals living with serious and persistent mental illness (SPMI), including schizophrenia, bipolar disorder, and psychosis. We work with adults 19+ who could benefit from supportive housing and recovery-oriented services.'
    },
    {
      question: 'Is there a cost for services?',
      answer: 'Housing costs are income-based and subsidized through BC Housing. Most support services are provided at no cost through partnerships with Vancouver Coastal Health and other funders. Financial counseling is available to help navigate benefits and subsidies.'
    },
    {
      question: 'How long can someone stay in supportive housing?',
      answer: 'Our supportive housing is long-term and person-centered. Individuals can stay as long as they benefit from the support, with many residents calling PCLA home for years. We focus on stability and recovery, not arbitrary timelines.'
    },
    {
      question: 'Can family members be involved in recovery?',
      answer: 'Yes! With the resident\'s consent, we encourage family involvement. We offer family support groups, education workshops, and include loved ones in recovery planning when appropriate.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Our Programs & Services</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive, recovery-oriented programs that support every aspect of well-being
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Supporting Recovery Across Five Dimensions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each program is designed to address specific recovery dimensions while working together for holistic support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-2 rounded-3xl overflow-hidden group">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#f26d2d] flex items-center justify-center mb-3">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{program.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-lg font-semibold text-[#336f99] mb-4">{program.tagline}</p>
                    <p className="text-gray-700 leading-relaxed mb-6">{program.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-bold text-gray-900">Key Features:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#86a873] mr-2">•</span>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">Learn more about referrals, eligibility, and program access</p>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-2xl px-6 bg-white">
                  <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-[#336f99] py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Staff Spotlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-3xl overflow-hidden border-2 border-[#336f99]/30">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1516841273335-e39b37888115?w=800" 
                    alt="Staff member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-12">
                  <span className="inline-block px-4 py-2 bg-[#f26d2d] text-white rounded-full text-sm font-semibold mb-6">STAFF SPOTLIGHT</span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Lisa: Program Coordinator</h2>
                  <blockquote className="text-xl text-gray-800 italic mb-6 leading-relaxed">
                    "Every day, I witness the incredible strength and resilience of our residents. It's an honor to support their recovery journeys."
                  </blockquote>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Lisa has been with PCLA for 8 years, coordinating our peer support programs. Her person-centered approach and deep commitment to recovery-oriented practice make her an invaluable part of our team.
                  </p>
                  <Link to="/about/team">
                    <Button className="bg-[#336f99] hover:bg-[#2a5a7d] text-white rounded-full px-6">
                      Meet Our Team →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#86a873] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Reach out to learn more about our programs or to begin the referral process
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white px-10 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105">
                Contact Us
              </Button>
            </Link>
            <Link to="/stories">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#336f99] px-10 py-6 rounded-full text-lg transition-all duration-300">
                Read Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;