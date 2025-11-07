import { Link } from 'react-router-dom';

export const WireframeRecovery = () => {
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

        <h1 className="text-4xl font-bold mb-8 text-gray-900">Recovery Dimensions Wireframe</h1>

        {/* Recovery Landing Hero */}
        <div className="border-4 border-gray-900 p-12 mb-8 bg-gray-50">
          <div className="text-sm font-mono text-gray-500 mb-4">[HERO IMAGE]</div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-4">Recovery in Practice</div>
            <div className="text-gray-600">Explore the five dimensions of recovery and discover holistic support</div>
          </div>
        </div>

        {/* What is Recovery */}
        <div className="border-4 border-gray-400 p-8 mb-8">
          <div className="text-2xl font-bold mb-4 text-center">SECTION: What is Recovery?</div>
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-dashed border-gray-300 p-6">
              Explanatory paragraph about recovery with highlighted key terms
            </div>
          </div>
        </div>

        {/* 5 Dimensions Grid */}
        <div className="border-4 border-gray-400 p-8 mb-8">
          <div className="text-2xl font-bold mb-2 text-center">SECTION: The Five Recovery Dimensions</div>
          <div className="text-center text-gray-600 mb-6">Click on any dimension to explore</div>
          <div className="grid grid-cols-3 gap-6">
            {['Housing', 'Belonging', 'Purpose', 'Health', 'Autonomy'].map((dim, i) => (
              <div key={i} className={`border-2 border-gray-300 rounded ${i === 2 ? 'col-span-3 max-w-2xl mx-auto' : ''}`}>
                <div className="h-48 bg-gray-200 border-b-2 border-gray-300 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 border-2 border-gray-900 rounded-full mb-2"></div>
                  <div className="font-bold text-lg">{dim}</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-600 mb-4">Brief description of dimension</div>
                  <div className="text-blue-600 text-sm">Explore {dim} →</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Dimension Page Layout */}
        <div className="border-4 border-gray-900 p-8 mb-8 bg-gray-50">
          <div className="text-2xl font-bold mb-6">LAYOUT: Individual Dimension Page</div>
          
          {/* Dimension Hero */}
          <div className="border-2 border-gray-400 p-8 mb-6 bg-white">
            <div className="text-sm text-gray-500 mb-2">[HERO IMAGE WITH ICON]</div>
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 border-2 border-gray-900 rounded mr-4"></div>
              <div className="text-2xl font-bold">Dimension Name: The Tagline</div>
            </div>
            <div className="text-center text-gray-600">Supporting description</div>
          </div>

          {/* Featured Story */}
          <div className="border-2 border-gray-400 p-6 mb-6 bg-white">
            <div className="text-lg font-bold mb-4">SECTION: Featured Story</div>
            <div className="grid grid-cols-2 gap-6">
              <div className="h-48 bg-gray-200 border border-gray-300 flex items-center justify-center">
                [PHOTO]
              </div>
              <div>
                <div className="text-xs px-2 py-1 border border-gray-300 inline-block mb-3">STORY TAG</div>
                <div className="font-bold mb-3">Story Title</div>
                <div className="text-sm text-gray-600 italic mb-3">"Quote from resident..."</div>
                <div className="text-sm text-gray-600 mb-3">Story excerpt paragraph</div>
                <div className="text-blue-600 text-sm">Read Full Story →</div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="border-2 border-gray-400 p-6 mb-6 bg-gray-900 text-white">
            <div className="text-lg font-bold mb-4 text-center">SECTION: Impact Data</div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center p-4 bg-white/10 rounded">
                  <div className="text-3xl font-bold mb-1">XX%</div>
                  <div className="text-sm">Metric label</div>
                </div>
              ))}
            </div>
          </div>

          {/* Why It Matters */}
          <div className="border-2 border-gray-400 p-6 mb-6 bg-white">
            <div className="text-lg font-bold mb-4 text-center">SECTION: Why This Matters</div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border border-gray-300 p-4 rounded">
                  <div className="w-10 h-10 border border-gray-900 rounded mb-2"></div>
                  <div className="font-bold mb-2">Benefit Title</div>
                  <div className="text-sm text-gray-600">Explanation text</div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Programs */}
          <div className="border-2 border-gray-400 p-6 bg-white">
            <div className="text-lg font-bold mb-4">SECTION: Related Programs</div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-gray-300 p-4 rounded mb-3">
                <div className="font-bold mb-1">Program Name</div>
                <div className="text-sm text-gray-600">Program description</div>
              </div>
            ))}
          </div>
        </div>

        {/* How We Support */}
        <div className="border-4 border-gray-400 p-8 mb-8">
          <div className="text-2xl font-bold mb-6 text-center">SECTION: How PCLA Supports Recovery</div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border-l-4 border-gray-900 pl-6 py-4 bg-gray-50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border-2 border-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    {i}
                  </div>
                  <div>
                    <div className="font-bold mb-2">Step Title</div>
                    <div className="text-sm text-gray-600">Step description explaining the process</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-4 border-gray-900 p-8 bg-gray-100 text-center">
          <div className="text-2xl font-bold mb-4">SECTION: Call to Action</div>
          <div className="text-gray-600 mb-6">See recovery in action</div>
          <div className="border-2 border-gray-900 px-8 py-4 bg-gray-900 text-white inline-block">CTA BUTTON</div>
        </div>
      </div>
    </div>
  );
};

export default WireframeRecovery;
