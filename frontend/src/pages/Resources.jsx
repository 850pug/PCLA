import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Download, BookOpen, Newspaper } from 'lucide-react';

export const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: 'Recovery Briefs',
      description: 'Quarterly summaries of key recovery themes, outcomes, and insights from our programs',
      items: [
        { name: 'Q4 2024 Recovery Brief', size: '2.4 MB' },
        { name: 'Q3 2024 Recovery Brief', size: '2.1 MB' },
        { name: 'Q2 2024 Recovery Brief', size: '2.3 MB' }
      ]
    },
    {
      icon: BookOpen,
      title: 'Guides & Toolkits',
      description: 'Practical resources for individuals, families, and service providers',
      items: [
        { name: 'Family Support Guide', size: '1.8 MB' },
        { name: 'Self-Advocacy Toolkit', size: '1.5 MB' },
        { name: 'Recovery Planning Workbook', size: '3.2 MB' }
      ]
    },
    {
      icon: Newspaper,
      title: 'Research & Publications',
      description: 'Academic papers and research collaborations featuring PCLA data and insights',
      items: [
        { name: 'Recovery Dimensions Framework Study', size: '4.1 MB' },
        { name: 'Supportive Housing Outcomes Report', size: '3.7 MB' },
        { name: 'Lived Experience Research Brief', size: '2.9 MB' }
      ]
    },
    {
      icon: FileText,
      title: 'Media Kit',
      description: 'Logos, brand guidelines, and media resources for partners and press',
      items: [
        { name: 'PCLA Logo Package', size: '5.2 MB' },
        { name: 'Brand Guidelines', size: '1.2 MB' },
        { name: 'Media Fact Sheet', size: '0.8 MB' }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1530043123514-c01b94ef483b?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Resources & Policy</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Evidence-based insights and practical tools for recovery-oriented practice
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="border-2 rounded-3xl overflow-hidden hover:shadow-2xl transition-all">
                  <CardContent className="p-10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-[#336f99] flex items-center justify-center mr-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">{category.description}</p>
                    <div className="space-y-4">
                      {category.items.map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                          <div>
                            <div className="font-semibold text-gray-900">{item.name}</div>
                            <div className="text-sm text-gray-600">{item.size}</div>
                          </div>
                          <Button size="sm" className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white rounded-full">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Partnerships */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Academic Partnerships</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              PCLA collaborates with leading universities and research institutions to advance understanding of recovery-oriented practice and supportive housing.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 rounded-2xl p-6 hover:shadow-xl transition-all">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#336f99] mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">UBC</div>
                  <h4 className="font-bold text-gray-900 mb-2">University of British Columbia</h4>
                  <p className="text-sm text-gray-600">School of Social Work</p>
                </CardContent>
              </Card>
              <Card className="border-2 rounded-2xl p-6 hover:shadow-xl transition-all">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#86a873] mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">SFU</div>
                  <h4 className="font-bold text-gray-900 mb-2">Simon Fraser University</h4>
                  <p className="text-sm text-gray-600">Faculty of Health Sciences</p>
                </CardContent>
              </Card>
              <Card className="border-2 rounded-2xl p-6 hover:shadow-xl transition-all">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#f26d2d] mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">UVic</div>
                  <h4 className="font-bold text-gray-900 mb-2">University of Victoria</h4>
                  <p className="text-sm text-gray-600">Department of Psychology</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#86a873] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in Research Collaboration?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to explore opportunities for academic partnerships and data access
          </p>
          <a href="/contact">
            <Button size="lg" className="bg-[#f26d2d] hover:bg-[#d65a1e] text-white px-10 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105">
              Contact Research Team
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Resources;