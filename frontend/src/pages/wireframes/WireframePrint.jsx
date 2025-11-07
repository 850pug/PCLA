import React from 'react';

export const WireframePrint = () => {
  return (
    <div className="bg-white">
      {/* Print Instructions */}
      <div className="no-print bg-blue-50 border-2 border-blue-300 p-6 m-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">📄 How to Create PDF:</h2>
        <ol className="space-y-2 text-lg">
          <li>1. Press <kbd className="px-2 py-1 bg-gray-200 rounded">Ctrl+P</kbd> (Windows) or <kbd className="px-2 py-1 bg-gray-200 rounded">Cmd+P</kbd> (Mac)</li>
          <li>2. Select "Save as PDF" or "Microsoft Print to PDF" as destination</li>
          <li>3. Adjust settings: Select "All pages", Margins: "None", Background graphics: "ON"</li>
          <li>4. Click "Save" and choose where to save your PDF</li>
        </ol>
        <div className="mt-4 p-4 bg-white rounded border-2 border-blue-400">
          <p className="font-bold text-blue-900">✓ PDF will include working internal links for easy navigation</p>
        </div>
      </div>

      {/* Cover Page */}
      <div className="page-break-after p-12 text-center border-b-4 border-gray-900">
        <div className="py-20">
          <div className="text-6xl font-bold mb-6 text-gray-900">PCLA Website</div>
          <div className="text-4xl font-bold mb-12 text-gray-600">Wireframes & Site Structure</div>
          <div className="text-2xl text-gray-600 mb-8">Visual Planning Document</div>
          <div className="text-xl text-gray-500">Created: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="page-break-after p-12">
        <h1 className="text-5xl font-bold mb-8 text-gray-900">Table of Contents</h1>
        <div className="space-y-3 text-xl">
          <div><a href="#overview" className="text-blue-600 hover:underline">1. Project Overview</a></div>
          <div><a href="#homepage" className="text-blue-600 hover:underline">2. Homepage Layout</a></div>
          <div><a href="#about" className="text-blue-600 hover:underline">3. About Pages</a></div>
          <div className="pl-8 text-lg space-y-2 text-gray-700">
            <div>• Mission & Vision</div>
            <div>• Recovery Framework</div>
            <div>• Team Directory</div>
            <div>• Partner Network</div>
          </div>
          <div><a href="#recovery" className="text-blue-600 hover:underline">4. Recovery Dimensions</a></div>
          <div className="pl-8 text-lg space-y-2 text-gray-700">
            <div>• Recovery Hub Page</div>
            <div>• Individual Dimension Pages (5)</div>
          </div>
          <div><a href="#programs" className="text-blue-600 hover:underline">5. Programs & Services</a></div>
          <div><a href="#impact" className="text-blue-600 hover:underline">6. Impact Dashboard</a></div>
          <div><a href="#stories" className="text-blue-600 hover:underline">7. Story Hub</a></div>
          <div><a href="#getinvolved" className="text-blue-600 hover:underline">8. Get Involved</a></div>
          <div><a href="#contact" className="text-blue-600 hover:underline">9. Contact & Resources</a></div>
        </div>
      </div>

      {/* Overview Page */}
      <div id="overview" className="page-break-before p-12">
        <h1 className="text-5xl font-bold mb-8 text-gray-900">1. Project Overview</h1>
        
        <div className="border-4 border-gray-900 p-8 mb-8 bg-gray-50">
          <h2 className="text-3xl font-bold mb-6">Website Purpose</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>PCLA website serves as Canada's reference point for recovery-oriented supportive housing, providing information, resources, and pathways to support for individuals living with serious and persistent mental illness.</p>
          </div>
        </div>

        <div className="border-4 border-gray-400 p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Key Website Goals</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="border-2 border-gray-300 p-6 rounded">
              <h3 className="text-xl font-bold mb-3">Inform</h3>
              <p className="text-gray-700">Educate visitors about recovery-oriented practice and the five recovery dimensions</p>
            </div>
            <div className="border-2 border-gray-300 p-6 rounded">
              <h3 className="text-xl font-bold mb-3">Inspire</h3>
              <p className="text-gray-700">Share authentic recovery stories that demonstrate hope and possibility</p>
            </div>
            <div className="border-2 border-gray-300 p-6 rounded">
              <h3 className="text-xl font-bold mb-3">Connect</h3>
              <p className="text-gray-700">Link individuals to services, programs, and support networks</p>
            </div>
            <div className="border-2 border-gray-300 p-6 rounded">
              <h3 className="text-xl font-bold mb-3">Advocate</h3>
              <p className="text-gray-700">Influence policy and practice through data-driven insights and storytelling</p>
            </div>
          </div>
        </div>

        <div className="border-4 border-gray-400 p-8">
          <h2 className="text-3xl font-bold mb-6">Target Audiences</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span>Individuals seeking mental health support and recovery services</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span>Family members and caregivers of individuals with mental illness</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span>Healthcare professionals and service providers</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span>Policymakers and funders in mental health sector</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span>Researchers and academic partners</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span>Potential donors, volunteers, and community partners</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Homepage Wireframe */}
      <div id="homepage" className="page-break-before p-12">
        <h1 className="text-5xl font-bold mb-8 text-gray-900">2. Homepage Layout</h1>

        {/* Header */}
        <div className="border-4 border-gray-900 bg-gray-100 p-4 mb-8">
          <div className="text-sm font-mono mb-2">GLOBAL HEADER (Appears on all pages)</div>
          <div className="border-2 border-gray-400 bg-gray-200 p-3 mb-2">
            <div className="flex justify-between text-xs">
              <div>Top Bar: Contact Info (Phone, Email)</div>
              <div>Resources | Crisis Support 24/7</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 border-2 border-gray-900">LOGO</div>
              <div className="text-sm font-mono">PCLA</div>
            </div>
            <div className="flex space-x-4 text-xs font-mono">
              <div>HOME</div>
              <div>ABOUT ▼</div>
              <div>RECOVERY ▼</div>
              <div>PROGRAMS</div>
              <div>IMPACT</div>
              <div>STORIES</div>
              <div className="border border-gray-900 px-2">GET INVOLVED</div>
              <div className="border border-gray-900 px-2">CONTACT</div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="border-4 border-gray-900 p-12 mb-8 bg-gray-50">
          <div className="text-xs font-mono text-gray-500 mb-4">[FULL-WIDTH HERO IMAGE]</div>
          <div className="max-w-3xl">
            <div className="text-3xl font-bold mb-3">Supporting individuals,</div>
            <div className="text-3xl font-bold mb-4 text-gray-600">strengthening communities</div>
            <div className="border-2 border-dashed border-gray-400 p-4 mb-6 text-sm">
              Canada's recognized reference point for recovery-oriented supportive housing for individuals living with serious and persistent mental illness.
            </div>
            <div className="flex gap-3">
              <div className="border-2 border-gray-900 px-4 py-2 bg-gray-900 text-white text-sm">EXPLORE RECOVERY</div>
              <div className="border-2 border-gray-900 px-4 py-2 text-sm">OUR MISSION</div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="border-4 border-gray-400 p-8 mb-8">
          <div className="text-xl font-bold mb-6 text-center">SECTION: Four Decades of Service</div>
          <div className="grid grid-cols-4 gap-4">
            {['40+ Years', '7 Programs', '200+ Lives', '50+ Staff'].map((stat, i) => (
              <div key={i} className="border-2 border-gray-300 p-6 text-center rounded">
                <div className="text-4xl font-bold mb-2 text-gray-900">{stat.split(' ')[0]}</div>
                <div className="text-sm text-gray-600">{stat.split(' ').slice(1).join(' ')}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recovery Dimensions */}
        <div className="border-4 border-gray-400 p-8 mb-8">
          <div className="text-xl font-bold mb-2 text-center">SECTION: The Recovery Dimensions</div>
          <div className="text-center text-sm text-gray-600 mb-6">Framework supporting recovery across five essential life dimensions</div>
          <div className="grid grid-cols-5 gap-4">
            {['Housing', 'Belonging', 'Purpose', 'Health', 'Autonomy'].map((dim, i) => (
              <div key={i} className="border-2 border-gray-300 p-4 text-center rounded hover:shadow-lg">
                <div className="w-12 h-12 border-2 border-gray-900 rounded-full mx-auto mb-2"></div>
                <div className="font-bold text-sm mb-1">{dim}</div>
                <div className="text-xs text-gray-500">Description</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Stories */}
        <div className="border-4 border-gray-400 p-8 mb-8">
          <div className="text-xl font-bold mb-2 text-center">SECTION: Stories of Recovery</div>
          <div className="text-center text-sm text-gray-600 mb-6">Real stories from individuals on their recovery journey</div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-2 border-gray-300 rounded">
                <div className="h-32 bg-gray-200 border-b-2 border-gray-300 flex items-center justify-center text-xs text-gray-500">
                  [STORY IMAGE]
                </div>
                <div className="p-4">
                  <div className="text-xs border border-gray-900 inline-block px-2 py-1 mb-2">DIMENSION TAG</div>
                  <div className="font-bold text-sm mb-2">Name</div>
                  <div className="text-xs text-gray-600 italic mb-3">"Quote from story..."</div>
                  <div className="text-xs text-blue-600">Read Story →</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-4 border-gray-900 p-8 bg-gray-100 text-center mb-8">
          <div className="text-2xl font-bold mb-4">Every action makes a difference</div>
          <div className="text-sm text-gray-600 mb-6">Your support helps provide recovery-oriented supportive housing and pathways to independence</div>
          <div className="flex justify-center gap-4">
            <div className="border-2 border-gray-900 px-6 py-3 bg-gray-900 text-white">GET INVOLVED</div>
            <div className="border-2 border-gray-900 px-6 py-3">CONTACT US</div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-4 border-gray-900 p-6 bg-gray-50">
          <div className="text-xs font-mono mb-4">GLOBAL FOOTER (Appears on all pages)</div>
          <div className="grid grid-cols-5 gap-4 mb-4 text-xs">
            <div>
              <div className="font-bold mb-2">LOGO & INFO</div>
              <div className="text-gray-600 space-y-1">
                <div>Mission statement</div>
                <div>Social links</div>
              </div>
            </div>
            <div>
              <div className="font-bold mb-2">ABOUT</div>
              <div className="text-gray-600 space-y-1">
                <div>Links...</div>
              </div>
            </div>
            <div>
              <div className="font-bold mb-2">RECOVERY</div>
              <div className="text-gray-600 space-y-1">
                <div>Dimensions...</div>
              </div>
            </div>
            <div>
              <div className="font-bold mb-2">PROGRAMS</div>
              <div className="text-gray-600 space-y-1">
                <div>Links...</div>
              </div>
            </div>
            <div>
              <div className="font-bold mb-2">GET INVOLVED</div>
              <div className="text-gray-600 space-y-1">
                <div>Links...</div>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-gray-300 pt-3 text-center text-xs">
            Contact Info | Crisis Resources | © 2024 PCLA | Privacy | Accessibility
          </div>
        </div>
      </div>

      {/* About Pages */}
      <div id="about" className="page-break-before p-12">
        <h1 className="text-5xl font-bold mb-8 text-gray-900">3. About Pages</h1>
        
        <div className="border-4 border-gray-900 p-8 mb-8 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">About Section Overview</h2>
          <p className="text-gray-700 mb-4">The About section includes 4 key pages that tell PCLA's story:</p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Mission & Vision:</strong> Who we are and what drives us</li>
            <li>• <strong>Recovery Framework:</strong> Our 5-dimension approach explained</li>
            <li>• <strong>Team:</strong> Meet the dedicated professionals</li>
            <li>• <strong>Partners:</strong> Collaborating organizations and supporters</li>
          </ul>
        </div>

        {/* Mission Page Layout */}
        <div className="border-4 border-gray-400 p-8 mb-8">
          <h3 className="text-xl font-bold mb-6">Mission & Vision Page Layout</h3>
          
          <div className="border-2 border-gray-900 p-6 mb-4 bg-gray-50">
            <div className="text-xs text-gray-500 mb-2">[PAGE HERO]</div>
            <div className="text-2xl font-bold text-center">Our Mission</div>
          </div>

          <div className="border-2 border-gray-300 p-6 mb-4">
            <div className="font-bold mb-3">SECTION: Who We Are</div>
            <div className="border-2 border-dashed border-gray-300 p-4 text-sm text-gray-600">
              Mission statement with highlighted key terms
            </div>
          </div>

          <div className="border-2 border-gray-300 p-6 mb-4">
            <div className="font-bold mb-3">SECTION: Our Values (4 cards)</div>
            <div className="grid grid-cols-2 gap-4">
              {['Mission', 'Vision', 'Approach', 'Impact'].map((v, i) => (
                <div key={i} className="border border-gray-300 p-3 rounded">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 border border-gray-900"></div>
                    <div>
                      <div className="font-bold text-sm">{v}</div>
                      <div className="text-xs text-gray-600">Description</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-gray-900 p-6 bg-gray-100">
            <div className="font-bold mb-2">SECTION: Our Unique Position</div>
            <div className="text-sm text-gray-600">Key differentiators content</div>
          </div>
        </div>

        {/* Team Page Layout */}
        <div className="border-4 border-gray-400 p-8">
          <h3 className="text-xl font-bold mb-6">Team Page Layout</h3>
          
          <div className="border-2 border-gray-300 p-4 mb-4">
            <div className="font-bold mb-3">SECTION: Staff Highlights (4 stats)</div>
            <div className="grid grid-cols-4 gap-3 text-center">
              {['85%', '15+ yrs', '100%', '24/7'].map((stat, i) => (
                <div key={i} className="border border-gray-300 p-3 rounded">
                  <div className="text-2xl font-bold">{stat}</div>
                  <div className="text-xs">Label</div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-gray-300 p-4">
            <div className="font-bold mb-3">SECTION: Leadership Team (6 members)</div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border border-gray-300 rounded">
                  <div className="h-24 bg-gray-200 border-b border-gray-300 flex items-center justify-center text-xs">
                    [PHOTO]
                  </div>
                  <div className="p-3 text-xs">
                    <div className="font-bold">Name</div>
                    <div className="text-gray-600">Title</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recovery Section */}
      <div id="recovery" className="page-break-before p-12">
        <h1 className="text-5xl font-bold mb-8 text-gray-900">4. Recovery Dimensions</h1>
        
        <div className="border-4 border-gray-900 p-8 mb-8 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Recovery Section Overview</h2>
          <p className="text-gray-700 mb-4">The heart of the PCLA website - explaining recovery-oriented practice:</p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Recovery Hub:</strong> Main landing page explaining the 5 dimensions</li>
            <li>• <strong>Housing:</strong> Foundation dimension - safe, stable housing</li>
            <li>• <strong>Belonging:</strong> Connection to community and relationships</li>
            <li>• <strong>Purpose:</strong> Meaningful activities and life goals</li>
            <li>• <strong>Health:</strong> Physical and mental wellness</li>
            <li>• <strong>Autonomy:</strong> Independence and self-determination</li>
          </ul>
        </div>

        {/* Recovery Hub Layout */}
        <div className="border-4 border-gray-400 p-8 mb-8">
          <h3 className="text-xl font-bold mb-6">Recovery Hub Page Layout</h3>
          
          <div className="border-2 border-gray-900 p-4 mb-4 bg-gray-50">
            <div className="text-xs text-gray-500 mb-2">[PAGE HERO]</div>
            <div className="text-2xl font-bold text-center">Recovery in Practice</div>
          </div>

          <div className="border-2 border-gray-300 p-4 mb-4">
            <div className="font-bold mb-2">SECTION: What is Recovery?</div>
            <div className="text-sm text-gray-600 border border-dashed border-gray-300 p-3">
              Explanation of recovery as personal journey beyond symptom management
            </div>
          </div>

          <div className="border-2 border-gray-300 p-4 mb-4">
            <div className="font-bold mb-3">SECTION: Interactive Dimensions (5 clickable cards)</div>
            <div className="grid grid-cols-3 gap-3">
              {['Housing', 'Belonging', 'Purpose', 'Health', 'Autonomy'].map((dim, i) => (
                <div key={i} className={`border border-gray-300 rounded text-center p-3 ${i === 2 ? 'col-span-3' : ''}`}>
                  <div className="h-24 bg-gray-100 border-b border-gray-300 flex items-center justify-center">
                    [IMAGE + ICON]
                  </div>
                  <div className="p-2">
                    <div className="font-bold text-sm">{dim}</div>
                    <div className="text-xs text-gray-600">Brief description</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-gray-300 p-4">
            <div className="font-bold mb-3">SECTION: How PCLA Supports Recovery (4 steps)</div>
            <div className="space-y-2">
              {['Assessment', 'Support Plans', 'Monitoring', 'Integration'].map((step, i) => (
                <div key={i} className="border-l-4 border-gray-900 pl-4 py-2 bg-gray-50 flex items-start gap-3">
                  <div className="w-8 h-8 border-2 border-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{step}</div>
                    <div className="text-xs text-gray-600">Description</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Individual Dimension Page Template */}
        <div className="border-4 border-gray-400 p-8">
          <h3 className="text-xl font-bold mb-6">Individual Dimension Page Template</h3>
          <div className="text-sm text-gray-600 mb-4">(Same structure for all 5 dimensions)</div>
          
          <div className="space-y-4">
            <div className="border-2 border-gray-900 p-4 bg-gray-50">
              <div className="text-xs text-gray-500 mb-2">[DIMENSION HERO with icon]</div>
              <div className="font-bold">Dimension Name: Tagline</div>
            </div>

            <div className="border-2 border-gray-300 p-4">
              <div className="font-bold text-sm mb-2">SECTION: Featured Story (2-column)</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-24 bg-gray-200 flex items-center justify-center text-xs">[PHOTO]</div>
                <div className="text-xs">
                  <div className="font-bold mb-1">Story Title</div>
                  <div className="text-gray-600 italic">"Quote..."</div>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-900 p-4 bg-gray-900 text-white">
              <div className="font-bold text-sm mb-2">SECTION: Impact Data (4 stats)</div>
              <div className="grid grid-cols-4 gap-2 text-center">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white/10 p-2 rounded">
                    <div className="font-bold">XX%</div>
                    <div className="text-xs">Metric</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 border-gray-300 p-4">
              <div className="font-bold text-sm mb-2">SECTION: Why It Matters (4 cards)</div>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="border border-gray-300 p-2 rounded text-xs">
                    <div className="font-bold mb-1">Benefit</div>
                    <div className="text-gray-600">Description</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 border-gray-300 p-4">
              <div className="font-bold text-sm mb-2">SECTION: Related Programs</div>
              <div className="text-xs text-gray-600">List of 2-3 programs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div id="programs" className="page-break-before p-12">
        <h1 className="text-5xl font-bold mb-8 text-gray-900">5. Programs & Services</h1>
        
        <div className="border-4 border-gray-400 p-8 mb-8">
          <h3 className="text-xl font-bold mb-6">Programs Page Layout</h3>
          
          <div className="border-2 border-gray-900 p-4 mb-4 bg-gray-50">
            <div className="text-xs text-gray-500 mb-2">[PAGE HERO]</div>
            <div className="font-bold text-center">Our Programs & Services</div>
          </div>

          <div className="border-2 border-gray-300 p-4 mb-4">
            <div className="font-bold mb-3">SECTION: Program Cards (6 programs)</div>
            <div className="grid grid-cols-3 gap-3">
              {['Supportive Housing', 'Peer Support', 'Education & Employment', 'Health & Wellness', 'Crisis Support', 'Family Support'].map((prog, i) => (
                <div key={i} className="border border-gray-300 rounded">
                  <div className="h-20 bg-gray-200 border-b border-gray-300 flex items-center justify-center text-xs">
                    [IMAGE]
                  </div>
                  <div className="p-3 text-xs">
                    <div className="w-8 h-8 border border-gray-900 mb-2"></div>
                    <div className="font-bold mb-1">{prog}</div>
                    <div className="text-gray-600 text-xs mb-2">Tagline</div>
                    <div className="text-gray-600 mb-2">Description</div>
                    <div className="font-bold text-xs mb-1">Features:</div>
                    <div className="text-xs space-y-1">
                      <div>• Feature 1</div>
                      <div>• Feature 2</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-gray-300 p-4">
            <div className="font-bold mb-3">SECTION: FAQ (Accordion style)</div>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="border border-gray-300 p-3 rounded">
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-sm">Question {i}?</div>
                    <div className="text-xl">▼</div>
                  </div>
                  <div className="text-xs text-gray-600 mt-2 pt-2 border-t border-gray-200">
                    Answer content here...
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          .page-break-before {
            page-break-before: always;
          }
          .page-break-after {
            page-break-after: always;
          }
          @page {
            margin: 0.5in;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          a {
            color: #2563eb;
            text-decoration: underline;
          }
        }
      `}</style>
    </div>
  );
};

export default WireframePrint;
