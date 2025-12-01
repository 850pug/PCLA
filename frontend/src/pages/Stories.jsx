import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

export const Stories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDimension, setSelectedDimension] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6); // LOAD MORE STATE

  const dimensions = [
    'All',
    'Housing',
    'Belonging',
    'Purpose',
    'Health',
    'Autonomy',
    'Partners',
    'Funders'
  ];

  const stories = [
    {
      name: 'Resident Spotlight',
      title: 'A Creative Afternoon at Henderson House',
      dimension: 'Autonomy',
      image: '/images/Floralarranging-PCLA-hero.jpg',
      excerpt:
        'A creative afternoon at Henderson House brought residents together for a floral workshop that resulted in meaningful sense of accomplishment.',
      tags: ['Autonomy', 'Independence', 'Self-Advocacy'],
      storyLink: '/stories/autonomystory1'
    },
    {
      name: 'Fraser Health.',
      title: 'Building a Trauma-Informed Culture',
      dimension: ['Partners', 'Funders'],
      image: '/images/fraserhealth logo.png',
      excerpt:
        'This training helped our staff deepen their understanding of trauma and strengthen the compassion we bring to every interaction.',
      tags: ['Partners', 'Collaboration', 'Integrated Care'],
      storyLink: '/stories/partnerstory1'
    },
    {
      name: 'Untapped Awards',
      title: 'Celebrating Faranak Sajed Nia',
      dimension: 'Partners',
      image: '/images/logo-untapped.png',
      excerpt:
        'Celebrating Faranak Sajed Nia, winner of the "Diverse & Inclusive Champion Award” at the 10th annual Untapped Workplace Inclusion Awards 2023!.',
      tags: ['Partners', 'Collaboration', 'Integrated Care'],
      storyLink: '/stories/partnerstory2'
    },
    {
      name: 'Resident Spotlight - Mollie',
      title: 'The INCLUSION Art Show',
      dimension: 'Belonging',
      image: '/images/female-artist-displays-her-art-at-Inclusion-Art-Show.webp',
      excerpt:
        'PCLA staff and residents are grateful to posAbilities for hosting the 2023 INCLUSION Art Show & Sale.',
      tags: ['Belonging', 'Community', 'Connection'],
      storyLink: '/stories/belongingstory1'
    },
    {
      name: 'UBC Partner Spotlight',
      title: 'UBC Dental hygiene students at Pioneer House',
      dimension:  ['Partners', 'Health'],
      image: '/images/ubc_87334.jpg',
      excerpt:
        'For the past 13 years, UBC Dentistry has collaborated with Pioneer Community Living Association (PCLA) to offer the Oral Health Preventative Program.',
      tags: ['Partners', 'Collaboration', 'Integrated Care'],
      storyLink: '/stories/partnerstory3'
    },
    {
      name: 'Giving Back to the Community',
      title: 'PCLA residents at Oppenheimer Park',
      dimension: 'Purpose',
      image: '/images/pioneer-community-living-association-volunteers-helping-residents-find-clothing-donations.webp',
      excerpt:
        'PCLA Residents and staff come together to distribute food and clothing to those who are precariously housed around Oppenheimer Park.',
      tags: ['Purpose', 'Employment', 'Peer Support'],
      storyLink: '/stories/purposestory1'
    },
    {
      name: 'BCIT Partner Spotlight',
      title: "BCIT nursing program students at Miller's Way",
      dimension: ['Partners', 'Health'],
      image: '/images/british-columbia-institute-of-technology-bcit-vector-logo.png',
      excerpt:
        'The relationship with the BCIT Nursing program exposes future nurses to what successful supports can look like for people living with mental illness.',
      tags: ['Partners', 'Collaboration', 'Integrated Care'],
      storyLink: '/stories/partnerstory4'
    },
    {
      name: 'Sarah M.',
      title: 'From Homelessness to Home',
      dimension: 'Housing',
      image: 'https://images.unsplash.com/photo-1618622127587-3261f2b2f553?w=600',
      excerpt:
        'After years of instability, PCLA gave me what I needed most: a place to call home. With that foundation, everything else became possible.',
      tags: ['Housing', 'Stability', 'Community'],
      storyLink: '/stories/housingstory1'
    },
    {
      name: 'Elena T.',
      title: 'Wellness and Recovery',
      dimension: 'Health',
      image: 'https://images.unsplash.com/photo-1697551458746-b86ccf5049d4?w=600',
      excerpt:
        'The staff here understand recovery isn\'t linear. They celebrate every small victory with me.',
      tags: ['Health', 'Wellness', 'Mental Health'],
      storyLink: '/stories/healthstory1'
    }
  ];

  // RESET LOAD COUNT WHEN FILTERS OR SEARCH CHANGE
  useEffect(() => {
    setVisibleCount(6);
  }, [selectedDimension, searchTerm]);

  // UPDATED FILTER LOGIC (supports dimensions being strings OR arrays)
  const filteredStories = stories.filter((story) => {
    const dims = story.dimension;

    const matchesDimension =
      selectedDimension === 'All' ||
      (Array.isArray(dims)
        ? dims.includes(selectedDimension)
        : dims === selectedDimension);

    const matchesSearch =
      story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesDimension && matchesSearch;
  });

  const visibleStories = filteredStories.slice(0, visibleCount);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Story Hub</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Real stories of recovery, resilience, and hope
          </p>
        </div>
      </section>

      {/* Search + Filters */}
      <section className="py-12 bg-white border-b-2">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Search */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search stories by name, keyword, or theme..."
                className="pl-12 pr-4 py-6 text-lg rounded-full border-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              {dimensions.map((dimension) => (
                <Button
                  key={dimension}
                  variant={selectedDimension === dimension ? 'default' : 'outline'}
                  className={`rounded-full px-6 py-2 transition-all ${
                    selectedDimension === dimension
                      ? 'bg-[#336f99] hover:bg-[#2a5a7d] text-white'
                      : 'border-2 border-gray-300 hover:border-[#336f99] hover:text-[#336f99]'
                  }`}
                  onClick={() => setSelectedDimension(dimension)}
                >
                  {dimension}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {visibleStories.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleStories.map((story, index) => {
                  const isLogo =
                    Array.isArray(story.dimension)
                      ? story.dimension.includes('Partners')
                      : story.dimension === 'Partners';

                  return (
                    <Link to={story.storyLink} key={index}>
                      <Card className="hover:shadow-2xl transition-all duration-300 border-2 rounded-3xl overflow-hidden group cursor-pointer h-full">
                        <div className="relative h-72 overflow-hidden">
                          <img
                            src={story.image}
                            alt={story.name}
                            className={`w-full h-full ${
                              isLogo
                                ? 'object-contain bg-white p-6'
                                : 'object-cover group-hover:scale-110 transition-transform duration-500'
                            }`}
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">{story.name}</h3>

                            {/* multiple badges */}
                            <div className="flex gap-2 flex-wrap">
                              {(Array.isArray(story.dimension)
                                ? story.dimension
                                : [story.dimension]
                              ).map((dim, i) => (
                                <Badge key={i} className="bg-[#f26d2d] hover:bg-[#d65a1e]">
                                  {dim}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <CardContent className="p-6">
                          <h4 className="text-xl font-bold text-gray-900 mb-3">
                            {story.title}
                          </h4>
                          <p className="text-gray-700 leading-relaxed mb-4 italic">
                            "{story.excerpt}"
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {story.tags.map((tag, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="border-[#86a873] text-[#86a873]"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button className="w-full bg-[#336f99] hover:bg-[#2a5a7d] text-white rounded-full">
                            Read Full Story →
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>

              {/* LOAD MORE BUTTON */}
              {visibleCount < filteredStories.length && (
                <div className="text-center mt-12">
                  <Button
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                    className="bg-[#336f99] hover:bg-[#2a5a7d] text-white rounded-full px-10 py-4"
                  >
                    Load More
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-600">No stories found matching your search.</p>
              <Button
                className="mt-6 bg-[#336f99] hover:bg-[#2a5a7d] text-white rounded-full px-8"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDimension('All');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#86a873] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Share Your Recovery Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your story can inspire hope and help others on their recovery journey
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white px-10 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              Contact Us to Share
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Stories;
