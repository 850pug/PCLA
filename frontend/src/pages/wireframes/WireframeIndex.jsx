import { Link } from 'react-router-dom';

export const WireframeIndex = () => {
  const wireframes = [
    { name: 'Homepage', path: '/wireframes/homepage' },
    { name: 'About Pages', path: '/wireframes/about' },
    { name: 'Recovery Dimensions', path: '/wireframes/recovery' },
    { name: 'Programs & Services', path: '/wireframes/programs' },
    { name: 'Impact Dashboard', path: '/wireframes/impact' },
    { name: 'Story Hub', path: '/wireframes/stories' },
    { name: 'Get Involved', path: '/wireframes/get-involved' },
    { name: 'Contact', path: '/wireframes/contact' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">PCLA Website Wireframes</h1>
          <p className="text-xl text-gray-600 mb-12">Visual structure and content planning for client review</p>
          
          <div className="bg-white rounded-lg border-2 border-gray-300 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Wireframes:</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {wireframes.map((wireframe, index) => (
                <Link 
                  key={index}
                  to={wireframe.path}
                  className="p-6 border-2 border-gray-300 rounded-lg hover:border-gray-900 hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-2">📄</div>
                  <div className="text-lg font-bold text-gray-900">{wireframe.name}</div>
                  <div className="text-sm text-gray-500 mt-1">View wireframe →</div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">📸 How to use:</h3>
            <ol className="text-gray-700 space-y-2">
              <li>1. Click on any wireframe above to view it</li>
              <li>2. Take screenshots of each wireframe page</li>
              <li>3. Use screenshots in your presentation to the client</li>
              <li>4. Navigate back to <Link to="/" className="text-blue-600 underline">live site</Link> when done</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WireframeIndex;
