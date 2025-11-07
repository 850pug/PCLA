import { Link } from 'react-router-dom';

export const WireframeHomepage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Wireframe Header */}
      <div className="border-b-4 border-gray-900 bg-gray-100 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 border-2 border-gray-900 flex items-center justify-center">LOGO</div>
            <div className="text-sm font-mono">PCLA - Recovery in Real Life</div>
          </div>
          <div className="flex space-x-6 text-sm font-mono">
            <div>HOME</div>
            <div>ABOUT</div>
            <div>RECOVERY</div>
            <div>PROGRAMS</div>
            <div>IMPACT</div>
            <div>STORIES</div>
            <div className="border-2 border-gray-900 px-4 py-1">GET INVOLVED</div>
            <div className="border-2 border-gray-900 px-4 py-1">CONTACT</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <Link to="/wireframes" className="text-blue-600 hover:underline">← Back to Wireframes Index</Link>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-gray-900">Homepage Wireframe</h1>

        {/* Hero Section */}
        <div className="border-4 border-gray-900 p-12 mb-8 bg-gray-50">
          <div className="text-sm font-mono text-gray-500 mb-4">[HERO IMAGE BACKGROUND]</div>
          <div className="max-w-3xl">
            <div className="text-4xl font-bold mb-4 text-gray-900">MAIN HEADLINE</div>
            <div className="text-4xl font-bold mb-4 text-gray-600">SECONDARY LINE WITH ACCENT</div>
            <div className="w-full h-24 border-2 border-dashed border-gray-400 mb-6 flex items-center justify-center text-gray-500">
              Hero Description Text (2-3 lines)
            </div>
            <div className="flex gap-4">
              <div className="border-2 border-gray-900 px-6 py-3 bg-gray-900 text-white">PRIMARY CTA</div>
              <div className="border-2 border-gray-900 px-6 py-3">SECONDARY CTA</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-4 border-gray-400 p-8 mb-8">
          <div className="text-2xl font-bold mb-6 text-center">SECTION: Impact Statistics</div>
          <div className="grid grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border-2 border-gray-300 p-6 text-center rounded">
                <div className="text-3xl font-bold mb-2">STAT</div>
                <div className="text-sm text-gray-600">Label</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recovery Dimensions */}
        <div className="border-4 border-gray-400 p-8 mb-8">
          <div className="text-2xl font-bold mb-2 text-center">SECTION: The Recovery Dimensions</div>
          <div className="text-center text-gray-600 mb-6">Section description text</div>
          <div className="grid grid-cols-5 gap-4">
            {['Housing', 'Belonging', 'Purpose', 'Health', 'Autonomy'].map((dim, i) => (
              <div key={i} className="border-2 border-gray-300 p-6 text-center rounded">
                <div className="w-12 h-12 border-2 border-gray-900 rounded-full mx-auto mb-3"></div>
                <div className="font-bold mb-2">{dim}</div>
                <div className="text-xs text-gray-500">Description</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Stories */}
        <div className="border-4 border-gray-400 p-8 mb-8">
          <div className="text-2xl font-bold mb-2 text-center">SECTION: Stories of Recovery</div>
          <div className="text-center text-gray-600 mb-6">Section description text</div>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-2 border-gray-300 rounded">
                <div className="h-48 bg-gray-200 border-b-2 border-gray-300 flex items-center justify-center text-gray-500">
                  [IMAGE]
                </div>
                <div className="p-6">
                  <div className="font-bold mb-2">Story Title</div>
                  <div className="text-sm text-gray-600 mb-4">"Quote text here..."</div>
                  <div className="text-sm text-blue-600">Read Full Story →</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-4 border-gray-900 p-12 mb-8 bg-gray-100 text-center">
          <div className="text-3xl font-bold mb-4">SECTION: Call to Action</div>
          <div className="text-gray-600 mb-6">Supporting text about getting involved</div>
          <div className="flex justify-center gap-4">
            <div className="border-2 border-gray-900 px-8 py-4 bg-gray-900 text-white">PRIMARY CTA</div>
            <div className="border-2 border-gray-900 px-8 py-4">SECONDARY CTA</div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-4 border-gray-900 p-8 bg-gray-50">
          <div className="grid grid-cols-5 gap-6 mb-6">
            <div>
              <div className="font-bold mb-3">LOGO</div>
              <div className="text-xs text-gray-600">Organization description</div>
            </div>
            <div>
              <div className="font-bold mb-3">ABOUT</div>
              <div className="text-xs space-y-2 text-gray-600">
                <div>Link 1</div>
                <div>Link 2</div>
                <div>Link 3</div>
              </div>
            </div>
            <div>
              <div className="font-bold mb-3">RECOVERY</div>
              <div className="text-xs space-y-2 text-gray-600">
                <div>Link 1</div>
                <div>Link 2</div>
                <div>Link 3</div>
              </div>
            </div>
            <div>
              <div className="font-bold mb-3">PROGRAMS</div>
              <div className="text-xs space-y-2 text-gray-600">
                <div>Link 1</div>
                <div>Link 2</div>
                <div>Link 3</div>
              </div>
            </div>
            <div>
              <div className="font-bold mb-3">GET INVOLVED</div>
              <div className="text-xs space-y-2 text-gray-600">
                <div>Link 1</div>
                <div>Link 2</div>
                <div>Link 3</div>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-gray-300 pt-4 text-center text-xs text-gray-600">
            © 2024 PCLA | Privacy | Accessibility
          </div>
        </div>
      </div>
    </div>
  );
};

export default WireframeHomepage;
