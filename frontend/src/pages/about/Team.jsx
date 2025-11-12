import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Mail } from 'lucide-react';

export const Team = () => {
  const teamMembers = [
    {
      name: 'Michael Kierszenblat',
      role: 'Executive Director',
      image: '/images/Michael+K+Bio.webp',
      bio: 'Michael Kierszenblat brings experience from leadership roles in Provincial Ministries, BC Housing, and the non-profit sector in the delivery of programs and services aimed at assisting the most vulnerable.',
      linkedin: '#'
    },
    {
      name: 'Nadun Nirosha',
      role: 'Director, Finance and Administration',
      image: 'https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?w=400',
      bio: 'As a seasoned financial professional with 22 years of dedicated experience in accounting and finance, Nadun Nirosha brings a wealth of experience and expertise to the role as Director, Finance and Administration.',
      linkedin: '#'
    },
    {
      name: 'Nabila Kassam',
      role: 'Director of Development',
      image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=400',
      bio: 'As Director of Development at PCLA, Nabila oversees marketing and communication, nurtures existing relationships, and secures new opportunities for PCLA to grow and improve. Nabila brings fifteen years of experience in fundraising, partnership development, and program evaluation to her current role. ',
      linkedin: '#'
    },
    {
      name: 'Jen Ballantyne',
      role: 'Executive Coordinator',
      image: 'https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?w=400',
      bio: 'Jen Ballantyne brings extensive experience in executive support, administration, and organizational management to her role as Executive Coordinator at PCLA. With a strong background in executive assistance, departmental coordination, and financial administration, she supports the Executive Director, Board of Directors, and Human Resources.',
      linkedin: '#'
    },
    {
      name: 'Sahar Kouhestani',
      role: 'Quality, Safety & Risk Manager',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400',
      bio: 'Dr. Sahar Kouhestani is a healthcare leader specializing in quality improvement, safety systems, and risk management. She holds a PhD in Health Policy and a Master’s in Health Care Management (MHA) and brings over eight years of experience in healthcare administration, accreditation, and performance excellence.',
      linkedin: '#'
    },
    {
      name: 'Anastasia Humenuk',
      role: 'Director of Human Resources',
      image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=400',
      bio: 'Anastasia Humenuk brings 28 years of experience in HR leadership roles in the private, healthcare, municipal government and the non-profit sectors. She has specific experience leading the HR function and HR team for non-profits who deliver programs and services aimed at assisting the most vulnerable. ',
      linkedin: '#'
    }
  ];

  const supportStaff = [
    {
      name: 'Deanna Alexander',
      role: 'Team Lead, Lina’s Place',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      bio: 'BIO HERE',
      linkedin: '#'
    },
    {
      name: 'Debbie Reid',
      role: 'Manager of Care, Millers Way & Lina’s Place',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?w=400',
      bio: 'BIO HERE',
      linkedin: '#'
    },
    {
      name: 'Jeannine Corrigan',
      role: 'Manager of Care, CRESST',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400',
      bio: 'BIO HERE',
      linkedin: '#'
    },
    {
      name: 'Michelle Mikota',
      role: 'Manager of Care, Adrian House',
      image: 'https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg?w=400',
      bio: 'BIO HERE',
      linkedin: '#'
    },
    {
      name: 'Susie Innes',
      role: 'Manager of Care, Rainbow Lodge',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      bio: 'BIO HERE',
      linkedin: '#'
    },
    {
      name: 'Vanessa Roberts',
      role: 'Manager of Care, Henderson House',
      image: 'https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg?w=400',
      bio: 'BIO HERE',
      linkedin: '#'
    }
  ];

  const boardMembers = [
    {
      name: 'Dr. Patricia Thompson',
      role: 'Board Chair',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      bio: 'Dr. Thompson brings 25 years of experience in mental health policy and governance, providing strategic leadership to our organization.',
      linkedin: '#'
    },
    {
      name: 'Robert Chang',
      role: 'Vice Chair',
      image: 'https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg?w=400',
      bio: 'Robert is a corporate leader with extensive experience in nonprofit governance and community development.',
      linkedin: '#'
    },
    {
      name: 'Dr. Aisha Mohammed',
      role: 'Treasurer',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400',
      bio: 'Dr. Mohammed is a CPA with expertise in nonprofit financial management and sustainable funding strategies.',
      linkedin: '#'
    },
    {
      name: 'Thomas Anderson',
      role: 'Secretary',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?w=400',
      bio: 'Thomas is an attorney specializing in nonprofit law and governance, ensuring our compliance and best practices.',
      linkedin: '#'
    },
    {
      name: 'Sandra Lee',
      role: 'Board Member',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      bio: 'Sandra brings lived experience and advocacy expertise, ensuring our board remains connected to the community we serve.',
      linkedin: '#'
    },
    {
      name: 'Dr. Michael O\'Brien',
      role: 'Board Member',
      image: 'https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?w=400',
      bio: 'Dr. O\'Brien is a psychiatrist with deep knowledge of recovery-oriented systems and evidence-based practices.',
      linkedin: '#'
    }
  ];

  const staffHighlights = [
    {
      stat: '85%',
      label: 'Have lived experience with mental health challenges'
    },
    {
      stat: '15+',
      label: 'Average years of experience in mental health'
    },
    {
      stat: '100%',
      label: 'Trained in trauma-informed practice'
    },
    {
      stat: '24/7',
      label: 'Support available for residents'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Team</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Dedicated professionals committed to recovery and community
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="pt-20 pb-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Compassionate Experts in Recovery</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our team brings together clinical expertise, lived experience, and deep commitment to recovery-oriented practice. We believe in the potential of every person we serve and work tirelessly to create environments where recovery thrives.
            </p>
          </div>

          {/* Staff Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {staffHighlights.map((highlight, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                <div className="text-5xl font-bold text-[#336f99] mb-2">{highlight.stat}</div>
                <div className="text-gray-700 font-medium">{highlight.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="pt-6 pb-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-2 rounded-3xl overflow-hidden group">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-[#86a873] font-semibold">{member.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href={member.linkedin} className="text-[#336f99] hover:text-[#86a873] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@pclaservices.ca`} className="text-[#336f99] hover:text-[#86a873] transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff Section */}
      <section className="pt-6 pb-10 bg-white-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Program Staff</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportStaff.map((member, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-2 rounded-3xl overflow-hidden group">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-[#86a873] font-semibold">{member.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href={member.linkedin} className="text-[#336f99] hover:text-[#86a873] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@pclaservices.ca`} className="text-[#336f99] hover:text-[#86a873] transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Board of Directors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-2 rounded-3xl overflow-hidden group">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-[#86a873] font-semibold">{member.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href={member.linkedin} className="text-[#336f99] hover:text-[#86a873] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@pclaservices.ca`} className="text-[#336f99] hover:text-[#86a873] transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-[#86a873] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to make a difference in recovery-oriented care
          </p>
          <a href="/get-involved#careers">
            <button className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
              View Career Opportunities
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
