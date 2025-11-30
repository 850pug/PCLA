import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

export const Stories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDimension, setSelectedDimension] = useState('All');

  const dimensions = ['All', 'Housing', 'Belonging', 'Purpose', 'Health', 'Autonomy', 'Partners', 'Funders'];

  const stories = [
    {
      name: 'Fraser Health.',
      title: 'Building a Trauma-Informed Culture',
      dimension: ['Partners', 'Funders'],
      image: '/images/fraserhealth logo.png',
      excerpt: 'This training helped our staff deepen their understanding of trauma and strengthen the compassion we bring to every interaction.',
      tags: ['Partners', 'Collaboration', 'Integrated Care'],
      storyLink: '/stories/partnerstory1'
    },
    {
      name: 'Sarah M.',
      title: 'From Homelessness to Home',
      dimension: 'Housing',
      image: 'https://images.unsplash.com/photo-1618622127587-3261f2b2f553?w=600',
      excerpt: 'After years of instability, PCLA gave me what I needed most: a place to call home. With that foundation, everything else became possible.',
      tags: ['Housing', 'Stability', 'Community'],
      storyLink: '/stories/housingstory1'
    },
    {
      name: 'Michael R.',
      title: 'Finding My Purpose',
      dimension: 'Purpose',
      image: 'https://images.pexels.com/photos/10599803/pexels-photo-10599803.jpeg?w=600',
      excerpt: 'I discovered my purpose through the programs here. Now I help others find theirs as a peer support specialist.',
      tags: ['Purpose', 'Employment', 'Peer Support'],
      storyLink: '/stories/purposestory1'
    },
    {
      name: 'Elena T.',
      title: 'Wellness and Recovery',
      dimension: 'Health',
      image: 'https://images.unsplash.com/photo-1697551458746-b86ccf5049d4?w=600',
      excerpt: 'The staff here understand recovery isn\'t linear. They celebrate every small victory with me.',
      tags: ['Health', 'Wellness', 'Mental Health'],
      storyLink: '/stories/healthstory1'
    },
    {
      name: 'Maria G.',
      title: 'Finding Community',
      dimension: 'Belonging',
      image: 'https://images.unsplash.com/photo-1679466061812-211a6b737175?w=600',
      excerpt: 'I spent years isolated and alone. At PCLA, I discovered I wasn\'t defined by my illness—I was part of a caring community.',
      tags: ['Belonging', 'Community', 'Connection'],
      storyLink: '/stories/belongingstory1'
    },
    {
      name: 'James K.',
      title: 'Reclaiming My Independence',
      dimension: 'Autonomy',
      image: 'https://images.pexels.com/photos/6484132/pexels-photo-6484132.jpeg?w=600',
      excerpt: 'PCLA taught me that having a mental illness doesn\'t mean giving up control of my life. I make my own choices now.',
      tags: ['Autonomy', 'Independence', 'Self-Advocacy'],
      storyLink: '/stories/autonomystory1'
    }
  ];

  const filteredStories = stories.filter(story => {
    const matchesDimension = selectedDimension === 'All' || story.dimension === selectedDimension;
    const matchesSearch =
      story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDimension && matchesSearch;
  });

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

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b-2">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
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

            {/* Dimension Filter */}
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

      {/* Stories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {filteredStories.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story, index) => (
                <Link to={story.storyLink} key={index}>
                  <Card className="hover:shadow-2xl transition-all duration-300 border-2 rounded-3xl overflow-hidden group cursor-pointer h-full">
                    <div className="relative h-72 overflow-hidden">

                      {/* CONDITIONAL IMAGE HANDLING — LOGO vs PHOTO */}
                      <img
                        src={story.image}
                        alt={story.name}
                        className={`w-full h-full ${
                          story.dimension === 'Partners'
                            ? 'object-contain bg-white p-6'
                            : 'object-cover group-hover:scale-110 transition-transform duration-500'
                        }`}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{story.name}</h3>
                        <Badge className="bg-[#f26d2d] hover:bg-[#d65a1e]">{story.dimension}</Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h4>
                      <p className="text-gray-700 leading-relaxed mb-4 italic">
                        "{story.excerpt}"
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {story.tags.map((tag, i) => (
                          <Badge key={i} variant="outline" className="border-[#86a873] text-[#86a873]">
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
              ))}
            </div>
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

      {/* Share Your Story CTA */}
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
