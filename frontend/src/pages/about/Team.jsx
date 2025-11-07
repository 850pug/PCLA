import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Mail } from 'lucide-react';

export const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Jennifer Anderson',
      role: 'Executive Director',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400',
      bio: 'With over 20 years of experience in mental health services, Dr. Anderson leads PCLA\'s strategic vision and national advocacy efforts.',
      linkedin: '#'
    },
    {
      name: 'Michael Chen',
      role: 'Director of Programs',
      image: 'https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?w=400',
      bio: 'Michael oversees all recovery-oriented programs, ensuring person-centered care and continuous quality improvement.',
      linkedin: '#'
    },
    {
      name: 'Sarah Williams',
      role: 'Director of Recovery Narratives',
      image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=400',
      bio: 'Sarah leads our innovative storytelling initiative, ethically gathering and sharing lived experiences of recovery.',
      linkedin: '#'
    },
    {
      name: 'Dr. Rajesh Patel',
      role: 'Research & Policy Lead',
      image: 'https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?w=400',
      bio: 'Dr. Patel translates qualitative evidence into policy recommendations, bridging practice and systemic change.',
      linkedin: '#'
    },
    {
      name: 'Emily Thompson',
      role: 'Housing Services Manager',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400',
      bio: 'Emily manages our supportive housing programs, ensuring safe and stable living environments for all residents.',
      linkedin: '#'
    },
    {
      name: 'David Martinez',
      role: 'Community Engagement Coordinator',
      image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=400',
      bio: 'David builds partnerships and community connections, fostering belonging and integration for program participants.',
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
      <section className="py-20 bg-white">
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

      {/* Team Members Grid */}
      <section className="py-20 bg-gray-50">
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