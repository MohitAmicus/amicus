import { ArrowRight, Award, Globe, Users, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-lab.jpg';
import aboutImage from '@/assets/about-team.jpg';

const Index = () => {
  const certifications = [
    { name: 'cGMP Certified', icon: Award },
    { name: 'ISO Certified', icon: Award },
    { name: 'WHO-GMP', icon: Award },
    { name: 'FDA-Approved', icon: Award },
  ];

  const visionPoints = [
    {
      title: 'Expanding Global Presence',
      description: 'Strengthening our footprint across international markets with regulatory excellence and customer trust',
      icon: Globe,
    },
    {
      title: 'Advancing R&D & Innovation',
      description: 'Investing in cutting-edge research to develop new APIs, intermediates, and nutraceutical solutions',
      icon: Microscope,
    },
    {
      title: 'Building Strong Partnerships',
      description: 'Collaborating with leading pharmaceutical companies, healthcare providers, and research institutions',
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
<div className="absolute bottom-0 left-0 w-full h-[25px] bg-gradient-to-t from-background  to-transparent pointer-events-none z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
          }}
        />
        {/* Animated particles effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-secondary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white animate-fade-up">
            Welcome to <span className="text-gradient bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Amicus Life Sciences</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Your Trusted Pharmaceutical API Supplier
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 btn-glow shadow-xl">
              <Link to="/products">
                Explore Products <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white border-2 hover:border-secondary transition-all">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Amicus Life Sciences</span> is a dynamic and globally
                recognized pharmaceutical company specializing in the manufacturing and export of{' '}
                <span className="font-semibold text-foreground">
                  Active Pharmaceutical Ingredients (APIs), pharmaceutical intermediates, excipients, and nutraceuticals
                </span>
                .
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a <span className="font-semibold text-foreground">cGMP, ISO, WHO-GMP-Certified</span> and{' '}
                <span className="font-semibold text-foreground">FDA-Approved</span> facility in Gujarat, India, we are
                committed to delivering high-quality and innovative pharmaceutical solutions to meet the evolving needs of
                the healthcare industry.
              </p>
              <Button asChild className="mt-4">
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
            <div className="relative animate-scale-in group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <img
                src={aboutImage}
                alt="Our Team"
                className="relative rounded-2xl shadow-2xl w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 text-center card-hover bg-gradient-to-br from-background to-muted border-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-secondary/10 rounded-full blur-xl animate-pulse"></div>
                    <Icon className="relative w-12 h-12 mx-auto mb-4 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{cert.name}</h3>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Vision to Grow Better</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              At <span className="font-semibold text-foreground">Amicus Life Sciences</span>, our vision is to become a{' '}
              <span className="font-semibold text-foreground">global leader</span> in the pharmaceutical industry by
              continuously expanding our capabilities, product portfolio, and market reach.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {visionPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 card-hover bg-gradient-to-br from-background to-muted border-2 animate-fade-up group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                    <Icon className="relative w-12 h-12 text-secondary transform group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20  text-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEzIDAgNi0yLjY4NyA2LTZzLTIuNjg3LTYtNi02LTYgMi42ODctNiA2IDIuNjg3IDYgNiA2ek0yNCA2YzAgMy4zMTMgMi42ODcgNiA2IDZzNi0yLjY4NyA2LTYtMi42ODctNi02LTYtNiAyLjY4Ny02IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-up text-foreground">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in text-black" style={{ animationDelay: '0.2s' }}>
            Join leading pharmaceutical companies worldwide who trust Amicus Life Sciences for their API needs.
          </p>
          <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 btn-glow shadow-2xl text-lg px-8 py-6">
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
