import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';

const PartnerStory3 = () => {
  const story = {
    name: 'UBC Partner Spotlight',
    title: 'UBC Dental hygiene students at Pioneer House',
    dimension: 'Partners',
    heroImage: '/images/ubc_87334.jpg',
    excerpt: 'For the past 13 years, UBC Dentistry has collaborated with Pioneer Community Living Association (PCLA) to offer the Oral Health Preventative Program.',
    tags: ['Partners', 'Collaboration', 'Integrated Care']
  };

  // REUSABLE CONTENT COMPONENTS
  const Paragraph = ({ children, size = 'normal' }) => {
    const sizeClasses = {
      large: 'text-xl text-gray-800',
      normal: 'text-lg text-gray-700'
    };
    
    return (
      <p className={`${sizeClasses[size]} leading-relaxed mb-8`}>
        {children}
      </p>
    );
  };

  const Image = ({ src, alt, caption, aspectRatio = 'auto' }) => {
    // aspectRatio options: 'auto', '16/9', '4/3', '1/1', '3/4', '9/16'
    const aspectClasses = {
      'auto': '',
      '16/9': 'aspect-[16/9]',
      '4/3': 'aspect-[4/3]',
      '1/1': 'aspect-square',
      '3/4': 'aspect-[3/4]',
      '9/16': 'aspect-[9/16]'
    };

    const containerClass = aspectRatio === 'auto' 
      ? 'overflow-hidden rounded-3xl border-4 border-gray-200 shadow-xl'
      : `${aspectClasses[aspectRatio]} overflow-hidden rounded-3xl border-4 border-gray-200 shadow-xl`;

    const imageClass = aspectRatio === 'auto'
      ? 'w-full h-auto'
      : 'w-full h-full object-cover';

    return (
      <figure className="my-12">
        <div className={containerClass}>
          <img
            src={src}
            alt={alt}
            className={imageClass}
          />
        </div>
        {caption && (
          <figcaption className="text-center text-sm text-gray-600 mt-4 italic">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  };

  const Quote = ({ children }) => {
    return (
      <blockquote className="border-l-4 border-[#86a873] pl-8 my-12 py-4">
        <p className="text-2xl text-gray-800 italic leading-relaxed">
          {children}
        </p>
      </blockquote>
    );
  };

  return (
    <div className="min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${story.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl px-6 text-center">
          <Link
            to="/stories"
            className="inline-flex items-center text-white hover:text-[#86a873] transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Stories
          </Link>

          <div className="flex flex-col items-center justify-center">
            <Badge className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white mb-4 text-sm px-4 py-1">
              {story.dimension}
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {story.name}
            </h1>

            <h2 className="text-3xl md:text-4xl text-[#86a873] font-semibold mb-6">
              {story.title}
            </h2>

            <p className="text-2xl text-white italic leading-relaxed max-w-3xl">
              "{story.excerpt}"
            </p>
          </div>
        </div>
      </section>

      {/* STORY BODY - FLEXIBLE CONTENT BLOCKS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <article className="prose prose-lg max-w-none">
            
            {/* START FLEXIBLE CONTENT - CUT AND PASTE THESE BLOCKS AS NEEDED */}
            
            <Paragraph size="large">
              This year’s UBC Dental hygiene students held a special event at Pioneer House on September 20, 2023. Their dedication and passion for oral health care shone through as they met with our residents and employees, discussing the invaluable support they'll be providing this year.
            </Paragraph>

            <Quote>
              The impact they've made our residents is immeasurable.
            </Quote>

            <Paragraph>
              For the past 13 years, UBC Dentistry has collaborated with Pioneer Community Living Association (PCLA) to offer the Oral Health Preventative Program. This initiative has seen approximately 120 fourth-year students providing care to about 300 patients at various PCLA locations, with approximately $7,000 worth of care provided each year.
            </Paragraph>

            <Image 
              src="/images/two-UBC-dental-students-looking-at-camera.jpg"
              alt="UBC Dental hygiene at Pioneer House"
              caption="UBC Dental hygiene at Pioneer House"
            />

            <Paragraph>
              The program, co-developed by Dr. Leeann Donnelly and PCLA's Carol Anne Russell aims not only to enhance oral hygiene but also to break the stigma surrounding mental health. Through on-site care, the students create a comfortable environment, fostering community engagement and understanding.
            </Paragraph>

            <Paragraph>
              We extend our heartfelt thanks to the UBC dental hygiene students for their unwavering dedication and passion. The impact they've made our residents is immeasurable. 
            </Paragraph>

            {/* END FLEXIBLE CONTENT */}

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t-2 border-gray-200">
              <span className="text-gray-700 font-semibold">Related Topics:</span>
              {story.tags.map((tag, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="border-[#86a873] text-[#86a873] text-base px-4 py-1"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-[#336f99] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Every Story Matters</h2>

          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Behind every statistic is a story. Behind every story is a person finding their way toward recovery,
            hope, and a life they choose.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/stories">
              <Button className="bg-white text-[#336f99] hover:bg-gray-100 px-8 py-6 rounded-full text-lg">
                Read More Stories
              </Button>
            </Link>

            <Link to="/get-involved">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#336f99] px-8 py-6 rounded-full text-lg"
              >
                Support Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerStory3;
