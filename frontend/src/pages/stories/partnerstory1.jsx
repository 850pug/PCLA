import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';

const PartnerStory1 = () => {
  const story = {
    name: 'Fraser Health',
    title: 'Building a Trauma-Informed Culture',
    dimension: 'Partners',

    // IMPORTANT: rename your image files to these clean names
    image: '/images/fraserhealth-trip-2.jpg',
    excerpt:
      'This training helped our staff deepen their understanding of trauma and strengthen the compassion we bring to every interaction.',
    tags: ['Partners', 'Collaboration', 'Integrated Care'],

    fullStory: {
      introduction:
        'Fraser Health Delivers Trauma & Resiliency Informed Practice Training for PCLA Staff.',

      paragraph1:
        'In October 2025, Fraser Health Authority’s Trauma & Resiliency Informed Practice (TRIP) team delivered a full-day, in-person training exclusively for Pioneer Community Living Association (PCLA) staff. Fifty of our health care workers from across all PCLA programs attended the session, held off-site, as part of our ongoing commitment to building a compassionate, trauma-informed culture of care.',

      paragraph2:
        'The session, “Connecting Hope and Self-Compassion to Trauma & Resiliency Informed Practices,” was led by Fraser Health’s Mental Health and Substance Use Services Trauma and Resiliency Informed Practice Team, who specialize in supporting organizations to integrate trauma-informed and resilience-based approaches across service delivery.',

      paragraph3: `
        <p>
          Throughout the day, staff explored how trauma and chronic stress affect the brain, body, and behaviour,
          and how mindful self-compassion can help restore balance and connection. The training also focused on
          understanding social and historical trauma, the importance of goal alignment in care relationships,
          and the role of hope as a catalyst for healing and recovery. Participants learned practical tools to:
        </p>

        <ul class="list-disc ml-6 mt-4 space-y-2">
          <li>Recognize trauma responses and support self-regulation for both residents and staff;</li>
          <li>Apply mindfulness and self-compassion practices in moments of stress or crisis;</li>
          <li>Strengthen safety, trust, and collaboration in care environments; and</li>
          <li>Build resiliency through hope-centered, person-directed approaches.</li>
        </ul>
      `,

      paragraph4:
        'This customized training reflects Fraser Health’s recognition of PCLA’s unique role in delivering mental health housing and recovery supports in the community. It also builds on a shared vision between PCLA and Fraser Health to foster healing environments where residents and staff alike can thrive.',

      conclusion:
        'PCLA extends its sincere gratitude to Fraser Health Authority and the TRIP team for facilitating this powerful day of learning, and to our dedicated staff for embracing these principles with openness, compassion, and professionalism. Together, we continue to strengthen our collective capacity to provide trauma-informed, person-centered care for every individual we serve.'
    },

    pullQuote:
      "Connecting Hope and Self-Compassion to Trauma & Resiliency Informed Practices",

    contentImage1: '/images/fraserhealth-trip-6.jpg',
    imageCaption1: 'Finding support and community at PCLA',

    contentImage2: '/images/fraserhealth-trip-3.jpg',
    imageCaption2: 'Building a life in recovery'
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
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
          <Link
            to="/stories"
            className="inline-flex items-center text-white hover:text-[#86a873] transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Stories
          </Link>

          <div className="max-w-4xl text-left">
            <Badge className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white mb-4 text-sm px-4 py-1">
              {story.dimension}
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {story.name}
            </h1>

            <h2 className="text-3xl md:text-4xl text-[#86a873] font-semibold mb-6">
              {story.title}
            </h2>

            <p className="text-2xl text-white italic leading-relaxed">
              "{story.excerpt}"
            </p>
          </div>
        </div>
      </section>

      {/* STORY BODY */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-800 leading-relaxed mb-8">
              {story.fullStory.introduction}
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {story.fullStory.paragraph1}
            </p>

            {/* IMAGE 1 */}
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

            <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Turning Point
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {story.fullStory.paragraph2}
            </p>

            {/* BULLET LIST RENDERING */}
            <div
              className="text-lg text-gray-700 leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: story.fullStory.paragraph3 }}
            />

            {/* IMAGE 2 */}
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

            <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Looking Forward
            </h3>

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

export default PartnerStory1;
