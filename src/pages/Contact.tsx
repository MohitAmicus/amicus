import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS integration
    emailjs
      .send(
        'service_4bsp4hm', // replace with your EmailJS service ID
        'template_qni4upc', // replace with your EmailJS template ID
        formData,
        '_ikjhynkWrGhOCTPo' // replace with your EmailJS public key
      )
      .then(() => {
        toast({
          title: 'Message Sent!',
          description: 'Thank you for contacting us. We will get back to you soon.',
        });
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        toast({
          title: 'Failed to send message',
          description: 'Please try again later.',
          variant: 'destructive',
        });
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['S-33, Golden Square, Behind D-Mart, Bholav Road, Bharuch-392001'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@amicuslifesciences.com', 'sales@amicuslifesciences.com', 'support@amicuslifesciences.com'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 9998409981 +91 8200450152', 'Mon-Fri: 9:00 AM - 6:00 PM IST', 'Service : 24/7 Support'],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-[100px] mt-[80px] bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[25px] bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
        <div className="container mx-auto px-4 text-center relative animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Get in touch with our team for inquiries, partnerships, or support
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center card-hover bg-gradient-to-br from-background to-muted border-2 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto animate-scale-in">
            <Card className="p-8 border-2 shadow-2xl">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91-XXXX-XXXXXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto btn-glow" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'} <Send className="ml-2" size={16} />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
