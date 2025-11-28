import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';

const PartnerStory1 = () => {
  const story = {
    name: 'Anita S.',
    title: 'A Path to Wellness',
    dimension: 'Partners',
    image: 'https://images.pexels.com/photos/10599803/pexels-photo-10599803.jpeg?w=600',
    excerpt: 'For the first time, I have healthcare providers who see the whole me—not just my diagnosis.',
    tags: ['Partners', 'Collaboration', 'Integrated Care'],
    fullStory: {
      introduction: "Anita S.'s journey is one of transformation, resilience, and hope. Through the support of PCLA's programs and services, they have found stability, community, and a renewed sense of purpose.",
      paragraph1: "Like many who come to PCLA, their path wasn't linear. There were setbacks and challenges along the way. But with consistent support, access to resources, and the belief that recovery is possible, they began to see change. Small victories turned into larger milestones, and what once seemed impossible became reality.",
      paragraph2: "The turning point came when they realized they weren't alone in their struggle. Being surrounded by peers who understood their experiences, and staff who believed in their potential, created an environment where healing could happen. Access to stable housing provided the foundation, but it was the sense of belonging that truly made the difference.",
      paragraph3: "Today, their life looks dramatically different. They have routines, relationships, and goals for the future. They've reconnected with family members, pursued education or employment opportunities, and most importantly, they've reclaimed their sense of self-worth. Their mental health challenges haven't disappeared, but they now have the tools, support, and confidence to manage them.",
      paragraph4: "Looking back, they can see how far they've come. The person who first walked through PCLA's doors feels like a different lifetime ago. While the journey continues—recovery is ongoing—they now approach each day with hope and confidence. They've learned that having a mental illness doesn't define them, and that with the right support, anything is possible.",
      conclusion: "Stories like this one remind us why PCLA's work is so vital. Every person who walks through our doors carries unique experiences, challenges, and dreams. Our role is to provide the support, resources, and community that make recovery possible. We celebrate each person's journey and honor the courage it takes to choose healing."
    },
    pullQuote: "Recovery isn't about going back to who you were before. It's about discovering who you can become.",
    contentImage1: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200",
    imageCaption1: "Finding support and community at PCLA",
    contentImage2: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200",
    imageCaption2: "Building a life in recovery"
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[80vh] flex items-end justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${story.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 pb-16 w-full">
          <Link to="/stories" className="inline-flex items-center text-white hover:text-[#86a873] transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Stories
          </Link>
          
          <div className="max-w-4xl mx-auto text-left">
            <Badge className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white mb-4 text-sm px-4 py-1">
              {story.dimension}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{story.name}</h1>
            <h2 className="text-3xl md:text-4xl text-[#86a873] font-semibold mb-6">{story.title}</h2>
            <p className="text-2xl text-white italic leading-relaxed">
              "{story.excerpt}"
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-800 leading-relaxed mb-8">
              {story.fullStory.introduction}
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {story.fullStory.paragraph1}
            </p>

            <figure className="my-12">
              <div className="aspect-[16/9] overflow-hidden rounded-3xl border-4 border-gray-200 shadow-xl">
                <img 
                  src={story.contentImage1} 
                  alt="Story illustration 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-center text-sm text-gray-600 mt-4 italic">
                {story.imageCaption1}
              </figcaption>
            </figure>

            <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Turning Point</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {story.fullStory.paragraph2}
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {story.fullStory.paragraph3}
            </p>

            <figure className="my-12">
              <div className="aspect-[16/9] overflow-hidden rounded-3xl border-4 border-gray-200 shadow-xl">
                <img 
                  src={story.contentImage2} 
                  alt="Story illustration 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-center text-sm text-gray-600 mt-4 italic">
                {story.imageCaption2}
              </figcaption>
            </figure>

            <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Looking Forward</h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {story.fullStory.paragraph4}
            </p>

            <blockquote className="border-l-4 border-[#86a873] pl-8 my-12 py-4">
              <p className="text-2xl text-gray-800 italic leading-relaxed">
                {story.pullQuote}
              </p>
            </blockquote>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {story.fullStory.conclusion}
            </p>

            <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t-2 border-gray-200">
              <span className="text-gray-700 font-semibold">Related Topics:</span>
              {story.tags.map((tag, i) => (
                <Badge key={i} variant="outline" className="border-[#86a873] text-[#86a873] text-base px-4 py-1">
                  {tag}
                </Badge>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="py-20 bg-[#336f99] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Every Story Matters</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Behind every statistic is a story. Behind every story is a person finding their way toward recovery, hope, and a life they choose.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/stories">
              <Button size="lg" className="bg-white text-[#336f99] hover:bg-gray-100 px-8 py-6 rounded-full text-lg">
                Read More Stories
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#336f99] px-8 py-6 rounded-full text-lg">
                Support Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerStory1;
