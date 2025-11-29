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
      bio: 'Nadun Nirosha is a seasoned finance professional with 22 years of international experience, leading financial strategy, planning, and administration to strengthen organizational performance and operational excellence.',
      bioLink: '/about/team/nadun-nirosha'
    },
    {
      name: 'Nabila Kassam',
      role: 'Director of Development',
      bio: 'Nabila Kassam brings fifteen years of experience in fundraising, partnerships, and program development, leading PCLA\'s marketing and development efforts to advance equity and expand opportunities for those we serve.',
      bioLink: '/about/team/nabila-kassam'
    },
    {
      name: 'Jen Ballantyne',
      role: 'Executive Coordinator',
      bio: 'Jen Ballantyne brings extensive experience in executive support and administration, ensuring seamless coordination across leadership functions and strengthening PCLA's operations through professionalism and attention to detail.',
      bioLink: '/about/team/jen-ballantyne'
    },
    {
      name: 'Sahar Kouhestani',
      role: 'Quality, Safety & Risk Manager',
      bio: 'Dr. Sahar Kouhestani is a health policy and quality improvement leader who strengthens PCLA\'s safety, accreditation, and performance systems through expertise in healthcare management and evidence-based practice.',
      bioLink: '/about/team/sahar-kouhestani'
    },
    {
      name: 'Anastasia Humenuk',
      role: 'Director of Human Resources',
      bio: 'Anastasia Humenuk brings 28 years of HR leadership experience across sectors, strengthening PCLA\'s people systems through expertise in labour relations, workplace practices, and organizational development.',
      bioLink: '/about/team/anastasia-humenuk'
    }
  ];

  const supportStaff = [
    {
      name: 'Deanna Alexander',
      role: "Team Lead, Lina's Place",
      bio: 'Deanna Alexander brings over 30 years of community mental health experience, leading resident support at Lina\'s Place with a focus on independence, compassion, and recovery-oriented care.',
      bioLink: '/about/team/deanna-alexander'
    },
    {
      name: 'Debbie Reid',
      role: "Manager of Care, Millers Way & Lina's Place",
      bio: 'Debbie Reid brings over 40 years of nursing and mental health experience, leading care at Millers Way and Lina\'s Place with a strong commitment to compassion, community support, and resident wellbeing.',
      bioLink: '/about/team/debbie-reid'
    },
    {
      name: 'Jeannine Corrigan',
      role: 'Manager of Care, CRESST',
      bio: 'Jeannine Corrigan brings over 30 years of psychiatric nursing and community mental health experience, leading care at CRESST North with a strong commitment to advocacy, stability, and person-centered recovery.',
      bioLink: '/about/team/jeannine-corrigan'
    },
    {
      name: 'Michelle Mikota',
      role: 'Manager of Care, Adrian House',
      bio: 'Michelle Mikota brings over 20 years of psychiatric nursing and mental health leadership, guiding care at Adrian House with a focus on compassion, clinical excellence, and resident-centered recovery.',
      bioLink: '/about/team/michelle-mikota'
    },
    {
      name: 'Susie Innes',
      role: 'Manager of Care, Rainbow Lodge',
      bio: 'Susie Innes brings extensive psychiatric nursing and leadership experience, guiding care at Rainbow Lodge with a commitment to connection, respect, and recovery-focused support for residents.',
      bioLink: '/about/team/susie-innes'
    },
    {
      name: 'Vanessa Roberts',
      role: 'Manager of Care, Henderson House',
      bio: 'Vanessa Roberts brings diverse clinical and leadership experience to PCLA, leading the Henderson Program with a commitment to compassionate care, holistic support, and recovery-focused practice.',
      bioLink: '/about/team/vanessa-roberts'
    }
  ];

  const boardMembers = [
    {
      name: 'Scott Roberts',
      role: 'President',
      bio: 'Scott Roberts brings extensive senior management and consulting experience across tourism, hospitality, and social enterprise, supporting PCLA with strategic insight rooted in community development and sustainability.',
      bioLink: '/about/team/scott-roberts'
    },
    {
      name: 'Camila Nunes',
      role: 'Vice President',
      bio: 'Camila Nunes brings over a decade of healthcare management experience, contributing strengths in accreditation, strategic planning, and operational leadership across diverse clinical and organizational settings.',
      bioLink: '/about/team/camila-nunes'
    },
    {
      name: 'Nancy Tu',
      role: 'Treasurer',
      bio: 'Nancy Tu brings over 20 years of accounting and financial leadership experience, offering strong expertise in budgeting, controls, and nonprofit financial management grounded in equity, teamwork, and integrity.',
      bioLink: '/about/team/nancy-tu'
    },
    {
      name: 'Simi Rajput',
      role: 'Secretary',
      bio: 'BIO SNIPPET PENDING',
      bioLink: '/about/team/simi-rajput'
    },
    {
      name: 'Sib Shaw',
      role: 'Director',
      bio: 'Sib Shaw brings over 30 years of international leadership experience across hospitality, retail, and healthcare, contributing strategic operational insight and strong community engagement to PCLA\'s governance.',
      bioLink: '/about/team/sib-shaw'
    },
    {
      name: 'Ed Yee',
      role: 'Director',
      bio: 'Ed Yee brings extensive senior leadership experience across private, public, and nonprofit sectors, offering strategic insight to PCLA informed by deep expertise in operations, strategy, and organizational development.',
      bioLink: '/about/team/ed-yee'
    },
    {
      name: 'Harsh Thakkar',
      role: 'Director',
      bio: 'Harsh Thakkar brings over 20 years of nonprofit leadership experience, advancing community impact through inclusive service delivery, operational excellence, and a strong commitment to equity and person-centered support.',
      bioLink: '/about/team/harsh-thakkar'
    },
    {
      name: 'Rehan Khan',
      role: 'Director',
      bio: 'Rehan Khan brings extensive experience in banking, accounting, and financial analysis, contributing expertise in internal controls, risk review, and strategic planning to strengthen nonprofit financial stewardship.',
      bioLink: '/about/team/rehan-khan'
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
