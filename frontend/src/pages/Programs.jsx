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
      name: 'Pioneer House',
      tagline: 'Safe, stable homes with wraparound support',
      description: 'Pioneer House is a 20-bed, community residential facility in New Westminster that focuses on assisting individuals to develop the skills necessary to facilitate their transition to independent, community living.',
      features: ['24/7 on-site support', 'Individual recovery plans', 'Community integration', 'Housing retention services'],
      image: '/images/pioneer-house.webp'
      alt: 'Pioneer House recovery residence exterior view'
    },
    {
      icon: HomeIcon,
      name: 'CRESST',
      tagline: 'Safe, stable homes with wraparound support',
      description: 'CRESST is a 10-bed, community response, short-stay program in New Westminster. CRESST provides a structured, therapeutic environment that offers psycho-educational groups during the clients’ stay. The program provides service for 275 clients annually.',
      features: ['24/7 on-site support', 'Individual recovery plans', 'Community integration', 'Housing retention services'],
      image: '/images/CRESST.webp'
      alt: 'CRESST recovery residence exterior view'
    },
    {
      icon: HomeIcon,
      name: 'Millers Way',
      tagline: 'Safe, stable homes with wraparound support',
      description: 'Millers Way is a 10-bed program in Burnaby that emphasizes psycho-social rehabilitation and recovery. It focuses on the individual’s strengths and abilities through fostering choices to promote independence and growth.',
      features: ['24/7 on-site support', 'Individual recovery plans', 'Community integration', 'Housing retention services'],
      image: '/images/millers-way.webp'
      alt: 'Millers Way recovery residence exterior view'
    },
    {
      icon: HomeIcon,
      name: 'Lina’s Place',
      tagline: 'Safe, stable homes with wraparound support',
      description: 'Lina’s Place is a 12-bed Mental Health, Assisted Living program in Burnaby. It provides a stable, supportive environment for persons with a mental illness who require support in developing the skills and resources necessary to increase personal competencies and quality of life.',
      features: ['24/7 on-site support', 'Individual recovery plans', 'Community integration', 'Housing retention services'],
      image: '/images/linas-place.webp'
      alt: 'Lina’s Place recovery residence exterior view'
    },
    {
      icon: HomeIcon,
      name: 'Adrian House',
      tagline: 'Safe, stable homes with wraparound support',
      description: 'Adrian House is a 10-bed program in Burnaby where Staff assist individuals to make choices, and then provide opportunities for the development of needed skills and resources to increase personal competencies and quality of life.',
      features: ['24/7 on-site support', 'Individual recovery plans', 'Community integration', 'Housing retention services'],
      image: '/images/CRESST.webp'
      alt: 'Adrian House recovery residence exterior view'
    },
    {
      icon: HomeIcon,
      name: 'Elizabeth Barnett Terrace',
      tagline: 'Safe, stable homes with wraparound support',
      description: 'Elizabeth Barnett Terrace is a 23-unit, supported independent living apartment building in New Westminster. The goals of this program are to provide safe and affordable housing that fosters independent living, while providing the least restrictive environment possible.',
      features: ['24/7 on-site support', 'Individual recovery plans', 'Community integration', 'Housing retention services'],
      iimage: '/images/elizabeth-barrett-terrace.webp'
      alt: 'Elizabeth Barnett Terrace recovery residence exterior view'
    },
    {
      icon: HomeIcon,
      name: 'Dominion House',
      tagline: 'Safe, stable homes with wraparound support',
      description: 'The Dominion House program is hosted in a 5-bed duplex in Burnaby. This program accommodates five Bridging Program residents who are ready to live more independently.',
      features: ['24/7 on-site support', 'Individual recovery plans', 'Community integration', 'Housing retention services'],
      image: '/images/dominion-house.webp'
      alt: 'Dominion House recovery residence exterior view'
    },
    {
      icon: HomeIcon,
      name: 'Henderson House',
      tagline: 'Safe, stable homes with wraparound support',
      description: 'Henderson House is a 10-bed residential program in Coquitlam for adults 19 years or older. The program accomodates five residents and is based on a client and family-centred, recovery culture framework with a psychosocial foundation.',
      features: ['24/7 on-site support', 'Individual recovery plans', 'Community integration', 'Housing retention services'],
      image: '/images/Henderson+House.webp'
      alt: 'Henderson House recovery residence exterior view'
    },
    {
      icon: HomeIcon,
      name: 'Rainbow Lodge',
      tagline: 'Resources for loved ones',
      description: 'Rainbow Lodge is home to 10 residents at various stages of their recovery.',
      features: ['Family education workshops', 'Support groups', 'Individual counseling', 'Resource navigation'],
      image: '/images/Rainbow-House.jpg'
      alt: 'Rainbow Lodge recovery residence exterior view'
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Our Programs</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Over the last 40 years, Pioneer Community Living Association has grown to offer NINE distinct residential programs. We house and serve 355 individuals per year, offering individual care, group support, and learning opportunities. g
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Supporting Recovery Through Nine Distinct Housing Programs</h2>
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
