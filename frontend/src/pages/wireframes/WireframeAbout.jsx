import { Link } from 'react-router-dom';

export const WireframeAbout = () => {
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

        <h1 className="text-4xl font-bold mb-8 text-gray-900">About Pages Wireframe</h1>

        {/* Page Hero */}
        <div className="border-4 border-gray-900 p-12 mb-8 bg-gray-50">
          <div className="text-sm font-mono text-gray-500 mb-4">[HERO IMAGE BACKGROUND]</div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-4">PAGE TITLE (Our Mission)</div>
            <div className="text-gray-600">Subtitle or tagline</div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="border-4 border-gray-400 p-8 mb-8">
          <div className="text-2xl font-bold mb-2 text-center">SECTION: Who We Are</div>
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-dashed border-gray-300 p-6 mb-4">
              Main mission statement paragraph with key highlighted terms
            </div>
            <div className="border-2 border-gray-300 p-8 rounded">
              <div className="text-gray-600 mb-4">Supporting paragraph 1</div>
              <div className="text-gray-600">Supporting paragraph 2</div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="border-4 border-gray-400 p-8 mb-8">
          <div className="text-2xl font-bold mb-6 text-center">SECTION: Our Values</div>
          <div className="grid grid-cols-2 gap-6">
            {['Mission', 'Vision', 'Approach', 'Impact'].map((value, i) => (
              <div key={i} className="border-2 border-gray-300 p-6 rounded">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-2 border-gray-900 rounded flex-shrink-0"></div>
                  <div>
                    <div className="font-bold mb-2 text-lg">{value}</div>
                    <div className="text-sm text-gray-600">Value description text explaining this principle</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unique Position */}
        <div className="border-4 border-gray-400 p-8 mb-8">
          <div className="text-2xl font-bold mb-2 text-center">SECTION: Our Unique Position</div>
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-gray-900 bg-gray-100 p-8 rounded">
              <div className="text-gray-700 mb-4">Key differentiator paragraph 1</div>
              <div className="text-gray-700 mb-4">Key differentiator paragraph 2</div>
              <div className="text-gray-700">Key differentiator paragraph 3</div>
            </div>
          </div>
        </div>

        {/* Team Layout */}
        <div className="border-4 border-gray-400 p-8 mb-8">
          <div className="text-2xl font-bold mb-6">SECTION: Team Page Layout</div>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="border-2 border-gray-300 rounded">
                <div className="h-48 bg-gray-200 border-b-2 border-gray-300 flex items-center justify-center">
                  [PHOTO]
                </div>
                <div className="p-4">
                  <div className="font-bold">Name</div>
                  <div className="text-sm text-gray-600 mb-2">Role/Title</div>
                  <div className="text-xs text-gray-500">Bio text snippet...</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="border-4 border-gray-400 p-8 mb-8">
          <div className="text-2xl font-bold mb-6">SECTION: Partners Page Layout</div>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="border-2 border-gray-300 p-6 rounded">
                <div className="h-24 border-2 border-gray-200 mb-4 flex items-center justify-center">
                  [LOGO]
                </div>
                <div className="text-xs px-2 py-1 border border-gray-300 inline-block mb-3">Category</div>
                <div className="font-bold mb-2">Partner Name</div>
                <div className="text-sm text-gray-600">Partner description text</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-4 border-gray-900 p-8 bg-gray-100 text-center">
          <div className="text-2xl font-bold mb-4">SECTION: Call to Action</div>
          <div className="text-gray-600 mb-6">Supporting text</div>
          <div className="flex justify-center gap-4">
            <div className="border-2 border-gray-900 px-6 py-3 bg-gray-900 text-white">PRIMARY CTA</div>
            <div className="border-2 border-gray-900 px-6 py-3">SECONDARY CTA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WireframeAbout;
