import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export const Team = () => {
  const teamMembers = [
    {
      name: 'Michael Kierszenblat',
      role: 'Executive Director',
      bio: 'Michael Kierszenblat brings experience from leadership roles in Provincial Ministries, BC Housing, and the non-profit sector in the delivery of programs and services aimed at assisting the most vulnerable.',
      bioLink: '/about/team/michael-kierszenblat'
    },
    {
      name: 'Nadun Nirosha',
      role: 'Director, Finance and Administration',
      bio: 'As a seasoned financial professional with 22 years of dedicated experience in accounting and finance, Nadun Nirosha brings a wealth of experience and expertise to the role as Director, Finance and Administration.',
      bioLink: '/team/nadun-nirosha'
    },
    {
      name: 'Nabila Kassam',
      role: 'Director of Development',
      bio: 'As Director of Development at PCLA, Nabila oversees marketing and communication, nurtures existing relationships, and secures new opportunities for PCLA to grow and improve. Nabila brings fifteen years of experience in fundraising, partnership development, and program evaluation to her current role.',
      bioLink: '/team/nabila-kassam'
    },
    {
      name: 'Jen Ballantyne',
      role: 'Executive Coordinator',
      bio: 'Jen Ballantyne brings extensive experience in executive support, administration, and organizational management to her role as Executive Coordinator at PCLA. With a strong background in executive assistance, departmental coordination, and financial administration, she supports the Executive Director, Board of Directors, and Human Resources.',
      bioLink: '/team/jen-ballantyne'
    },
    {
      name: 'Sahar Kouhestani',
      role: 'Quality, Safety & Risk Manager',
      bio: "Dr. Sahar Kouhestani is a healthcare leader specializing in quality improvement, safety systems, and risk management. She holds a PhD in Health Policy and a Master's in Health Care Management (MHA) and brings over eight years of experience in healthcare administration, accreditation, and performance excellence.",
      bioLink: '/team/sahar-kouhestani'
    },
    {
      name: 'Anastasia Humenuk',
      role: 'Director of Human Resources',
      bio: 'Anastasia Humenuk brings 28 years of experience in HR leadership roles in the private, healthcare, municipal government and the non-profit sectors. She has specific experience leading the HR function and HR team for non-profits who deliver programs and services aimed at assisting the most vulnerable.',
      bioLink: '/team/anastasia-humenuk'
    }
  ];

  const supportStaff = [
    {
      name: 'Deanna Alexander',
      role: "Team Lead, Lina's Place",
      bio: 'BIO SNIPPET HERE',
      bioLink: '/team/deanna-alexander'
    },
    {
      name: 'Debbie Reid',
      role: "Manager of Care, Millers Way & Lina's Place",
      bio: 'BIO SNIPPET HERE',
      bioLink: '/team/debbie-reid'
    },
    {
      name: 'Jeannine Corrigan',
      role: 'Manager of Care, CRESST',
      bio: 'BIO SNIPPET HERE',
      bioLink: '/team/jeannine-corrigan'
    },
    {
      name: 'Michelle Mikota',
      role: 'Manager of Care, Adrian House',
      bio: 'BIO SNIPPET HERE',
      bioLink: '/team/michelle-mikota'
    },
    {
      name: 'Susie Innes',
      role: 'Manager of Care, Rainbow Lodge',
      bio: 'BIO SNIPPET HERE',
      bioLink: '/team/susie-innes'
    },
    {
      name: 'Vanessa Roberts',
      role: 'Manager of Care, Henderson House',
      bio: 'BIO SNIPPET HERE',
      bioLink: '/team/vanessa-roberts'
    }
  ];

  const boardMembers = [
    {
      name: 'Scott Roberts',
      role: 'President',
      bio: 'BIO SNIPPET HERE',
      bioLink: '/team/scott-roberts'
    },
    {
      name: 'Camila Nunes',
      role: 'Vice President',
      bio: 'BIO SNIPPET HERE',
      bioLink: '/team/camila-nunes'
    },
    {
      name: 'Nancy Tu',
      role: 'Treasurer',
      bio: 'BIO SNIPPET HERE',
      bioLink: '/team/nancy-tu'
    },
    {
      name: 'Simi Rajput',
      role: 'Secretary',
      bio: 'BIO SNIPPET HERE',
      bioLink: '/team/simi-rajput'
    },
    {
      name: 'Sib Shaw',
      role: 'Director',
      bio: 'BIO SNIPPET HERE',
      bioLink: '/team/sib-shaw'
    },
    {
      name: 'Ed Yee',
      role: 'Director',
      bio: 'BIO SNIPPET HERE',
      bioLink: '/team/ed-yee'
    },
    {
      name: 'Harsh Thakkar',
      role: 'Director',
      bio: 'BIO SNIPPET HERE',
      bioLink: '/team/harsh-thakkar'
    },
    {
      name: 'Rehan Khan',
      role: 'Director',
      bio: 'BIO SNIPPET HERE',
      bioLink: '/team/rehan-khan'
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

  const TeamCard = ({ member, bgColor = '#006ba8', titleColor = 'text-white', cardBgColor = 'bg-white' }) => (
    <a href={member.bioLink} className="block group">
      <Card className={`hover:shadow-2xl transition-all duration-300 border-2 rounded-3xl overflow-hidden h-full flex flex-col ${cardBgColor}`}>
        <div className="relative h-32 flex items-center justify-center px-6" style={{ backgroundColor: bgColor }}>
          <div className="text-center">
            <h3 className={`text-2xl font-bold ${titleColor} mb-1`}>{member.name}</h3>
            <p className="text-[#86a873] font-semibold">{member.role}</p>
          </div>
        </div>
        <CardContent className="p-6 flex-grow flex flex-col">
          <p className="text-gray-700 leading-relaxed mb-6 flex-grow">{member.bio}</p>
          <div className="flex items-center justify-end text-[#336f99] group-hover:text-[#86a873] transition-colors font-semibold">
            <span className="mr-2">Read Bio</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </a>
  );

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
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff Section */}
      <section className="pt-6 pb-10 bg-[#fdf0e6]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Program Staff</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportStaff.map((member, index) => (
              <TeamCard key={index} member={member} />
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
              <TeamCard key={index} member={member} />
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
