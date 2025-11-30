import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';

const PartnerStory4 = () => {
  const story = {
    name: 'BCIT Partner Spotlight',
    title: "BCIT nursing program students at Miller's Way",
    dimension: ['Partners', 'Health'],
    heroImage: '/images/british-columbia-institute-of-technology-bcit-vector-logo.png',
    excerpt: 'The relationship with the BCIT Nursing program exposes future nurses to what successful in-community supports can look like for people living with mental illness.',
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
             BCIT’s Bachelor of Science in Nursing (BSN) Program is a three-year program exposing students to the latest technology and practice-based experiences. PCLA has been partnered with BCIT for over ten years to provide an alternate clinical experience for students interested in psychiatry. Through this partnership, students supplement their experience on the psychiatric ward with the community, residential services provided by PCLA at Miller’s Way.
            </Paragraph>

            <Paragraph>
             Antonella (Toni) Jones is a Nursing Instructor at BCIT and an integral part of the PCLA-BCIT partnership. As the course lead for the last ten years, Toni has connected over 400 nursing students with Miller’s Way. When asked what motivated this relationship, Toni said:
            </Paragraph>

            <Quote>
              “The program at BCIT is a three-year accelerated program. Students go through 9 terms, 3 terms a year. In second year, term 4, students are exposed to six weeks of psychiatry… Unfortunately, we have eight students in a clinical group, and the psych ward only permits six students at a time. Historically, this meant that 2 students would have to stay home. The course leader at the time was seeking out alternate clinical experiences for students and they found Miller’s Way about ten years ago. Because of Miller’s Way, students not only see the psychiatric ward, but they also see how people [with mental illnesses] can live in community with the right supports.”
            </Quote>

            <Paragraph>
              Toni’s commitment to this program was obvious. She acknowledged the need for this relationship as well as the benefits:
            </Paragraph>

            <Quote>
               "there is often a fear and nervousness amongst students when they start at Miller’s Way. They don’t know what mental illness looks like; they don’t realize that individuals can live successfully with the right support. They come away feeling informed, confident, and emotional.” 
            </Quote>

            <Paragraph>
              According to Toni, there have been many success stories from this partnership. One that was particularly emotional was the following:
            </Paragraph>

            <Quote>
               “Our students develop relationships with the residents. They sit and talk with them, scrapbook, carry out crafts and other activities. One of our students was speaking to a resident at Miller’s Way and learnt that they had been homeless at one point and was a regular at the food bank and benefited from sandwich programs. When they arrived at Miller’s Way, this individual decided that they wanted to give back and make sandwiches and feed the homeless once a month. This became a group initiative at Miller’s Way. By chance, the student’s mum happened to be part of the committee for the Courage to Come Back Awards. And the student nominated this individual for an Award. This resident came to the awards gala and was celebrated.” 
            </Quote>

            <Image 
              src="/images/two-British-Columbia-Institute-of-Technology-nursing-student-volunteers-serving-food.webp"
              alt="BCIT Nurses distributing food and clothing on the Downtown Eastside alongside PCLA residents."
              caption="BCIT Nurses distributing food and clothing on the Downtown Eastside alongside PCLA residents."
            />

            <Paragraph>
              This emotional story is an example of the successes at Miller’s Way. These residents are incredible people with impactful stories, goals, and ambitions. The relationship with the BCIT Nursing program exposes future nurses to what successful in-community supports can look like for people living with mental illness. We hope to continue this relationship for decades to come. 
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

export default PartnerStory4;
