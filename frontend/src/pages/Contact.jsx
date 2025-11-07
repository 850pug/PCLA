import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    toast.success('Thank you! We\'ve received your message and will respond within 24-48 hours.');
    setFormData({ name: '', email: '', phone: '', inquiryType: '', message: '' });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            We're here to help. Reach out with questions, referrals, or to learn more
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Whether you're seeking services, looking to get involved, or have questions about our programs, we'd love to hear from you.
                </p>
              </div>

              <Card className="border-2 rounded-2xl">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-[#336f99] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Phone</div>
                      <a href="tel:1-800-742-5275" className="text-gray-700 hover:text-[#336f99] transition-colors">1-800-PCLA-HELP</a>
                      <div className="text-sm text-gray-600 mt-1">Monday - Friday, 8am - 5pm PST</div>
                    </div>
                  </div>
                  <div className="border-t"></div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-[#336f99] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Email</div>
                      <a href="mailto:info@pclaservices.ca" className="text-gray-700 hover:text-[#336f99] transition-colors">info@pclaservices.ca</a>
                      <div className="text-sm text-gray-600 mt-1">We respond within 24-48 hours</div>
                    </div>
                  </div>
                  <div className="border-t"></div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-[#336f99] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Address</div>
                      <div className="text-gray-700">
                        123 Main Street<br />
                        Vancouver, BC V6B 1A1<br />
                        Canada
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 rounded-3xl">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-900 font-semibold mb-2 block">Full Name *</Label>
                        <Input 
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          required
                          className="border-2 rounded-xl py-6"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-900 font-semibold mb-2 block">Email Address *</Label>
                        <Input 
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          required
                          className="border-2 rounded-xl py-6"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-gray-900 font-semibold mb-2 block">Phone Number</Label>
                        <Input 
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="border-2 rounded-xl py-6"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      <div>
                        <Label htmlFor="inquiryType" className="text-gray-900 font-semibold mb-2 block">Inquiry Type *</Label>
                        <Select value={formData.inquiryType} onValueChange={(value) => handleChange('inquiryType', value)} required>
                          <SelectTrigger className="border-2 rounded-xl py-6">
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="services">Services & Referrals</SelectItem>
                            <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                            <SelectItem value="donate">Donations & Giving</SelectItem>
                            <SelectItem value="partner">Partnership Inquiries</SelectItem>
                            <SelectItem value="media">Media & Press</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-900 font-semibold mb-2 block">Message *</Label>
                      <Textarea 
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        required
                        rows={6}
                        className="border-2 rounded-xl"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-[#f26d2d] hover:bg-[#d65a1e] text-white py-6 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-red-600 to-red-700 border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-10 text-white">
                <div className="flex items-start space-x-6">
                  <AlertCircle className="w-12 h-12 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Crisis Support Available 24/7</h3>
                    <p className="text-xl mb-6 text-red-100">
                      If you or someone you know is in crisis, immediate help is available:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                        <div className="font-bold text-xl mb-2">Crisis Line</div>
                        <a href="tel:1-800-784-2433" className="text-2xl font-bold hover:underline">1-800-CRISIS-1</a>
                        <div className="text-sm mt-1 text-red-100">Available 24/7</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                        <div className="font-bold text-xl mb-2">Mental Health Support</div>
                        <div className="text-2xl font-bold">Text HOME to 741741</div>
                        <div className="text-sm mt-1 text-red-100">Crisis text line</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accessibility Statement */}
      <section className="py-12 bg-white border-t-2">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Accessibility Commitment</h3>
            <p className="text-gray-700 leading-relaxed">
              PCLA is committed to ensuring accessibility for all. If you require accommodations to access our services or facilities, please contact us and we'll work with you to meet your needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;