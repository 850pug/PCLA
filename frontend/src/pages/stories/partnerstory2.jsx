import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';

const PartnerStory2 = () => {
  const story = {
    name: 'Untapped Awards',
    title: 'Celebrating Faranak Sajed Nia',
    dimension: 'Partners',
    heroImage: '/images/logo-untapped.png',
    excerpt: 'Celebrating Faranak Sajed Nia, winner of the "Diverse & Inclusive Champion Award" at the 10th annual Untapped Workplace Inclusion Awards 2023!',
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

  const Image = ({ src, alt, caption }) => {
    return (
      <figure className="my-12">
        <div className="aspect-[16/9] overflow-hidden rounded-3xl border-4 border-gray-200 shadow-xl">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
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
              Pioneer Community Living Association is thrilled to spotlight the incredible achievements of Faranak Sajed Nia, winner of the "Diverse & Inclusive Champion Award" at the 10th annual Untapped Workplace Inclusion Awards 2023!
            </Paragraph>

            <Paragraph>
              The Untapped Awards recognize and celebrate individuals and organizations leading the way in diversity, inclusion, and accessibility to ensure that everyone can thrive and succeed in the workplace.
            </Paragraph>

            <Image 
              src="/images/top-three-finalists-at-the-2023-Untapped-Awards.webp"
              alt="2023 Untapped Awards"
              caption="2023 Untapped Awards"
            />

            <Paragraph>
              This year\'s event, held on October 13th at PARQ Vancouver, gathered 300 guests from across Canada, including business leaders, service providers, government representatives, industry experts, and advocates who united to celebrate the remarkable progress in advancing disability inclusion in workplaces.
            </Paragraph>

            <Paragraph>
              The Untapped Awards recognize inclusivity advocates in several categories. One of these categories is the individual Workplace Inclusion Champion. This year, PCLA\'s own Faranak Sajed Nia was the recipient of this award.
            </Paragraph>

            <Paragraph>
              Faranak, a Manager of Care at PCLA, stands out as a true Workplace Inclusion Champion, redefining leadership through her commitment to cultural diversity, disability inclusion, and accessibility. At Adrian House and Dominion House Faranak prioritizes inclusivity, comfort, and autonomy for her residents. As an immigrant and woman of colour with a medical background, she brings invaluable richness to her role, infusing daily practices with cultural sensitivity.
            </Paragraph>

            <Quote>
              Faranak Sajed Nia, winner of the "Diverse & Inclusive Champion Award" at the 10th annual Untapped Workplace Inclusion Awards 2023!
            </Quote>

            <Paragraph>
              A heartfelt thank you to the #Untapped Workplace Inclusion Awards for making inclusion a priority. Your platform not only recognizes achievements but fuels the collective mission toward a more inclusive and diverse future. We look forward to celebrating further Inclusivity Champions at the 2024 awards.
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

export default PartnerStory2;
