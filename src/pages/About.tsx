import { Target, Zap, Shield, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import facilityImage from '@/assets/facility.jpg';
import teamImage from '@/assets/about-team.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Quality Excellence',
      description: 'Maintaining the highest standards in pharmaceutical manufacturing with strict quality control',
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Full adherence to cGMP, ISO, WHO-GMP, and FDA standards ensuring global market access',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuous investment in R&D to develop cutting-edge pharmaceutical solutions',
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Growth',
      description: 'Eco-friendly manufacturing processes while ensuring business sustainability',
    },
  ];

  const expertise = [
    { years: '10+', label: 'Years Experience' },
    { years: '50+', label: 'Countries Served' },
    { years: '200+', label: 'Products' },
    { years: '500+', label: 'Satisfied Clients' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className=" py-[80px] mt-[80px] bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[25px] bg-gradient-to-t from-background  to-transparent pointer-events-none z-10" />
        <div className="absolute  inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEzIDAgNi0yLjY4NyA2LTZzLTIuNjg3LTYtNi02LTYgMi42ODctNiA2IDIuNjg3IDYgNiA2ek0yNCA2YzAgMy4zMTMgMi42ODcgNiA2IDZzNi0yLjY4NyA2LTYtMi42ODctNi02LTYtNiAyLjY4Ny02IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">About Amicus Life Sciences</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Leading the pharmaceutical industry with excellence, innovation, and commitment to quality
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <img
                  src={facilityImage}
                  alt="Our Facility"
                  className="relative rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Amicus Life Sciences has emerged as a dynamic and globally recognized pharmaceutical company, specializing
                in the manufacturing and export of high-quality Active Pharmaceutical Ingredients (APIs), pharmaceutical
                intermediates, excipients, and nutraceuticals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our state-of-the-art facility in Gujarat, India, is certified to the highest international standards,
                including cGMP, ISO, WHO-GMP, and FDA approval. This ensures that every product we manufacture meets
                rigorous quality and safety requirements.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to advancing healthcare globally by providing innovative pharmaceutical solutions that
                meet the evolving needs of the industry while maintaining sustainability and ethical practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Stats */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {expertise.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{stat.years}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our operations and drive our commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 card-hover bg-gradient-to-br from-background to-muted border-2 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Icon className="relative w-12 h-12 text-secondary transform group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Our Team</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our success is built on the expertise and dedication of our talented team. From research scientists to
                manufacturing specialists, quality control experts to regulatory professionals, every member of our team
                shares a commitment to pharmaceutical excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We invest continuously in training and development, ensuring our team stays at the forefront of
                pharmaceutical innovation and industry best practices.
              </p>
            </div>
            <div>
              <img
                src={teamImage}
                alt="Our Team"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
