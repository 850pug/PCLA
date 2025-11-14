import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const History = () => {
  const timeline = [
    {
      year: '1913',
      title: 'The Hospital for the Mind called Essondale is established',
      image: 'https://images.squarespace-cdn.com/content/v1/616f78603f83807693800cf2/53dd987f-24e1-4123-ae09-2cb43e58ce08/essondale-hospital-for-the-mind-under-construction-in-1908.png',
      description: 'Later known as Riverview Hospital, Essondale marked the beginning of institutional mental health care in British Columbia.'
    },
    {
      year: '1950',
      title: 'Deinstitutionalization commences',
      image: 'https://images.squarespace-cdn.com/content/v1/616f78603f83807693800cf2/d6c5ce4b-3fea-4978-93d1-cd22b157a059/open-rusted-gated-door-with-padlock-and-driveway-background.jpg',
      description: 'A shift begins toward community-based care as large psychiatric institutions start to close.'
    },
    {
      year: '1960',
      title: 'Immediate outcomes of deinstitutionalization are realized',
      image: 'https://images.squarespace-cdn.com/content/v1/616f78603f83807693800cf2/e5da5535-2334-4da9-bdca-d68dc6bd2b61/homeless-man-sleeping-on-ground-in-tunnel.jpg',
      description: 'Without adequate community supports, many individuals face homelessness and lack of care, highlighting the urgent need for community-based solutions.'
    },
    {
      year: '1982',
      title: 'Pioneer House is established by former patient Dave Beamish',
      image: 'https://images.squarespace-cdn.com/content/v1/616f78603f83807693800cf2/3be346ec-ebfa-4abd-a2f1-7a3b7fe0541e/nine-open-doorframes-with-blue-sky-and-sunburst-in-background.jpg',
      description: 'A transformative moment: someone with lived experience creates the solution that would become PCLA, proving recovery is possible.'
    },
    {
      year: '1992',
      title: 'Community Response Short-Stay Treatment (CRESST) is founded',
      image: 'https://images.squarespace-cdn.com/content/v1/616f78603f83807693800cf2/ce8ab11a-fb67-442e-a8e3-3bbb8b4d5676/you%27re-not-lost-you%27re-here-sign-on-side-of-building.jpg',
      description: 'PCLA expands services to include crisis stabilization and short-term treatment options.'
    },
    {
      year: '2001-Present',
      title: 'Expansion of residential programs',
      image: 'https://images.squarespace-cdn.com/content/v1/616f78603f83807693800cf2/1634695274252-D3YJ2F9WXE0NB0MKQI3M/george-pagan-iii-2nbIfDeT4t4-unsplash.jpg',
      description: 'Elizabeth Barnett Terrace (2001), Lina\'s Place (2002), Millers Way (2003), Adrian\'s House (2004), and Dominion House (2008) are added, significantly expanding PCLA\'s capacity to serve the community.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1461360228754-6e81c478b882?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Personal History</h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto">A hidden gem in the community</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl text-gray-800 leading-relaxed mb-8">
              PCLA is a non-profit organization providing innovative housing and support to people with mild to complex mental illness, sometimes combined with substance use challenges.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Mental health advocacy has evolved over the last 100 years to become the invaluable resource it is in our community today.
            </p>
          </div>
        </div>
      </section>

      {/* One Idea Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/616f78603f83807693800cf2/a399627c-d664-4e34-ba9b-ff83764bd8bf/drop-of-water-creating-concentric-circles-in-water.png" 
                alt="Water ripples"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">One idea</h2>
              <p className="text-3xl text-[#86a873] font-semibold">made with care can make all the difference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Our Journey Through Time</h2>
          
          <div className="space-y-20">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                <div className="md:w-1/2">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full rounded-3xl shadow-xl border-4 border-gray-200"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="text-6xl font-bold text-[#336f99] mb-4">{item.year}</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-gray-200">
              <div className="w-20 h-20 bg-[#f26d2d] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                Sharing a vision toward independence that is personalized, realistic, and holistic.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-gray-200">
              <div className="w-20 h-20 bg-[#86a873] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                Supporting individuals on their journey to independence and mental health wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-16 bg-[#336f99] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <blockquote className="text-3xl md:text-4xl font-bold leading-relaxed mb-6">
              "You CAN get there from here."
            </blockquote>
            <p className="text-xl">— <strong>Dave Beamish,</strong> Founder of Pioneer House</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Continue the Legacy</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            For over 40 years, PCLA has been transforming lives through innovative, person-centered care. Join us in continuing this important work.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/get-involved">
              <Button size="lg" className="bg-[#336f99] hover:bg-[#2a5a7d] text-white px-8 py-6 rounded-full text-lg">
                Get Involved
              </Button>
            </Link>
            <Link to="/about/team">
              <Button size="lg" variant="outline" className="border-2 border-gray-900 px-8 py-6 rounded-full text-lg">
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
