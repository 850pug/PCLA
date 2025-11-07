import { Link } from 'react-router-dom';

export const WireframePrograms = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b-4 border-gray-900 bg-gray-100 p-4">
        <div className="container mx-auto">
          <div className="text-sm font-mono">NAVIGATION HEADER</div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <Link to="/wireframes" className="text-blue-600 hover:underline">← Back to Wireframes Index</Link>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-gray-900">Programs & Services Wireframe</h1>

        {/* Hero */}
        <div className="border-4 border-gray-900 p-12 mb-8 bg-gray-50">
          <div className="text-sm font-mono text-gray-500 mb-4">[HERO IMAGE]</div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-4">Our Programs & Services</div>
            <div className="text-gray-600">Comprehensive, recovery-oriented programs</div>
          </div>
        </div>

        {/* Intro */}
        <div className="border-4 border-gray-400 p-8 mb-8">
          <div className="text-2xl font-bold mb-4 text-center">SECTION: Supporting Recovery Across Five Dimensions</div>
          <div className="text-center text-gray-600 max-w-3xl mx-auto border-2 border-dashed border-gray-300 p-4">
            Introduction paragraph explaining program philosophy
          </div>
        </div>

        {/* Programs Grid */}
        <div className="border-4 border-gray-400 p-8 mb-8">
          <div className="text-2xl font-bold mb-6">SECTION: Program Cards</div>
          <div className="grid grid-cols-3 gap-6">
            {['Supportive Housing', 'Peer Support', 'Education & Employment', 'Health & Wellness', 'Crisis Support', 'Family Support'].map((program, i) => (
              <div key={i} className="border-2 border-gray-300 rounded">
                <div className="h-40 bg-gray-200 border-b-2 border-gray-300 flex items-center justify-center">
                  [IMAGE]
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 border-2 border-gray-900 rounded mb-3"></div>
                  <div className="font-bold mb-2 text-lg">{program}</div>
                  <div className="text-sm text-blue-600 mb-3">Tagline</div>
                  <div className="text-sm text-gray-600 mb-4">Description paragraph</div>
                  <div className="text-xs font-bold mb-2">Key Features:</div>
                  <div className="space-y-1 text-xs text-gray-600">
                    <div>• Feature 1</div>
                    <div>• Feature 2</div>
                    <div>• Feature 3</div>
                    <div>• Feature 4</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="border-4 border-gray-400 p-8 mb-8">
          <div className="text-2xl font-bold mb-4 text-center">SECTION: Frequently Asked Questions</div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="border-2 border-gray-300 rounded p-4">
                <div className="font-bold mb-2 flex items-center justify-between">
                  <span>Question {i} text goes here?</span>
                  <span className="text-2xl">▼</span>
                </div>
                <div className="text-sm text-gray-600 border-t-2 border-gray-200 pt-3 mt-3">
                  Answer text explaining the question in detail with relevant information
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Staff Spotlight */}
        <div className="border-4 border-gray-400 p-8 mb-8">
          <div className="text-2xl font-bold mb-6">SECTION: Staff Spotlight</div>
          <div className="border-2 border-gray-300 rounded grid grid-cols-2">
            <div className="h-80 bg-gray-200 border-r-2 border-gray-300 flex items-center justify-center">
              [PHOTO]
            </div>
            <div className="p-8">
              <div className="text-xs px-2 py-1 border border-gray-900 inline-block mb-3">STAFF SPOTLIGHT</div>
              <div className="font-bold text-xl mb-2">Staff Name: Role</div>
              <div className="text-sm italic text-gray-700 mb-4">"Quote from staff member about their work..."</div>
              <div className="text-sm text-gray-600 mb-4">Staff bio and background information</div>
              <div className="border-2 border-gray-900 px-4 py-2 inline-block">MEET OUR TEAM →</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="border-4 border-gray-900 p-8 bg-gray-100 text-center">
          <div className="text-2xl font-bold mb-4">SECTION: Ready to Get Started?</div>
          <div className="text-gray-600 mb-6">Contact us to learn more or begin referral</div>
          <div className="flex justify-center gap-4">
            <div className="border-2 border-gray-900 px-6 py-3 bg-gray-900 text-white">CONTACT US</div>
            <div className="border-2 border-gray-900 px-6 py-3">SUCCESS STORIES</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WireframePrograms;
