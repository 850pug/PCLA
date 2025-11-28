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
      tagline: 'Community residential facility',
      description: "Pioneer House is a 20-bed, community residential facility in New Westminster that focuses on assisting individuals to develop the skills necessary to facilitate their transition to independent, community living.",
      features: ['24/7 on-site support', 'Skill development', 'Community integration', 'Transition planning'],
      image: '/images/pioneer-house.webp',
      alt: 'Pioneer House recovery residence exterior view'
    },
    {
      icon: HomeIcon,
      name: 'CRESST',
      tagline: 'Short-stay therapeutic program',
      description: "CRESST is a 10-bed, community response, short-stay program in New Westminster. CRESST provides a structured, therapeutic environment that offers psycho-educational groups during the clients' stay. The program provides service for 275 clients annually.",
      features: ['Structured therapeutic environment', 'Psycho-educational groups', 'Short-stay support', '275 clients served annually'],
      image: '/images/CRESST.webp',
      alt: 'CRESST recovery residence exterior view'
    },
    {
      icon: HomeIcon,
      name: 'Millers Way',
      tagline: 'Psycho-social rehabilitation',
      description: "Millers Way is a 10-bed program in Burnaby that emphasizes psycho-social rehabilitation and recovery. It focuses on the individual's strengths and abilities through fostering choices to promote independence and growth.",
      features: ['Strength-based approach', 'Individual choice focus', 'Independence promotion', 'Recovery-oriented'],
      image: '/images/millers-way.webp',
      alt: 'Millers Way recovery residence exterior view'
    },
    {
      icon: HomeIcon,
      name: "Lina's Place",
      tagline: 'Mental health assisted living',
      description: "Lina's Place is a 12-bed Mental Health, Assisted Living program in Burnaby. It provides a stable, supportive environment for persons with a mental illness who require support in developing the skills and resources necessary to increase personal competencies and quality of life.",
      features: ['Stable supportive environment', 'Skill development', 'Quality of life focus', 'Personal competency building'],
      image: '/images/linas-place.webp',
      alt: "Lina's Place recovery residence exterior view"
    },
    {
      icon: HomeIcon,
      name: 'Adrian House',
      tagline: 'Choice-centered support',
      description: "Adrian House is a 10-bed program in Burnaby where Staff assist individuals to make choices, and then provide opportunities for the development of needed skills and resources to increase personal competencies and quality of life.",
      features: ['Choice-making support', 'Skills development', 'Resource connection', 'Quality of life enhancement'],
      image: '/images/adrian-house.webp',
      alt: 'Adrian House recovery residence exterior view'
    },
    {
      icon: HomeIcon,
      name: 'Elizabeth Barnett Terrace',
      tagline: 'Supported independent living',
      description: "Elizabeth Barnett Terrace is a 23-unit, supported independent living apartment building in New Westminster. The goals of this program are to provide safe and affordable housing that fosters independent living, while providing the least restrictive environment possible.",
      features: ['Independent apartments', 'Safe affordable housing', 'Least restrictive environment', 'Community support'],
      image: '/images/elizabeth-barrett-terrace.webp',
      alt: 'Elizabeth Barnett Terrace recovery residence exterior view'
    },
    {
      icon: HomeIcon,
      name: 'Henderson House',
      tagline: 'Family-centered recovery',
      description: "Henderson House is a 10-bed residential program in Coquitlam for adults 19 years or older. The program accomodates five residents and is based on a client and family-centred, recovery culture framework with a psychosocial foundation.",
      features: ['Family-centered approach', 'Recovery culture framework', 'Psychosocial foundation', 'Adults 19+'],
      image: '/images/Henderson+House.webp',
      alt: 'Henderson House recovery residence exterior view'
    },
    {
      icon: HomeIcon,
      name: 'Rainbow Lodge',
      tagline: 'Recovery-focused residential support',
      description: "Rainbow Lodge is home to 10 residents at various stages of their recovery.",
      features: ['10-bed residential program', 'Recovery-focused support', 'Individualized care', 'Community integration'],
      image: '/images/Rainbow-House.jpg',
      alt: 'Rainbow Lodge recovery residence exterior view'
    }
  ];

  const faqs = [
    {
      question: 'What is the eligibility criteria?',
      answer: (
        <div>
          <p className="mb-4">
            Potential residents of PCLA's Residential Programs are referred by{' '}
            <a 
              href="https://www.fraserhealth.ca/Service-Directory/Services/mental-health-and-substance-use#.YJWrvrVKhaQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#336f99] underline hover:text-[#86a873]"
            >
              Fraser Health Authority
            </a>{' '}
            (FHA) through a Housing Application Residential/Tertiary (HART) referral.
          </p>
          <p className="mb-4">
            The HART referral is sent to the local{' '}
            <a 
              href="https://www.fraserhealth.ca/Service-Directory/Service-at-Location/3/E/mental-health-centre---new-westminster" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#336f99] underline hover:text-[#86a873]"
            >
              New Westminster
            </a>
            ,{' '}
            <a 
              href="https://www.fraserhealth.ca/Service-Directory/Service-at-Location/9/C/mental-health-centre---tri-cities" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#336f99] underline hover:text-[#86a873]"
            >
              Coquitlam
            </a>
            ,{' '}
            <a 
              href="https://www.fraserhealth.ca/Service-Directory/Locations/Burnaby/burnaby-mental-health-centre" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#336f99] underline hover:text-[#86a873]"
            >
              Burnaby
            </a>{' '}
            Mental Health Centres for their review.
          </p>
          <p>
            PCLA's residential programs do not accept referrals directly, all inquiries regarding program eligibility will be referred to FHA.
          </p>
        </div>
      )
    },
    {
      question: 'How do I enroll at a PCLA site?',
      answer: (
        <div>
          <p className="mb-4">
            In order to qualify for supports from our programs, you need to be a client of the Burnaby or New Westminster Mental Health & Substance Use Centre. We partner with them to provide wrap-around supports for clients in these areas.
          </p>
          <p>
            For more, please click{' '}
            <a 
              href="https://www.fraserhealth.ca/Service-Directory/Services/mental-health-and-substance-use/mental-health-centres/mental-health-centres" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#336f99] underline hover:text-[#86a873]"
            >
              here
            </a>.
          </p>
        </div>
      )
    },
    {
      question: 'Who is on the care team?',
      answer: 'Our clinical care teams are comprised of nurses, mental health workers, support personnel, social workers and connections to Psychiatrists and the Fraser Health Mental Health Centres in New Westminster and Burnaby.'
    },
    {
      question: 'Can you access the program directly?',
      answer: (
        <div>
          <p className="mb-4">
            At this time, No. A referral is required.
          </p>
          <p>
            Please connect with{' '}
            <a 
              href="https://www.fraserhealth.ca/Service-Directory/Service-at-Location/3/E/mental-health-centre---new-westminster" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#336f99] underline hover:text-[#86a873]"
            >
              New Westminster
            </a>
            ,{' '}
            <a 
              href="https://www.fraserhealth.ca/Service-Directory/Service-at-Location/9/C/mental-health-centre---tri-cities" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#336f99] underline hover:text-[#86a873]"
            >
              Coquitlam
            </a>
            ,{' '}
            <a 
              href="https://www.fraserhealth.ca/Service-Directory/Locations/Burnaby/burnaby-mental-health-centre" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#336f99] underline hover:text-[#86a873]"
            >
              Burnaby
            </a>{' '}
            Mental Health Centres to find out more information.
          </p>
        </div>
      )
    },
    {
      question: 'What are the goals and outcomes for residents?',
      answer: 'All residents develop a wellness plan when they first arrive in collaboration with the care team. These plans outline the resident\'s goals and objectives and are reviewed on a regular basis.'
    },
    {
      question: 'How do I contribute?',
      answer: (
        <div>
          <p className="mb-4">
            There are a number of ways you can give back to PCLA. Your contributions can assist in the development of programming and the enhancement of our facilities.
          </p>
          <p>
            Please contact{' '}
            <a 
              href="mailto:nkassam@pclaservices.ca" 
              className="text-[#336f99] underline hover:text-[#86a873]"
            >
              Nabila Kassam
            </a>
            , Director of Development or visit our{' '}
            <Link 
              to="/get-involved" 
              className="text-[#336f99] underline hover:text-[#86a873]"
            >
              Get Involved
            </Link>{' '}
            page.
          </p>
        </div>
      )
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
            Over the last 40 years, Pioneer Community Living Association has grown to offer eight distinct residential programs. We house and serve 355 individuals per year, offering individual care, group support, and learning opportunities.
          </p>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-16 bg-[#fdf0e6]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl italic text-gray-800 leading-relaxed mb-6">
              "I'm grateful that you are willing to work through difficult situations and relationships with an inordinate amount of patience, perseverance, open-mindedness and innovation."
            </blockquote>
            <p className="text-lg text-gray-600">~ Family member of PCLA resident</p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Eight Distinct Residential Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each program is designed to support recovery through safe, stable housing and wrap-around services
            </p>
          </div>

          {/* First 6 programs in 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {programs.slice(0, 6).map((program, index) => {
              const Icon = program.icon;
              return (
                <Card 
                  key={index} 
                  className="hover:shadow-2xl transition-all duration-300 border-2 rounded-3xl overflow-hidden group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.alt}
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

          {/* Last 2 programs centered in 2 columns */}
          <div className="flex flex-wrap justify-center gap-8">
            {programs.slice(6).map((program, index) => {
              const Icon = program.icon;
              return (
                <Card 
                  key={index} 
                  className="hover:shadow-2xl transition-all duration-300 border-2 rounded-3xl overflow-hidden group w-full md:w-[calc(33.333%-1.333rem)]"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.alt}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">FAQs</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">Frequently asked questions about our programs and services</p>
            
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

      {/* Quote Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#336f99] mb-6">Did you know…</h3>
            <blockquote className="text-2xl md:text-3xl italic text-gray-800 leading-relaxed mb-6">
              "I admire our residents for all they deal with to get through their day."
            </blockquote>
            <p className="text-lg text-gray-600">~ Mark Zuberbuhler, Former PCLA Executive Director</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#86a873] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Learn More?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our programs or to begin the referral process
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white px-10 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105">
                Contact Us
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#336f99] px-10 py-6 rounded-full text-lg transition-all duration-300">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
