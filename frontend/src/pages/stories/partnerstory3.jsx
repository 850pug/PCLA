import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';

const PartnerStory3 = () => {
  const story = {
    name: 'UBC Partner Spotlight',
    title: 'UBC Dental hygiene students at Pioneer House',
    dimension: 'Partners',
    heroImage: '/images/UBC-dentistry-instructor-showing-document-to-student.webp',
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
              UBC Dentistry partners with Pioneer Community Living Association (PCLA) to offer the Oral Health Preventative Program where UBC dental hygiene students provide care to residents of PCLA. This program has seen approximately 120 fourth-year students provide care to about 300 patients at various PCLA locations with approximately $7,000 of care provided each year for the past 13 years.
            </Paragraph>

            <Quote>
              “It was a good experience; not painful or uncomfortable. It got everything done and I didn’t need any further dental work.  They [the dental hygienist students] gave a lot of good advice about flossing, Toothbrushes, electric toothbrushes, and mouthwash.” 
              – Rick, PCLA Resident 
            </Quote>

            <Image 
              src="/images/ubc-dentistry-student-working-on-man's-teeth.webp
              alt="PCLA Resident receives care from UBC dental hygiene student"
              caption="PCLA Resident receives care from UBC dental hygiene student"
            />

            <Paragraph>
              Dr. Leeann Donnelly developed this program alongside PCLA’s Carol Anne Russell in hopes of mitigating the stigma around mental health whilst increasing oral hygiene amongst residents. When interviewed in 2014, Leeann spoke passionately about the program saying:
            </Paragraph>

            <Quote>
              “I think one of the biggest successes we have with this partnership is the experience that our students get in working with people with mental illness and breaking the stigma and stereotypes and societies held beliefs around what the mental illness is…. It also helps us understand (as scholars, researchers, students, and  faculty members) some of the issues that go on in the community and understand better people with mental illness.”
            </Quote>

            <Image 
              src="/images/two-UBC-dental-students-looking-at-camera.jpg"
              alt="UBC Dental hygiene at Pioneer House"
              caption="UBC Dental hygiene at Pioneer House"
            />

            <Paragraph>
              When we spoke with Leeann in 2023, her ongoing passion was clear. When asked what some of the biggest learnings from the program have been, Leeann discussed the nuances of working with individuals living with mental illness.
            </Paragraph>

            <Quote>
              “When we first started the program, we decided we would come on-site and conduct the dental exams, but that we would have the residents go to Douglas College for the full clinic portion. We quickly realized this would not work. The first six residents did not show up at Douglas College for the clinic. We realized we were taking residents out of their comfort zone. It was an important learning for us. We then shifted to providing care onsite which worked wonderfully.” 
            </Quote>

            <Quote>
              “We do get some fear from residents with every new batch of students, but within two-three weeks they are comfortable and no longer afraid of the students. The students spend a lot of time interacting. The purpose of this course is community engagement and understanding mental illness.”
            </Quote>

            <Image 
              src="/images/four-ubc-dentistry-students-looking-at-information-binder.webp"
              alt="UBC Dentistry students at Pioneer House"
              caption="UBC Dentistry students at Pioneer House"
            />

            <Paragraph>
              In addition to key learnings, Leeann spoke about the many successes the students and residents have gained from this program. One that particularly stood out for her was the following: 
            </Paragraph>

            <Quote>
               “One that comes to mind is of a student who left PCLA one day feeling incredibly disheartened. This student learnt that many PCLA residents do not attend their off-site dental appointments because they feel judged and uncomfortable. They learnt that some dental offices discriminate against disability insurance and do not always accept it. This declining of insurance left individuals feeling embarrassed and reluctant to return. This student committed that they would advocate for disability insurance at any office they worked at in the future. They also said they would reach out to organizations like PCLA and provide information about their inclusive approach and invite them to come to their clinic.”
            </Quote>

            <Paragraph>
              This story of advocacy is one of many. The UBC and PCLA partnership has had a real and lasting impact on students for over a decade. Leann and the PCLA team are hopeful that the next generation of dental professionals are better equipped to support those living with mental illness. The program has been equally impactful for PCLA residents. Not only has hygiene been prioritized on site, but residents are also increasingly comfortable with medical practitioners. 
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
